import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="header-content-wrapper">
                <div className="logo-wrapper">
                    <h1>BLOG</h1>
                </div>

                <div className="nav-wrapper">
                    <nav className="nav">
                        <ul className="nav-list">
                            <li className="nav-list-item"><a href="/" className="nav-list-link">Home</a></li>
                            <li className="nav-list-item"><a href="#" className="nav-list-link">Category</a></li>
                            <li className="nav-list-item"><a href="#" className="nav-list-link">About Us</a></li>
                            <li className="nav-list-item"><a href="#" className="nav-list-link">Search</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;