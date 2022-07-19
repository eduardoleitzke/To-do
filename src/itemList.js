import React from "react"

function ItemList(props) {
    return (
      
            <div className = "content">
                <li className="card" >
                    <p className={props.item.done ? "doned" : ""}>{props.item.text}</p>

                    <button className="remove" onClick={() => props.removeItem(props.item)} key={props.item.id}>
                        X
                    </button>


                </li>
                <div className="centerBtn">
                    <button className={props.item.done ? "done doneIt" : "done"} onClick={() => props.Doned(props.item)}></button>
                </div>
            </div>
        
    )
}


export default ItemList