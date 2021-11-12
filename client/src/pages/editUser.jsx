import React, { useEffect, useState } from "react";

import BarraNav from '../components/BarraNav';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

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
    }
]

const EditUser = ({infoUser = usuariosBack}) => {

    const [Ide, setID] = useState()

    console.log(infoUser)

    return (
        <div>
            <div id="wrapper">
            <BarraNav />
                <div id="content-wrapper" class="d-flex flex-column">

                    <div id="content">

                        {/**<!-- Topbar --> */}
                        <TopBar/>


                        {/**<!-- Begin Page Content --> */}
                        <div class="container-fluid">

                            {/**<!-- Page Heading --> */}
                            <h1 class="h3 mb-4 text-gray-800 center">Actualizar Usuario</h1>

                            <div class="row center">
                                <div class="col-lg-6 ">
                                    <form class="user form-control-user">
                                    <div class="form-group row">

                                        <div class="col-sm-6 mb-3 mb-sm-0 paddingForm"> Cédula/NIT:
                                            <input
                                            
                                            onChange = {(e)=>{setID(e.target.value)}} 
                                            type="text" 
                                            class="form-control form-control-user" 
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3 mb-sm-0 paddingForm"> Nombre:
                                            <input 
                                            type="text" 
                                            class="form-control form-control-user"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3 mb-sm-0 paddingForm"> Correo Electrónico:
                                            <input 
                                            type="text" 
                                            class="form-control form-control-user"/>
                                        </div>
                                        <div class="col-sm-6 mb-3 mb-sm-0 paddingForm"> Teléfono:
                                            <input 
                                            type="text" 
                                            class="form-control form-control-user" />
                                        </div>
                                        <div class="col-sm-6 mb-3 mb-sm-0 paddingForm"> Ciudad:
                                            <input 
                                            type="text" 
                                            class="form-control form-control-user"/>
                                        </div>

                                        <div class="col-sm-6 mb-3 mb-sm-0 paddingForm"> Dirección:
                                            <input 
                                            type="text" 
                                            class="form-control form-control-user"/>
                                        </div>
                                        <div class="col-sm-6 mb-3 mb-sm-0 paddingForm "> Rol:
                                            <select 
                                            name="rol" 
                                            id="rol">
                                                <option value="seleccionar">Seleccionar</option>
                                                <option value="admin">Administrador</option>
                                                <option value="vendedor">Vendedor</option>
                                            </select>
                                        </div>

                                        <div class="col-sm-6 mb-3 mb-sm-0 paddingForm "> Estado:
                                            <select 
                                            name="estado" 
                                            id="Estado">
                                                <option value="seleccionar">Seleccionar</option>
                                                <option value="autorizado">Autorizado</option>
                                                <option value="noautorizado">No Autorizado</option>
                                                <option value="pendiente">Pendiente</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/**<!-- Botón de Actualizar--> */}
                                    <div class="container">
                                    
                                        <a class="container btn btn-primary btnSmall centerBtn btn  btn-user btn-block"
                                            href="#" data-toggle="modal" data-target="#vistaActualizarUsuario">
                                            Actualizar
                                        </a>

                                    </div>
                                    </form>
                                </div>  
                            </div>
                    
                        </div>

                        <footer class="sticky-footer bg-white down center">
                            <Footer/>
                        </footer>
                        {/**<!-- End of Page Wrapper --> */}

                
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditUser
