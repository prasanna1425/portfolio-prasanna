import { Link } from "react-router-dom"
const Header=()=>{
    return(<nav>
        
           <Link to={"/"}>Home</Link><br/>
           <Link to={"/contact"}>Contact</Link><br/>
           <Link to={"/certificates"}>Certificates</Link>
        
        </nav>)
}
export default Header