//import link router-dom
import { Link } from "react-router-dom";
//import component
import Button from "./Button";
//css import
import '../css/navbar.css'

function Navbar (){
    return(
        //navbar onde fica os links das paginas
        <nav className="d-flex justify-content-between align-items-center">
            {/** link para a pagina*/}
            <Link to='/'>
                <h1 className="col-8">Notas</ h1>
            </Link>

            <Link to={'/post'} >
                <Button type={'button'} value={'Post'} />
            </Link>
        </nav>
    )
}

export default Navbar;