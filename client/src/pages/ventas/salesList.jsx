import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import BarraNav from '../../components/BarraNav';
import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';

function SalesList() {
    console.log( `SalesList Component` );

    const
        [ sales, setSales ] = useState([]),
        [ saleIdDelete, setSaleIdDelete ] = useState( null );

    useEffect( () => {
        const getDataAPI = async () => {
            const
                response = await fetch( `${ process .env .REACT_APP_LOCAL_URI }/ventas` ),
                data = await response .json();

            //console.log( data );
            setSales( data.sales );

        }

        getDataAPI();

    }, [] );

    const handleGetSaleID = id => {
        setSaleIdDelete( id );
    }

    const handleDelete = async () => {

        const
            response = await fetch( `${ process .env .REACT_APP_LOCAL_URI }/ventas/${ saleIdDelete }`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            }), 
            data  = await response.json();
        
        console.log( data );

        setSales( sales.filter( sale => (
            sale[ '_id' ] !== saleIdDelete
        )));

        setSaleIdDelete( null );
        
    }

    return (
        <div>

            <div id="wrapper">
                <BarraNav />

                {/* Content Wrapper */}
                <div id="content-wrapper" className="d-flex flex-column">

                {/* Main Content */}
                <div id="content">

                    <TopBar />

                    {/* Begin Page Content */}
                    <div className="container-fluid">

                    {/* Page Heading */}
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Listar Ventas</h1>
                    </div>



                    <div>
                        <Link to={ '/add-sale' } className="btn btn-primary btn-circle btn-sm">
                            <i className="fa fa-plus-circle fa-2x" aria-hidden="true"></i>
                        </Link>
                    </div>


                    <div className="card-body">

                        <div className="table-responsive">
                        <table className="table table-bordered centerText" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                            <tr>
                                <th># Factura</th>
                                <th>Cédula/NIT Cliente</th>
                                <th>Cliente</th>
                                <th>Encargado</th>
                                <th>Producto</th>
                                <th>Estado</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                                <th>Acción</th>
                            </tr>
                            </thead>

                            <tbody>

                            {/* Podemos imprimir un array de objetos HTML (que es un array de DOM ) */}
                            {   sales .map( sale =>{
                                    return(
                                        <tr key={ sale ._id }>
                                            <td>{ sale .codigo }</td>
                                            <td>{ sale .cedula }</td>
                                            <td>{ sale .nombreCliente }</td>
                                            <td>{ sale .nombreEncargado }</td>
                                            <td>{ sale .producto }</td>
                                            <td>{ sale .estado }</td>
                                            <td>{ sale .cantidad }</td>
                                            <td>{ sale .total }</td>
                                            <td>

                                                <Link
                                                    to={{
                                                        pathname: `/edit-sale/${ sale ._id }`
                                                        }}
                                                    className="btn btn-primary btn-circle btn-sm">
                                                    <span className="fas fa-pencil-alt fa-lg" aria-hidden="true"></span>
                                                </Link>
                                                
                                                <Link to={``} onClick={ () => handleGetSaleID( sale ._id ) } className="btn btn-primary btn-circle btn-sm" data-toggle="modal" data-target="#deleteModal">
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
                    </div>
                </div>
            </div>
                {/* End of Main Content */}

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
                                <h5 className="modal-title" id="exampleModalLabel">Seguro que quieres eliminar esta venta?</h5>
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

export default SalesList;
