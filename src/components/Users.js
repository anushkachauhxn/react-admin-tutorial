import * as React from "react";
import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';
import MyUrlField from "./MyUrlField";

function UserList(props) {
    return (
        <List {...props}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="name" />
                <EmailField source="email" />
                <TextField source="phone" />
                <MyUrlField source="website" /> {/* <UrlField source="website" /> */}
                <TextField source="company.name" />
                {/* Each Field component maps a different field in the API response, specified by the source prop. */}
            </Datagrid>
        </List>
    );
}

export default UserList;

// The <ListGuesser> component is not meant to be used in production - it’s just a way to quickly bootstrap an admin. 
// => You’ll have to replace the ListGuesser component in the users resource (in App.js) by a custom React component.
// => This is our custom React component to display the list of users.
// <ListGuesser> component created one column for every field in the response. Here, we can remove the fields we don't want.