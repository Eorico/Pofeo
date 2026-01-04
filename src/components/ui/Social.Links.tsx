import { Github, Twitter, MessageCircle } from "lucide-react";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import ChatBot from "../chat/ai/Chat.Bot";
import '../../styles/Home.css';

const SocialLinks = () => {
    const [openChat, setOpenChat] = useState(false);

    return (
        <div className="social-links">
            <a href="https://github.com/Eorico/django-portfolio" className="social-link">
            <Github size={24} />
            </a>
            <a href="https://www.facebook.com/ej.gonzales.37" className="social-link">
            <FaFacebook size={24} />
            </a>
            <a href="https://www.instagram.com/ico_gonzales/" className="social-link">
            <Twitter size={24} />
            </a>
            
            <button className="chat-bot-btn" onClick={()=> setOpenChat(!openChat)}>
                <a className="social-link">
                <MessageCircle size={24} style={{ transform: 'scaleX(-1)' }} />
                </a>
            </button>

            {
                openChat && <ChatBot onClose={() => setOpenChat(false)} />
            }
    </div>
    );
};

export default SocialLinks;