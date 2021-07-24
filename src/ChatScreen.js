import React,{useState} from 'react'
import Avatar from "@material-ui/core/Avatar"
import './ChatScreen.css'

function ChatScreen() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name:'Rihana',
            image:'https://www.thewikifeed.com/wp-content/uploads/2020/12/nayanthara-3.jpg',
            message: "Whats up"
        },
        {
            name:'Rihana',
            image:'https://www.thewikifeed.com/wp-content/uploads/2020/12/nayanthara-3.jpg',
            message: "What happened"
        },
        {
            message: 'How its going'
        }
    ])

    const handleSend = (e) =>{
        e.preventDefault()
        setMessages([...messages, {message:input}])

        setInput('')
    }
    return (
        <div classname="chatScreen">
        <p className="chatScreen__timestamp">
            YOU MATCHED WITH RIHANA ON 10/06/2021
         </p>
        {messages.map((message)=>
        message.name?(
        <div className="chatScreen__message">
               <Avatar
               className="chatScreen__image" 
               alt={message.name} 
               src={message.image}
               />
               <p className="chatScreen__text">{message.message}</p>
           </div>
        ) : (
            <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
            </div>
        )
           
        )}

            <form className="chatScreen__input"> 
                <input 
                value = {input}
                onChange = {(e)=> setInput(e.target.value)}
                className="chatScreen__inputField"
                placeholder="Type a message...."/>
                <button 
                type="submit"
                onClick={handleSend}
                className="chatScreen__inputButton">SEND</button>
            </form>

        </div>
    )
}

export default ChatScreen
