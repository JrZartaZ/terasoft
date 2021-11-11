import BarraNav from '../components/BarraNav';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

function productList(){
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
                                <a href="addProduct.html" className="btn btn-primary btn-circle btn-sm">
                                <i href="addProduct.html" className="fa fa-plus-circle fa-2x" aria-hidden="true"></i>
                                </a>
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
                                                <th>Accion</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>123</td>
                                                <td>Fiat uno Way Pop</td>
                                                <td>Color rojo</td>
                                                <td>45.990.000</td>
                                                <td>5</td>
                                                <td>Nuevo</td>
                                                <td>
                                                    <a href="/editProduct" className="btn btn-primary btn-circle btn-sm">
                                                        <span className="fas fa-pencil-alt fa-lg" aria-hidden="true"></span>
                                                    </a>
                                                    
                                                    <a href="#" className="btn btn-primary btn-circle btn-sm" data-toggle="modal" data-target="#deleteModal">
                                                        <span className="fa fa-trash fa-lg" aria-hidden="true"></span>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>456</td>
                                                <td>Fiat Mobi Like</td>
                                                <td>Color blanco</td>
                                                <td>42.990.000</td>
                                                <td>2</td>
                                                <td>Nuevo</td>
                                                <td>
                                                    <a href="editProduct.html" className="btn btn-primary btn-circle btn-sm">
                                                        <span className="fas fa-pencil-alt fa-lg" aria-hidden="true"></span>
                                                    </a>
                                                    
                                                    <a href="#" className="btn btn-primary btn-circle btn-sm" data-toggle="modal" data-target="#deleteModal">
                                                        <span className="fa fa-trash fa-lg" aria-hidden="true"></span>
                                                    </a>
                                                </td>
                                            </tr>
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
                            <a className="btn btn-primary" href="#">Eliminar</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default productList;