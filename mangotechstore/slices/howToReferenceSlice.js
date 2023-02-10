// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import dataSlice from './dataSlice';

// const DataComponent = () => {
//   const { data, loading, error } = useSelector(state => state.data);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(dataSlice.actions.fetchData({ payload: { ... } }));
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <ul>
//       {data.map(item => (
//         <li key={item.id}>{item.name}</li>
//       ))}
//     </ul>
//   );
// };

// export default DataComponent;
