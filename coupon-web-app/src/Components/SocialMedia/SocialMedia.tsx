import "./SocialMedia.css";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
export const SocialMedia:React.FC =() => {
    return (
        <div className="SocialMedia">
            <a href="https://www.facebook.com/bar.sady/"><BsFacebook size={42} /></a>
            <a href="https://www.linkedin.com/in/bar-saadi-b0548922a/"><BsLinkedin size={42} /></a>
            <a href="https://github.com/PandaBearBar"><BsGithub size={42} /></a>
            <a href="https://www.instagram.com/bar_saadi/"><BsInstagram size={42} /></a>
        </div>
    );
}
