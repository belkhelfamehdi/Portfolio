import {Link} from 'react-router-dom'
import { FaCode } from "react-icons/fa6";

const Logo = () => {
    return (
        <div className="flex items-center justify-center">
            <Link to="/Portfolio">
                <FaCode className="text-4xl text-[#cf1b1b]" />
            </Link>
        </div>
    );
};

export default Logo;
