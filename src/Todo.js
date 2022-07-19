import React, { useEffect, useState } from "react"
import Item from "./Item"
import Form from "./Form"
import List from "./List"
import "./Todo.css"
import Modal from "./Modal"
const SAVE_ITENS = "savedItens"
function Todo() {

    const [text, setText] = useState("");
    const [items, setItems] = useState([]);
    const [show, setShow] = useState(true)

    useEffect(() => {
        let savedItens = JSON.parse(localStorage.getItem(SAVE_ITENS))
        if (savedItens) {
            setItems(savedItens)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(SAVE_ITENS, JSON.stringify(items))
    }, [items])
    function todoText(e) {
        e.preventDefault();
        let t = e.target.value

        setText(t)
    }

    function addText(e) {

        e.preventDefault();
        let item = new Item(text)

        if (item.text === "" || item.text === undefined) {
            return
        }
        for (let i = 0; i < items.length; i++) {

            if (items[i].text === item.text) {
                return
            }
        }

        setItems([...items, item])
        setText("")
        setShow(true)
    }

    function removeItem(it) {

        let deletedItem = items.filter((item) => { return item.id !== it.id });

        setItems(deletedItem)
    }
    function restart(e) {
        e.preventDefault()
        setItems([])
    }

    function Doned(it) {
        for (let i = 0; i < items.length; i++) {
            if (items[i].id === it.id) {
                if (items[i].done === false) {
                    items[i].done = true
                } else {
                    items[i].done = false
                }
            }
        }
        let donedItem = items.filter((item) => { return item })
        setItems(donedItem)
    }


    function hideModal(e){
        let target = e.target
        if(target.id === "modal"){
            setShow(true)
        }
    }

    function showModal(e){
        if(e.target){
            setShow(false)
        }
    }
    return (
            <div className="container">
                <header className="header"> <h1>To Do:</h1> <button onClick={showModal} className="headerBtn">+</button></header>
                
                <List items={items} removeItem={removeItem} Doned={Doned}  ></List>
                <Modal hideModal = {hideModal} show={show}>
                    <Form todoText={todoText} addText={addText} text={text} restart={restart}></Form>
                </Modal>
            </div>
        
    )
}

export default Todo