function Panel () {
    return (
      
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

       
        {/* Topbar Navbar */}
        <ul className="navbar-nav ml-auto">
            
            <div className="topbar-divider d-none d-sm-block"></div>

            {/* Nav Item - User Information */}
            <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="/home/listSale" id="userDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Home</span>
                    <img className="img-profile" src="img/casa.png"/>
                </a>
            </li>

        </ul>

    </nav>

    );
}

export default Panel;