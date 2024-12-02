
// import {Type} from './actiontype'

// export const initialState = {
//     basket: [],
// };
// export const reducer =(state, action)=>{
//    switch (action.type) {
//     case Type.ADD_TO_BASKET:
//         return {
//             ...state,
//             basket:[...state.basket,action.item]
//         }

//         // break;

//         default:
//         return state;

//    }
// }

export const initialState = {
    basket: [],
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
      default:
        return state;
    }
  };
  