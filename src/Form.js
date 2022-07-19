import React from "react"

function Form(props) {
    return(
    <form>
        <input onChange={props.todoText} type="text" value={props.text} />
        <button onClick={props.addText}>Adicionar</button>
        <button onClick={props.restart}>Restart</button>
    </form>
    )
}

export default Form