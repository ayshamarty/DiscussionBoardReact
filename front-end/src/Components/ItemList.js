import React from "react";
import Item from "./Item";

function ItemList(props) {
    
//   const { data } = props.data;

  const tabRow = () => {
    props.data.map(function(object, i){
        return <Item obj={object} key={i} />;
    });
  }

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
        <tbody>{tabRow()}</tbody>
      </table>
    </div>
  );
}

export default ItemList;
