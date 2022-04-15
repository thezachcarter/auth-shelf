import React, {useState} from "react";
import { useDispatch } from 'react-redux';


function ShelfForm() {

    const dispatch = useDispatch();

    const [item, setItem] = useState({
        description: '',
        image_url: ''
    })

    const handleItemDescription = (event) => {
        console.log('in handleNewItem, event:', event.target.value, 'item:', item);
        setItem({
            ...item,
            description: event.target.value,
        })
    }

    const handleItemImage = (event) => {
        console.log('in handleNewItem, event:', event.target.value, 'item:', item);
        setItem({
            ...item,
            image_url: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault;
        console.log('submit clicked', item);
        dispatch({type: 'POST_ITEM', payload: item})
    }
    
    return (
        <div>
        <h3>Put an item on the shelf!</h3>
        
            <form method="POST" action="/upload" encType="multipart/form-data">
                <label>Upload image</label>
                <input type="file" name="image" required/>
                <input type="submit" value="Upload" />
                
                <input type="text" placeholder="description" onChange={handleItemDescription}/>
                {/* <input type="text" placeholder="image url" onChange={handleItemImage}/> */}
                <button type="submit" onClick={(event) => handleSubmit(event)}>Submit</button>
            </form>
        </div>
    )
}

export default ShelfForm;