import React from 'react'

const BarraNav = () => {
    return (
        <div>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/index">
                <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">TeraSoft</div>
            </a>

            {/* Divider */}
            <hr className="sidebar-divider my-0" />

            {/* Nav Item - Dashboard */}
            <li className="nav-item active">
                <a className="nav-link" href="/">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Home</span></a>
            </li>

{/* Divider */}
{/*Nav Item - Pages Collapse Menu */}
<hr className="sidebar-divider" />

{/*Heading */}
<div className="sidebar-heading">
</div>

{/*Nav Item - Pages Collapse Menu */}
<li className="nav-item">
    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        {/* En la linea siguiente está el ícono con el que viene la app por defecto*/}
        {/*<i className="fas fa-fw fa-cog"></i> */}
        <i className="fa fa-user" aria-hidden="true"></i>
        <span>Gestionar Usuarios</span>
    </a>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">GESTIONAR USUARIOS:</h6>
            <a className="collapse-item" href="/users">Listar Usuarios</a>
            <a className="collapse-item" href="/add-user">Agregar Usuario</a>
        </div>
    </div>
</li>

{/* Nav Item - Utilities Collapse Menu */}
<li className="nav-item">
    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        <span>Gestionar Ventas</span>
    </a>
    <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
        data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">GESTIONAR VENTAS:</h6>
            <a className="collapse-item" href="/sales">Listar Ventas</a>
            <a className="collapse-item" href="/add-sale">Agregar Venta</a>

        </div>
    </div>
</li>



<li className="nav-item">
    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
        aria-expanded="true" aria-controls="collapsePages">
        <i className="fa fa-shopping-bag" aria-hidden="true"></i>
        <span>Productos</span>
    </a>
    <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Gestionar Productos:</h6>
            <a className="collapse-item" href="/products">Listar Producto</a>
            <a className="collapse-item" href="/add-product">Agregar Producto</a>
        </div>
    </div>
</li>



{/* Divider */}
<hr className="sidebar-divider d-none d-md-block" />

</ul> 
        </div>
    )
}

export default BarraNav
