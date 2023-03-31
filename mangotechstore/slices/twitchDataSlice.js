// const initialState = {
//     data: [],
//     loading: false,
//     error: null,
//   };

//   const dataSlice = {
//     name: 'data',
//     reducer: (state = initialState, action) => {
//       switch (action.type) {
//         case 'FETCH_DATA_BEGIN':
//           return {
//             ...state,
//             loading: true,
//             error: null,
//           };
//         case 'FETCH_DATA_SUCCESS':
//           return {
//             ...state,
//             loading: false,
//             data: action.payload.data,
//           };
//         case 'FETCH_DATA_ERROR':
//           return {
//             ...state,
//             loading: false,
//             error: action.payload.error,
//             data: [],
//           };
//         default:
//           return state;
//       }
//     },
//     actions: {
//       fetchData: payload => async (dispatch) => {
//         dispatch({ type: 'FETCH_DATA_BEGIN' });
//         try {
//           const response = await fetch(`https://api.example.com/data`, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(payload),
//           });
//           const data = await response.json();
//           dispatch({ type: 'FETCH_DATA_SUCCESS', payload: { data } });
//         } catch (error) {
//           dispatch({ type: 'FETCH_DATA_ERROR', payload: { error } });
//         }
//       },
//     },
//   };

//   export default dataSlice;
