import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogsItem';



const Dialogs = (props) => {


    let newMessElement = React.createRef();
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map((d) => {
        return <DialogItem name={d.name} id={d.id} />
    });


    let messagesElements = state.messages.map(m => {
        return <Message message={m.message} id={m.id} />
    });



    let addMessage = () => {
        props.sendMessage()
        // newMessElement.current.value = ''

    }

    let onMessageChange = () => {
        let body = newMessElement.current.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div><textarea placeholder='Enter your message'
                    ref={newMessElement} value={props.newMessageBody}
                    onChange={onMessageChange}></textarea></div>
                <div><button onClick={addMessage}>Send</button></div>
            </div>

        </div >
    )
}

export default Dialogs