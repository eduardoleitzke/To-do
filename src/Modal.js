import React from "react";
import CardModal from "./CardModal"
function Modal(props){
    

   
    
    return (
            <div id="modal" onClick={props.hideModal} className={props.show? "modal hide" : "modal"}>
                <CardModal>
                    {props.children}
                </CardModal>
            </div>
    )
}

export default Modal