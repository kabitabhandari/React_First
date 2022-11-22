import {useState} from 'react';
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
    const [currentState, setState] = useState(false);

    function deleteHandler() {
        setState(true);
    }
    function closeModalHandler() {
        setState(false);
    }

    return(
    <div className='card'>
        <h2>{props.course}</h2>
        <div className='actions'>
            <button className='btn' onClick={deleteHandler} >Delete</button>
        </div>
        {currentState ? <Modal onCancel = {closeModalHandler} onConfirm = {closeModalHandler} /> : null}
        {currentState ? <Backdrop whenClick = {closeModalHandler} /> : null }


    </div>
    );
}

export default Todo;