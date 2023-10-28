import logo from "../../../public/New Logo.png";
import { AiOutlineTwitter , AiOutlineMedium, AiFillGithub} from "react-icons/ai";
import { FaTelegram,FaDiscord} from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <div className="leading-10 mb-4">
    <hr className="mb-6" />
      <div className="flex align-middle justify-center text-2xl mb-2 font-mono ">
        <img className="w-8" src={logo} alt="" />
        <span className="text-3xl">Romi Finance</span>
      </div>
      <div className="flex gap-6 text-3xl justify-center">
        <AiOutlineTwitter></AiOutlineTwitter>
        <AiOutlineMedium></AiOutlineMedium>
        <AiFillGithub></AiFillGithub>
        <FaTelegram></FaTelegram>
        <FaDiscord></FaDiscord>
      </div>
      <div className="text-center">
        <p className="tracking-widest mt-2 text-lg"> Terms and Conditions Referral Terms Media Kit</p>
      </div>
    </div>
  );
};

export default Footer;
