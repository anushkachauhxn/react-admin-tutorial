import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from "./components/AuthProvider";
import dataProvider from "./components/DataProvider";
import Dashboard from "./components/Dashboard";
import UserList from "./components/Users";
import PostList, { PostEdit, PostCreate } from "./components/Posts";
import UserIcon from '@material-ui/icons/Group';
import PostIcon from '@material-ui/icons/Book';

// dataProvider prop - a function capable of fetching data from an API
// Since there is no standard for data exchanges between computers, you will probably have to write a custom provider to connect react-admin to your own APIs
// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
function App() {
  return (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} /> 
      <Resource name="users" list={UserList} icon={UserIcon} /> 
      {/* <Resource> = Each resource maps a name to an endpoint in the API.
          >> Above code informs react-admin to fetch the “users” records from the https://jsonplaceholder.typicode.com/users URL
          + it should use should use the <ListGuesser> component to display the list of posts. */}
    </Admin>
  );
}

export default App;
