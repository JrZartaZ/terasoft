import react, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import BarraNav from '../../components/BarraNav';
import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';

const EditUser = () => {

    const [ user, setUser ] = useState({
        cedula: '',
        nombre: '',
        ciudad: '',
        direccion: '',
        telefono: '',
        correo: '',
        estado: '',
        rol: ''
    });
    const { cedula, nombre, apellido, ciudad, direccion, telefono, correo, estado, rol } = user;
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect( () => {
        const getDataAPI =  async () => {
            const
                response = await fetch( `${ process .env .REACT_APP_LOCAL_URI }/usuarios/${ id }` ),
                data = await response .json();

            console.log( data );
            setUser( data.user );
        }

        getDataAPI();

    }, [ id ] );

    const handleChange = event => {
        setUser({
            ...user,
            [ event.target.name ]: event.target.value
        });
    }

    const handleSubmit = async event => {
        event .preventDefault();

        const
            response = await fetch( `${ process .env .REACT_APP_LOCAL_URI }/usuarios/${ id }`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify( user )
            }),
            data  = await response.json();
        
        console.log( data );

        navigate( '/users' );
    }


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
                                    <form onSubmit={ handleSubmit } class="user form-control-user">
                                        <div class="form-group row">

                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm">
                                                Cédula/NIT:
                                                <input
                                                    className="form-control form-control-user" 
                                                    type="text" 
                                                    name="cedula"
                                                    value={ cedula } 
                                                    onChange = { handleChange }
                                                />
                                            </div>

                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm">
                                                Nombres:
                                                <input
                                                    className="form-control form-control-user"
                                                    type="text" 
                                                    name="nombre"
                                                    value={ nombre }
                                                    onChange = { handleChange }
                                                />
                                            </div>

                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm">
                                                Correo Electrónico:
                                                <input
                                                    className="form-control form-control-user"
                                                    type="email" 
                                                    name="correo"
                                                    value={ correo }
                                                    onChange = { handleChange }
                                                />
                                            </div>

                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm">
                                                Teléfono:
                                                <input
                                                    className="form-control form-control-user"
                                                    type="tel" 
                                                    name="telefono"
                                                    value={ telefono }
                                                    onChange = { handleChange }
                                                />
                                            </div>

                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm ">
                                                Ciudad:
                                                <select
                                                    className="form-control"
                                                    name="ciudad"
                                                    value={ ciudad }
                                                    onChange = { handleChange }
                                                >
                                                    <option value="">Seleccione...</option>
                                                    <option value="Bogotá">Bogotá</option>
                                                    <option value="Cali">Cali</option>
                                                    <option value="Medellín">Medellín</option>
                                                </select>
                                            </div>

                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm">
                                                Dirección:
                                                <input
                                                    className="form-control form-control-user"
                                                    type="tel" 
                                                    name="direccion"
                                                    value={ direccion }
                                                    onChange = { handleChange }
                                                />
                                            </div>

                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm ">
                                                Rol:
                                                <select
                                                    className="form-control"
                                                    name="rol"
                                                    value={ rol }
                                                    onChange = { handleChange }
                                                >
                                                    <option value="">Seleccione...</option>
                                                    <option value="administrador">Administrador</option>
                                                    <option value="vendedor">Vendedor</option>
                                                </select>
                                            </div>

                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm ">
                                                Estado:
                                                <select
                                                    className="form-control"
                                                    name="estado"
                                                    value={ estado }
                                                    onChange = { handleChange }
                                                >
                                                    <option value="">Seleccione...</option>
                                                    <option value="pendiente">Pendiente</option>
                                                    <option value="autorizado">Autorizado</option>
                                                    <option value="no autorizado">No autorizado</option>
                                                </select>
                                            </div>    

                                        </div>

                                        {/*Botón de Actualizar*/}
                                        <div className="col-sm-12">

                                            <button
                                                type="submit"
                                                className="btn btn-primary btnSmall centerBtn btn  btn-user btn-block"
                                            >Editar</button>

                                        </div>

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
            <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
            <div className="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

export default EditUser;
