import React from "react"
import ItemList from "./itemList"
function List(props) {
    return (
        <ul>
            {props.items.map((item) => {            
               return <ItemList item={item} removeItem={props.removeItem} Doned={props.Doned}></ItemList>
            })}
        </ul>
    )
}


export default List