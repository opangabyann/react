// import { legacy_createStore as createStore, combineReducers } from "redux";
// //membuat state

// const initialState = {
//   value: 0,
//   status: "ooomagaa",
// };

// //membuat reducer => function utk merubah value dari state redux

// export const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         ...state,
//         value: state.value + 1,
//         status: action.status,
//       };
//     case "DECREMENT":
//       return {
//         ...state,
//         value: state.value - 1,
//         status: action.status,
//       };

//     default:
//       return state;
//   }
// };

// const colorState = {
//   color: "#FF5733",
// };

// const colorReducer = (state = colorState, action) => {
//   if (action.type === "change") {
//     return { color: action.color };
//   }
//   if (action.type === "return") {
//     return {
//       color: "FF5733",
//     };
//   }
//   return state;
// };

// export const increment = () => {
//   return {
//     type: "INCREMENT",
//     status: "berhasil ditambahkan",
//   };
// };

// export const decrement = () => {
//   return {
//     type: "DECREMENT",
//     status: "berhasil dikurangi",
//   };
// };

// const allReducers = combineReducers({
//   count: reducer,
//   color: colorReducer,
// });

// export const store = createStore(
//   allReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
