import React from 'react';
import { List, Datagrid, TextField, ReferenceField } from 'react-admin';

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
            </Datagrid>
        </List>
    );
}

export default PostList;