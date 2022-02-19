import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { List, Datagrid, TextField, ReferenceField, EditButton, Edit, Create, SimpleForm, ReferenceInput, SelectInput, TextInput, SimpleList } from 'react-admin';

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
        <SelectInput optionText="name" />
    </ReferenceInput>
];

function PostList(props) {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List filters={postFilters} {...props}>
            {isSmall ? (
                <SimpleList 
                    primaryText={record => record.title} 
                    secondaryText={record => `${record.views} views`} 
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()} 
                />
                // Note: Since JSONRestServer doesn’t provide views or published_at values for posts, we switched to a custom API for those screenshots in order to demonstrate how to use some of the SimpleList component props.
            ) : (
                <Datagrid rowClick="edit">
                    <TextField source="id" />
                    <ReferenceField source="userId" reference="users">
                        <TextField source="name" /> 
                    </ReferenceField>
                    {/* <ReferenceField> component fetches the reference data from `users`, and passes it as a record to its child component (<TextField>). */}
                    <TextField source="title" />
                    <EditButton />
                </Datagrid>
            )}
            
        </List>
    );
}

function PostTitle({ record }) {
    return (
        <span>Post {record ? `"${record.title}"` : ""}</span>
    );
}

function PostEdit(props) {
    return (
        <Edit title={<PostTitle />} {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <ReferenceInput source="userId" reference="users">
                    <SelectInput optionText="name" />
                </ReferenceInput>
                <TextInput source="title" />
                <TextInput multiline source="body" />
            </SimpleForm>
        </Edit>
    );
}

function PostCreate(props) {
    return (
        <Create {...props}>
            <SimpleForm>
                <ReferenceInput source="userId" reference="users">
                    <SelectInput optionText="name" />
                </ReferenceInput>
                <TextInput source="title" />
                <TextInput multiline source="body" />
            </SimpleForm>
        </Create>
    );
}

export default PostList;
export { PostEdit, PostCreate };

/* react-admin uses Optimistic Rendering 
   When a user edits a record and hits the “Save” button, the UI shows a confirmation and displays the updated data before sending the update query to server. 
   > Advantages: 
   1) Immediate UI changes
   2) 'Undo' option on confirmation message
*/