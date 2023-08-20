import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };
    
    return (
        <header>
            <div className="header-content-wrapper">
                <div className="logo-wrapper">
                    <h1>BLOG</h1>
                </div>

                <div className="nav-wrapper">
                    <nav className="nav">
                        <ul className="nav-list">
                            <li className="nav-list-item"><Link to="/" className="nav-list-link">Home</Link></li>
                            <li className="nav-list-item"><Link to="#" className="nav-list-link">Category</Link></li>
                            <li className="nav-list-item"><Link to="#" className="nav-list-link">About Us</Link></li>
                            <li className="nav-list-item"><Link to="#" className="nav-list-link">Search</Link></li>

                            {token && 
                                <li className="nav-list-item"><Link onClick={logout} className="nav-list-link">Logout</Link></li>
                            }

                            {!token && 
                                <>
                                    <li className="nav-list-item"><Link to="/login" className="nav-list-link">Login</Link></li>
                                    <li className="nav-list-item"><Link to="/register" className="nav-list-link">Register</Link></li>
                                </>
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;