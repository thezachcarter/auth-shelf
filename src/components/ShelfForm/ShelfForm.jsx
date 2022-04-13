import React, {useState} from "react";


function ShelfForm() {

    const handleSubmit = (event) => {
        event.preventDefault;
        console.log('submit clicked');
        setItem({})
    }

    const [item, setItem] = useState({
        description: '',
        image_url: ''
    })
    
    return (
        <div>
        <form>
            <input type="text" placeholder="item description" value="description"/>
            <input type="text" placeholder="image url" value="image_url"/>
            <button type="submit" onClick={(event) => handleSubmit(event)}>Submit</button>
        </form>
        </div>
    )
}

export default ShelfForm;