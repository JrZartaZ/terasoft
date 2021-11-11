import React from 'react'
import BarraNav from '../components/BarraNav';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

const addUser = () => {
    return (
        <div>

            <div id="wrapper">
            <BarraNav />
                {/**<!-- Main Content --> */}
            <div id="content">
            
                {/**<!-- Topbar --> */}
                <TopBar/>
                {/**<!-- End of Topbar --> */}

                {/**<!-- Begin Page Content --> */}
                <div classNameName="container-fluid">

                    {/**<!-- Page Heading --> */}
                    <h1 className="h3 mb-4 text-gray-800 center">Agregar Usuario</h1>

                    <div className="row center">
                        <div className="col-lg-6 ">
                            <form className="user form-control-user">
                                <div className="form-group row">

                                    <div className="col-sm-6 mb-3 mb-sm-0 paddingForm"> Cédula/NIT:
                                        <input type="text" className="form-control form-control-user" value=" "/>
                                    </div>
                                    <div className="col-sm-6 mb-3 mb-sm-0 paddingForm"> Nombre:
                                        <input type="text" className="form-control form-control-user" value=" "/>
                                    </div>
                                    <div className="col-sm-6 mb-3 mb-sm-0 paddingForm"> Correo Electrónico:
                                        <input type="text" className="form-control form-control-user" value=" "/>
                                    </div>
                                    <div className="col-sm-6 mb-3 mb-sm-0 paddingForm"> Teléfono:
                                        <input type="text" className="form-control form-control-user" value=" "/>
                                    </div>
                                    <div className="col-sm-6 mb-3 mb-sm-0 paddingForm"> Ciudad:
                                        <input type="text" className="form-control form-control-user" value=""/>
                                    </div>

                                    <div className="col-sm-6 mb-3 mb-sm-0 paddingForm"> Dirección:
                                        <input type="text" className="form-control form-control-user" value=" "/>
                                    </div>
                                    <div className="col-sm-6 mb-3 mb-sm-0 paddingForm "> Rol:
                                        <select name="rol" id="rol">
                                            <option value="seleccionar">Seleccionar</option>
                                            <option value="admin">Administrador</option>
                                            <option value="vendedor">Vendedor</option>
                                        </select>
                                    </div>

                                    <div className="col-sm-6 mb-3 mb-sm-0 paddingForm "> Estado:
                                        <select name="estado" id="Estado">
                                            <option value="seleccionar">Seleccionar</option>
                                            <option value="autorizado">Autorizado</option>
                                            <option value="noautorizado">No Autorizado</option>
                                            <option value="pendiente">Pendiente</option>
                                        </select>
                                    </div>
                                </div>

                                {/**<!-- Botón de Actualizar--> */}
                                <div className="container">

                                    <a className="container btn btn-primary btnSmall centerBtn btn  btn-user btn-block"
                                        href="#" data-toggle="modal" data-target="#vistaAgregarUsuario">

                                        Agregar
                                    </a>
                                    <div className="fade" id="vistaAgregarUsuario" tabindex="-1" role="dialog"
                                        aria-labelledby="modalUserAdd" aria-hidden="true">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="modalUserAdd">Agregar Usuario</h5>
                                                    <button className="close" type="button" data-dismiss="modal"
                                                        aria-label="Close">
                                                        <span aria-hidden="true">×</span>
                                                    </button>
                                                </div>
                                                {/**<!-- Contenido del Modal --> */}
                                                <div className="modal-body">
                                                    <p>El usuario se ha agregado correctamente.</p>
                                                    <p>¿Desea continuar agregando usuarios?</p>
                                                </div>
                                                {/**<!--Footer --> */}
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </form>

                        </div>
                        {/**<!-- /.container-fluid --> */}

                    </div>
                    {/**<!-- End of Main Content --> */}


                </div>
                {/**<!-- End of Content Wrapper --> */}

            </div>
            </div>
            
        </div>
    )
}

export default addUser
