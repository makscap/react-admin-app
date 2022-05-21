import * as React from "react";
import { Admin, Resource, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./components/User";
import { PostCreate, PostList } from "./components/Post";
import Dashboard from "./components/Dashboard";
import authProvider from "./components/AuthProvider";

import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource
      name="posts"
      list={PostList}
      edit={EditGuesser}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
);

export default App;

// Підказка list={ListGuesser}означає,
// що react - admin повинен використовувати
//   < ListGuesser > компонент для відображення
//    списку публікацій.Цей компонент визначає
//    формат для стовпців списку на основі даних,
//   отриманих з API.
