import React from 'react';
import axios from 'axios';

function Item(props){

    let deleteItem = () => {
        let itemToDelete = {
            id:props.id
        }
        console.log(itemToDelete);
        axios.delete("http://localhost:5000/item/delete",{ data:  itemToDelete  })
        .then((res) => {console.log(res);
        props.getAll()}
        
        ).catch((err) =>{
            console.log(err)
        })
    }

    return (
        <tr>
          <td>
            {props.username}
          </td>
          <td>
            {props.content}
          </td>
          <td>
            <button onClick={deleteItem}>delete</button>
          </td>
        </tr>
    );

}

export default Item;