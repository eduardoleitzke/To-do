import Item from "../Item"

export function addText(text){
    let item = new Item(text)
    return {type:"ADD_ITEM", payload: item}
}

export function deletedItem(id){
    return {type:"REMOVE_ITEM", payload: id}
}

export function Doned(id){
    return {type: "DONED", payload: id}
}