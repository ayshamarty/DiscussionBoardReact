import React from 'react';

function Item(props){
    return (
        <tr>
          <td>
            {props.obj.username}
          </td>
          <td>
            {props.obj.content}
          </td>
          <td>
            <button>delete</button>
          </td>
        </tr>
    );

}

export default Item;