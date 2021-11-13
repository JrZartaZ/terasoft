import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

import BarraNav from '../../components/BarraNav';
import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';

const UserList = () => {
    console.log( `UserList Component`);

    const
        [ users, setUsers ] = useState([]),
        [ userIdDelete, setUserIdDelete ] = useState( null ),
        navigate = useNavigate();

    useEffect( () => {
        const getDataAPI = async () => {
            const
                response = await fetch( `${ process .env .REACT_APP_LOCAL_URI }/usuarios` ),
                data = await response .json();

            //console.log( data );
            setUsers( data.users );

        }

        getDataAPI();

    }, [] );

    const handleGetUserID = id => {
        setUserIdDelete( id );
    }

    const handleDelete = async () => {

        const
            response = await fetch( `${ process .env .REACT_APP_LOCAL_URI }/usuarios/${ userIdDelete }`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            }), 
            data  = await response.json();
        
        console.log( data );

        setUsers( users.filter( user => (
            user[ '_id' ] !== userIdDelete
        )));

        setUserIdDelete( null );
        
    }


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
                                    <Link to={ '/add-user' } className="btn btn-primary btn-circle btn-sm">
                                        <i className="fa fa-plus-circle fa-2x" aria-hidden="true"></i>

                                    </Link>
                                </div>

                                <div className="card-body">

                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Cédula / NIT</th>
                                                    <th>Nombres</th>
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
                                                { users.map((user)=>{
                                                    return(

                                                        <tr key={ user._id }>
                                                            <td>{ user .cedula }</td>
                                                            <td>{ user .nombre }</td>
                                                            <td>{ user .correo }</td>
                                                            <td>{ user .telefono }</td>
                                                            <td>{ user .ciudad }</td>
                                                            <td>{ user. direccion }</td>
                                                            <td>{ user .rol }</td>
                                                            <td>{ user .estado }</td>
                                                            <td>
                                                                <Link
                                                                    to={{
                                                                        pathname: `/edit-user/${ user ._id }`
                                                                        }}
                                                                    className="btn btn-primary btn-circle btn-sm">
                                                                    <span className="fas fa-pencil-alt fa-lg" aria-hidden="true"></span>
                                                                </Link>

                                                                <Link to={``} onClick={ () => handleGetUserID( user ._id ) } className="btn btn-primary btn-circle btn-sm" data-toggle="modal" data-target="#deleteModal">
                                                                    <span className="fa fa-trash fa-lg" aria-hidden="true"></span>
                                                                </Link>

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
                
                </div> 
            </div>
            <Footer />
            {/* End of Page Wrapper */}

            {/*Scroll to Top Button*/}
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>

            {/*Logout Modal*/}
            <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Seguro que quieres salir?</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">Selecciona "Salir" si estas seguro de terminar tu actual sesion</div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
                            <a className="btn btn-primary" href="login.html">Salir</a>
                        </div>
                    </div>
                </div>
            </div>
            {/*Modal para eliminar*/}
            <div className="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Seguro que quieres eliminar este producto?</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">Selecciona "Eliminar" si estas seguro de la accion.</div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
                            <button onClick={ handleDelete } className="btn btn-primary" type="button" data-dismiss="modal">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default UserList;
