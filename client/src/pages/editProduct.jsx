import BarraNav from '../components/BarraNav';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

function editProduct(){
    return (
        <div>
            <div id="wrapper">
                <BarraNav/>
                <div id="content-wrapper" className="d-flex flex-column">

                    {/*Main Content*/}
                    <div id="content">

                    <TopBar/>

                    {/*Begin Page Content*/}
                    <div className="container-fluid">

                    {/*Page Heading*/}
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800 center">Editar Productos</h1>
                    </div>

                    <div className="row center">

                        <div className="col-lg-6">

                            {/*panel de edicion de productos*/}
                            <form className="user form-control-user">
                                <div className="form-group row"> 
                                    
                                    <div className="col-sm-6 mb-3 mb-sm-0 paddingForm">  Nombre: 
                                        <input type="text" className="form-control form-control-user"
                                            placeholder required/>
                                    </div>
                                    <div className="col-sm-6 mb-3 mb-sm-0 paddingForm">  Cantidad:
                                        <input type="number" className="form-control form-control-user"
                                            placeholder required/>
                                    </div>
                                    <div className="col-sm-6 mb-3 mb-sm-0 paddingForm">  Valor unitario:
                                        <input type="number" className="form-control form-control-user"
                                            placeholder required/>
                                    </div>
                                    <div className="col-sm-6 mb-3 mb-sm-0 paddingForm"> Estado:
                                        <select name="rol" id="rol">
                                            <option>Disponible</option>
                                            <option>No disponible</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-12 paddingForm">
                                        <label for="Textarea1">Descripción de producto:</label>
                                        <textarea className="form-control" id="Textarea1" rows="4"></textarea>
                                    </div>
                                    
                                </div>
                                <a href="salesList.html" className="btn btnSmall centerBtn btn-primary btn-user btn-block" data-target="#registerModal" data-toggle="modal">
                                    Actualizar
                                </a>

                            </form>
                            

                        </div>

                    </div>

                    </div>

                    </div>

                </div>

            </div>
            <Footer/>
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
                    <h5 className="modal-title" id="exampleModalLabel">Cerrar Sesión</h5>
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">Seleccione el botón "Cerrar Sesión" que aparece a continuación para finalizar‎.</div>
                <div className="modal-footer">
                    <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
                    <a className="btn btn-primary" href="login.html">Cerrar Sesión</a>
                </div>
            </div>
                </div>
            </div>

            {/*Registro Modal*/}
            <div className="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
                <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Actializar Producto</h5>
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>Su producto se actualizó correctamente</p>

                </div>
            </div>
                </div>
            </div>

            {/*Bootstrap core JavaScript*/}
            <script src="vendor/jquery/jquery.min.js"></script>
            <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

            {/*Core plugin JavaScript*/}
            <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

            {/*Custom scripts for all pages*/}
            <script src="js/sb-admin-2.min.js"></script>
        </div>
    );
}
export default editProduct;