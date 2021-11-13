import react, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import BarraNav from '../../components/BarraNav';
import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';

const AddUser = () => {
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
    const navigate = useNavigate();

    const handleChange = event => {
        setUser({
            ...user,
            [ event.target.name ]: event.target.value
        });
    }

    const handleSubmit = async event => {
        event .preventDefault();

        const
            response = await fetch( `${ process .env .REACT_APP_LOCAL_URI }/usuarios`, {
                method: 'POST',
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
                {/*Content Wrapper*/}
                <div id="content-wrapper" className="d-flex flex-column">

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
                                {/**<!-- /.container-fluid --> */}

                            </div>
                            {/**<!-- End of Main Content --> */}


                        </div>
                        {/**<!-- End of Content Wrapper --> */}

                    </div>

                    <Footer/>

                </div>
            </div>
        </div>
    );
}

export default AddUser;
