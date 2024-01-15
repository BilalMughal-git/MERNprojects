import React from "react";

function List(props) {
    return (
       
            <li className="todoList">
            <span>               
             <input type="checkbox" />
             <span className="itemText"> {props.data}</span>
                </span>
                <p>...</p>
            </li>
            
        
    );
}

export default List;
