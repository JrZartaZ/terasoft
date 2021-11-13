import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

import BarraNav from '../../components/BarraNav';
import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';

import { formatDate } from '../../utils/formatDate';

function ProductList(){
    console.log( `ProductList Component`);

    const
        [ products, setProducts ] = useState([]),
        [ productIdDelete, setProductIdDelete ] = useState( null ),
        navigate = useNavigate();

    useEffect( () => {
        const getDataAPI = async () => {
            const
                response = await fetch( `${ process .env .REACT_APP_LOCAL_URI }/productos` ),
                data = await response .json();

            //console.log( data );
            setProducts( data.products );

        }

        getDataAPI();

    }, [] );

    const handleGetProductID = id => {
        setProductIdDelete( id );
    }

    const handleDelete = async () => {

        const
            response = await fetch( `${ process .env .REACT_APP_LOCAL_URI }/productos/${ productIdDelete }`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            }), 
            data  = await response.json();
        
        console.log( data );

        setProducts( products.filter( product => (
            product[ '_id' ] !== productIdDelete
        )));

        setProductIdDelete( null );
        
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
                        {/* Begin Page Content --> */}
                        <div className="container-fluid">

                            {/*age Heading*/}
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Listar Productos</h1>
                            </div>

                            {/*Add producto icon*/}
                            <div>
                                <Link to={ '/add-product' } className="btn btn-primary btn-circle btn-sm">
                                    <i className="fa fa-plus-circle fa-2x" aria-hidden="true"></i>
                                </Link>
                            </div>

                            {/*DataTales Example*/}
                            {/*<div className="card shadow mb-4"></div>*/}

                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Nombre</th>
                                                <th>Descripcion</th>
                                                <th>Valor unitario</th>
                                                <th>Cantidad</th>
                                                <th>Estado</th>
                                                <th>Fecha venta</th>
                                                <th>Accion</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {products.map((product)=>{
                                                return(
                                                    <tr key={ product._id }>
                                                        <td>{product.codigo}</td>
                                                        <td>{product.nombre}</td>
                                                        <td>{product.descripcion}</td>
                                                        <td>{product.valorUnitario}</td>
                                                        <td>{product.cantidad}</td>
                                                        <td>{product.estado}</td>
                                                        <td>{ formatDate( product.fechaVenta ) }</td>
                                                        <td>
                                                            <Link
                                                                to={{
                                                                    pathname: `/edit-product/${ product ._id }`
                                                                  }}
                                                                className="btn btn-primary btn-circle btn-sm">
                                                                <span className="fas fa-pencil-alt fa-lg" aria-hidden="true"></span>
                                                            </Link>
                                                            
                                                            <Link to={``} onClick={ () => handleGetProductID( product ._id ) } className="btn btn-primary btn-circle btn-sm" data-toggle="modal" data-target="#deleteModal">
                                                                <span className="fa fa-trash fa-lg" aria-hidden="true"></span>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                            
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
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

export default ProductList;