import React from "react";
import _ from "lodash";

import "../App.css";

import Item from "./Item";

function ItemList(props) {


  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <td>Username</td>
            <td>Post</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {_.reverse(props.data).map(item => (
            
             
                <Item
                  getAll={props.getAll}
                  username={item.username}
                  content={item.content}
                  id={item._id}
                />
              
            
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ItemList;
