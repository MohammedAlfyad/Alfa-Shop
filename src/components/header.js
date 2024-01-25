import '../css/header.css'
import { Link } from 'react-router-dom';
function Header () {
    return (
        <>
        <div className="dash">
            <h1 className="logo"> <Link className='logo' to="/home"> Alfa Shop </Link></h1>
                <ul className='links'>
                    <li className='home'> <Link className='link' to="/home"> Home </Link> </li>
                    <li className='prod'> <Link className='link' to="/products"> Products </Link> </li>
                    <li className='abo'> <Link className='link' to="/About"> About </Link> </li>
                    <li className='con'> <Link className='link' to="/Contact"> Contact </Link> </li>      
                    <li className='loge'> <Link className='log link' to="/"> Log Out </Link> </li>                                  
                </ul>
        </div>
        </>
    )
}
export default Header;