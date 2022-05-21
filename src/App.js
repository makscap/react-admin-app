import * as React from "react";
import { Admin, Resource, EditGuesser } from "react-admin";
// import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./components/User";
import { PostCreate, PostList } from "./components/Post";
import Dashboard from "./components/Dashboard";
// import authProvider from "./components/AuthProvider";
import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
} from "react-admin-firebase";

import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

const firebaseConfig = {
  apiKey: "AIzaSyCxjmDJVM8rcc28nDvMAuH4vIsZkZyQwD8",
  authDomain: "helps-9814f.firebaseapp.com",
  projectId: "helps-9814f",
  storageBucket: "helps-9814f.appspot.com",
  messagingSenderId: "549871292538",
  appId: "1:549871292538:web:9cef1aa0cec522d092abc3",
  measurementId: "G-Y81L8CKYBE",
};

// import { firebaseConfig as config } from "./FIREBASE_CONFIG";

const options = {
  logging: true,
  rootRef: "root_collection/some_document",
};
const dataProvider = FirebaseDataProvider(firebaseConfig, options);
const authProvider = FirebaseAuthProvider(firebaseConfig, options);

// const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin
    dashboard={Dashboard}
    dataProvider={dataProvider}
    authProvider={authProvider}
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
