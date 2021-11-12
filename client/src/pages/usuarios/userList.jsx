import React, { useEffect, useState } from "react";
import BarraNav from '../../components/BarraNav';
import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';

const usuariosBack = [
    {
        "Nit": 123,
        "Nombre":"Hugo",
        "Email":"H@gmail.com",
        "Telefono":1234,
        "Ciudad":"Pasto",
        "Direccion":"calle",
        "Rol":"adm",
        "Estado":"Activo"
    },
    {
        "Nit": 123,
        "Nombre":"Hugo",
        "Email":"H@gmail.com",
        "Telefono":1234,
        "Ciudad":"Pasto",
        "Direccion":"calle",
        "Rol":"adm",
        "Estado":"Activo"
    }
]


const UserList = ({userList = usuariosBack}) => {

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        //Obtener lista de vehiculos
        setUsuarios(usuariosBack)
    }, [])

    useEffect(() => {
        console.log(userList);
    }, [userList])

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
                                        {userList.map((user)=>{
                                            return(

                                            <tr>
                                                <td>{user.Nit}</td>
                                                <td>{user.Nombre}</td>
                                                <td>{user.Email}</td>
                                                <td>{user.Telefono}</td>
                                                <td>{user.Ciudad}</td>
                                                <td>{user.Direccion}</td>
                                                <td>{user.Rol}</td>
                                                <td>{user.Estado}</td>
                                                <td>
                                                    <a href="updateUser.html" className="btn btn-primary btn-circle btn-sm">
                                                        <span className="fas fa-pencil-alt fa-lg" aria-hidden="true"></span>
                                                    </a>

                                                    <a href="#" className="btn btn-primary btn-circle btn-sm" >
                                                        <span className="fa fa-trash fa-lg" aria-hidden="true"></span>
                                                    </a>

                                                </td>
                                            </tr>

                                            );
                                        })}

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

export default UserList
