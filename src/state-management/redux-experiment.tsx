import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { Provider, useDispatch, useSelector } from "react-redux";

// Define slice (reducer + actions together)
const messageSlice = createSlice({
  name: "message",
  initialState: { message: "Hello, World!" },
  reducers: {
    updateMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

// Export actions
const { updateMessage } = messageSlice.actions;

// Create store
const store = configureStore({
  reducer: {
    message: messageSlice.reducer,
  },
});

// Types for hooks (good for TS projects)
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const MyComponent = () => {
  const message = useSelector((state: RootState) => state.message.message);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <View>
      <Text>{message}</Text>
      <Button onPress={() => dispatch(updateMessage("Hello, Redux Toolkit!"))}>
        Update
      </Button>
    </View>
  );
};

const App = () => (
  <Provider store={store}>
    <MyComponent />
  </Provider>
);

export default App;

// import { View } from "react-native";
// import { Button, Text } from "react-native-paper";
// import { Provider, useDispatch, useSelector } from "react-redux";
// import { createStore } from "redux";

// const initialState = { message: "Hello, World!" };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "UPDATE_MESSAGE":
//       return { ...state, message: action.payload };
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);

// const MyComponent = () => {
//   const message = useSelector((state) => state.message);
//   const dispatch = useDispatch();

//   return (
//     <View>
//       <Text>{message}</Text>
//       <Button
//         onPress={() =>
//           dispatch({ type: "UPDATE_MESSAGE", payload: "Hello, Redux!" })
//         }
//       >
//         Update
//       </Button>
//     </View>
//   );
// };

// const App = () => (
//   <Provider store={store}>
//     <MyComponent />
//   </Provider>
// );
