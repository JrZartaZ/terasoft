import { Link } from "react-router-dom";
import BarraNav from '../components/BarraNav';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

function EditSale() {
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
                            <h1 className="h3 mb-4 text-gray-800 center">Editar Venta</h1>

                            <div className="row center">
                                <div className="col-lg-6 ">
                                    <form className="user form-control-user">
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm">  Fecha venta:
                                                <input type="date" className="form-control form-control-user"
                                                    value="2021-07-21" />
                                            </div>

                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm">  Nombre:
                                                <input type="text" className="form-control form-control-user"
                                                    value="Junior Zarta" />
                                            </div>
                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm">  Cédula/NIT:
                                                <input type="number" className="form-control form-control-user"
                                                    value="73598745" />
                                            </div>
                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm">  Producto:
                                                <input type="text" className="form-control form-control-user"
                                                    value="Fiat Uno Way Pop" />
                                            </div>
                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm">  Cantidad:
                                                <input type="number" className="form-control form-control-user"
                                                    value="1" />
                                            </div>

                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm">  Valor total:
                                                <input type="number" className="form-control form-control-user"
                                                    value="45990000" />
                                            </div>
                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm"> Vendedor:
                                                <select name="rol" id="rol">
                                                    <option>Ramiro Gonzalez</option>
                                                    <option>Carla Caicedo</option>

                                                </select>
                                            </div>
                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm"> Estado:
                                                <select name="rol" id="rol">
                                                    <option>En proceso</option>
                                                    <option>Cancelada</option>
                                                    <option>Entregada</option>
                                                </select>
                                            </div>
                                        </div>
                                        <a href="/index" className="btn btnSmall centerBtn btn-primary btn-user btn-block" data-target="#UpdateSale" data-toggle="modal">
                                            Actualizar
                                        </a>

                                    </form>


                                </div>
                                {/* /.container-fluid */}

                            </div>
                            {/* End of Main Content */}


                        </div>
                        {/* End of Content Wrapper */}
                    </div>
                </div>

            </div>
            <Footer />
            {/* End of Page Wrapper */}

            {/* Scroll to Top Button*/}
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>

            

            <div className="modal fade" id="UpdateSale" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Actualización de venta</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">La venta se ha actualizado exitosamente</div>
                        <div className="modal-footer">
                            <a className="btn btn-primary" href="/index">Aceptar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default EditSale;