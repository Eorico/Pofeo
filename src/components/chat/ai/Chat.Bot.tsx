import { XCircle } from "lucide-react";
import { MdSmartToy } from 'react-icons/md';
import { useEffect, useRef, useState } from "react";
import { getBotReply } from "../responses/bot";
 

type ChatBotProps = {
    onClose: () => void;
}

const greetingsText = [
  { greet: "Hello! What can I do for you today?" },
  { greet: "Hi there! Need any help exploring my portfolio?" },
  { greet: "Hey! Feel free to ask me anything about my work." },
  { greet: "Hello! I’m here to guide you through my projects." },
  { greet: "Hi! Looking for information about my skills or hobbies?" },
];

const ChatBot = ({onClose}: ChatBotProps) => {

    const randomizeGreetings = greetingsText[Math.floor(Math.random() * greetingsText.length)].greet;

    const [messages, setMessages] = useState<{from: "bot" | "user"; text: string}[]>
        ([
           { from: "bot", text: randomizeGreetings } 
        ]);

    const [input, setInput] = useState("");
   
    const messageEndRef = useRef<HTMLDivElement>(null);

    const sendMessage = () => {
        if (!input.trim()) return;

        setMessages(prev=>[...prev, {from: "user", text: input}]);
        const userMessage = input;
        setInput('');
      

        setTimeout(() => {
            const botReply = getBotReply(userMessage);
            setMessages(prev=>[...prev, {from: "bot", text: botReply}]);
          
        }, 1500);
    };

    useEffect(() => {
        messageEndRef.current?.scrollIntoView({behavior: "smooth"});
    }, [messages]);

    return (
        <div className="chat-bot">
            <div className="chat-bot-header">
                <div className="bot-profile-header bot-profile">
                    <img src="/assets/eoLogo.png" alt="Bot Profile"  style={{width: 50, height: 50}}/>
                </div>

                <span>
                    EO-ASSISTANT
                </span>

                <div><MdSmartToy size={22} color={'#ec5f5fff'}  style={{ marginLeft: -50, marginTop: 5 }}/></div>
                <button
                    onClick={onClose}
                    className="chat-bot-close-btn"
                >
                    <XCircle size={25} color="gray"/>
                </button>
            </div>

            <div className="chat-bot-body">
                {
                    messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={`message-row ${msg.from === "bot" ? "bot-row" : "user-row"}`}
                        >
                            {msg.from === "bot" && (
                            <div className="bot-profile">
                                <img src="/assets/eoLogo.png" alt="Bot Profile" />
                            </div>
                            )}
                            <div className={`message ${msg.from === "bot" ? "bot-message" : "user-message"}`}>
                                <p>{msg.text}</p>
                            </div>
                        </div>
                    ))
                }

                <div ref={messageEndRef}/>
            </div>

            <div className="chat-bot-input-container">
                <input 
                    type="text" 
                    placeholder="Type a message"
                    className="chat-bot-input"
                    value={input}
                    onChange={e=>setInput(e.target.value)}
                    onKeyDown={e=>e.key==="Enter"&&sendMessage()}
                />
                <button 
                    className="chat-send-btn"
                    onClick={sendMessage}
                >
                        Send
                </button>
            </div>
        </div>
    );
}

export default ChatBot;