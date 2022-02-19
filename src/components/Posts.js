import React from 'react';
import { List, Datagrid, TextField, ReferenceField, EditButton, Edit, SimpleForm, ReferenceInput, SelectInput, TextInput } from 'react-admin';

function PostList(props) {
    return (
        <List {...props}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <ReferenceField source="userId" reference="users">
                    <TextField source="name" /> 
                </ReferenceField>
                {/* <ReferenceField> component fetches the reference data from `users`, and passes it as a record to its child component (<TextField>). */}
                <TextField source="title" />
                <EditButton />
            </Datagrid>
        </List>
    );
}

function PostEdit(props) {
    return (
        <Edit {...props}>
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

export default PostList;
export { PostEdit };