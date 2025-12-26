import { Github, Twitter } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

const SocialLinks = () => {
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
    </div>
    );
};

export default SocialLinks;