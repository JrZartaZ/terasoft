import BarraNav from '../components/BarraNav';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

function addProduct(){
    return (
        <div>
            <div id="wrapper">
                <BarraNav />
                {/*Content Wrapper*/}
                <div id="content-wrapper" className="d-flex flex-column">

                    {/*Main Content*/}
                    <div id="content">

                    <TopBar/>

                    {/*Begin Page Content*/}
                    <div className="container-fluid">

                        {/*Page Heading*/}
                        <h1 className="h3 mb-4 text-gray-800 center">Agregar Productos</h1>

                        <div className="row center">

                            <div className="col-lg-6">

                                <form className="user form-control-user">
                                        <div className="form-group row">

                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm"> ID:
                                                <input type="text" className="form-control form-control-user" value=" "/>
                                            </div>

                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm"> Nombre:
                                                <input type="text" className="form-control form-control-user" value=" "/>
                                            </div>

                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm"> Cantidad:
                                                <input type="number" className="form-control form-control-user" value=" "/>
                                            </div>

                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm"> Valor unitario:
                                                <input type="number" className="form-control form-control-user" value=" "/>
                                            </div>

                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm "> Estado:
                                                <select name="estado" id="Estado">
                                                    <option value="seleccionar">Seleccionar</option>
                                                    <option value="autorizado">Disponible</option>
                                                    <option value="noautorizado">No Disponible</option>
                                                </select>
                                            </div>

                                        </div>

                                        <div className="col-sm-12">
                                            <label for="Textarea1">Descripcion de producto</label>
                                            <textarea className="form-control" id="Textarea1" rows="4"></textarea>
                                        </div>

                                        {/*Botón de Actualizar*/}
                                        <div className="container">
                                            
                                            <br/>
                                            <a className="container btn btn-primary btnSmall centerBtn btn  btn-user btn-block"
                                                href="#" data-toggle="modal" data-target="#registerModal">
                                                Agregar
                                            </a>

                                        </div>

                                </form>
                                    
                            </div>

                        </div>

                    </div>

                </div>
                
                <Footer/>

                </div>
            </div>
        </div>
    );
}
export default addProduct;