import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from 'react';


function ShelfPage() {

  
  const dispatch = useDispatch();
  const item = useSelector(store => store.item);

  useEffect(() => {
    // dispatch to get all items to display on the DOM
    dispatch({ type: 'GET_ITEM' });
}, []);



  // const itemDelete = () => {
  //   console.log('DELETE BUTTON CLICKED', item.id);
  //   dispatch({ type:'DELETE_ITEM', payload: item.id});
  // }

  return (
    <div className="container">
      <h2>Shelf</h2>
      
      {/* <ImageUpload/> */}
  
      <table> 
        <thead>
        <tr>
          <th>Username</th>
          <th>Image</th>
          <th>Description</th>
          <th>Delete</th>
        </tr>
        </thead>

        <tbody>
            {item.map((oneItem) => {
              console.log(oneItem);
              return (
              <tr key={oneItem.id}>
              <td>{oneItem.username}</td>
              <td><img src={oneItem.image_url}/></td>
              <td>{oneItem.description}</td>
              <td><button onClick={(event) => dispatch({ type:'DELETE_ITEM', payload: oneItem.id})}>Delete</button></td>
              </tr>
              )
            })}
        </tbody>
      </table>

    </div>
  );
}

export default ShelfPage;

