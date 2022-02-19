import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

// dataProvider prop - a function capable of fetching data from an API
// Since there is no standard for data exchanges between computers, you will probably have to write a custom provider to connect react-admin to your own APIs
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={ListGuesser} /> 
      {/* <Resource> = Each resource maps a name to an endpoint in the API.
          >> Above code informs react-admin to fetch the “users” records from the https://jsonplaceholder.typicode.com/users URL
          + it should use should use the <ListGuesser> component to display the list of posts. */}
    </Admin>
  );
}

export default App;
