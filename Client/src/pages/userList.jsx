import React from 'react'
import BarraNav from '../components/BarraNav';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

const userList = () => {
return (
<div>
    
    <div id="wrapper">
        <BarraNav />
        <div id="content-wrapper" className="d-flex flex-column">
    
    {/**<!-- Main Content --> */}
    <div id="content">
    
            {/**<!-- Topbar --> */}
            <TopBar />

            {/**<!-- Begin Page Content --> */}
            <div className="container-fluid">

                {/**<!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Listar Usuarios</h1>
                </div>

                <div>
                    <a href="addUser.html" className="btn btn-primary btn-circle btn-sm">
                        <i href="addUser.html" className="fa fa-plus-circle fa-2x" aria-hidden="true"></i>

                    </a>
                </div>

                <div className="card-body">

                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Cédula / NIT</th>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                    <th>Teléfono</th>
                                    <th>Ciudad</th>
                                    <th>Dirección</th>
                                    <th>Rol</th>
                                    <th>Estado</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                        
                            <tbody>
                                <tr>
                                    <td>125426895</td>
                                    <td>Ramiro Gonzalez</td>
                                    <td>ramiro_g12@gmail.com</td>
                                    <td>3215426859</td>
                                    <td>Bogotá</td>
                                    <td>Carrera 15 con transversal 28</td>
                                    <td>Vendedor</td>
                                    <td>Activo</td>
                                    <td>
                                        <a href="updateUser.html" className="btn btn-primary btn-circle btn-sm">
                                            <span className="fas fa-pencil-alt fa-lg" aria-hidden="true"></span>
                                        </a>

                                        <a href="#" className="btn btn-primary btn-circle btn-sm" >
                                            <span className="fa fa-trash fa-lg" aria-hidden="true"></span>
                                        </a>

                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/**<!-- /.container-fluid --> */}

    </div>
    {/**<!-- End of Main Content --> */}

    {/**<!-- Footer --> */}
     <Footer />   
    {/**<!-- End of Footer --> */}
        </div> 
    </div>
 
</div>
)
}

export default userList
