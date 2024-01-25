import '../css/header.css'
import { Link } from 'react-router-dom';
function AdminHeader () {
    return (
        <>
        <div className="dash">
            <h1 className="logo"> <Link className='logo' to="/adminHome"> Alfa Shop </Link></h1>
                <ul className='links'>
                    <li className='prod'> <Link className='link' to="/adminHome"> Product Management </Link> </li>      
                    <li className='loge'> <Link className='log link' to="/"> Log Out </Link> </li>                                  
                </ul>
        </div>
        </>
    )
}
export default AdminHeader;