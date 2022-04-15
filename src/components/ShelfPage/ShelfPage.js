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

console.log(item);

  const itemDelete = () => {
    console.log('delete clicked');
    dispatch({ type:'DELETE_ITEM'});
  }

  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      
      
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
              <tr>
              <td>{oneItem.username}</td>
              <td><img src={oneItem.image_url}/></td>
              <td>{oneItem.description}</td>
              <td><button onClick={itemDelete}>Delete</button></td>
              </tr>
              )
            })}
        </tbody>
      </table>

    </div>
  );
}

export default ShelfPage;

