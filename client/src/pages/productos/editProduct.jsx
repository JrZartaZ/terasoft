import react, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import BarraNav from '../../components/BarraNav';
import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';

function EditProduct(){
    const [ product, setProduct ] = useState({
        codigo: '',
        nombre: '',
        descripcion: '',
        valorUnitario: '',
        cantidad: '',
        estado: ''
    });
    const { codigo, nombre, descripcion, valorUnitario, cantidad, estado } = product;
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect( () => {
        const getDataAPI =  async () => {
            const
                response = await fetch( `${ process .env .REACT_APP_LOCAL_URI }/productos/${ id }` ),
                data = await response .json();

            console.log( data );
            setProduct( data.product );
        }

        getDataAPI();

    }, [ id ] );

    const handleChange = event => {
        setProduct({
            ...product,
            [ event.target.name ]: event.target.value
        });
    }

    const handleSubmit = async event => {
        event .preventDefault();

        const
            response = await fetch( `${ process .env .REACT_APP_LOCAL_URI }/productos/${ id }`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify( product )
            }),
            data  = await response.json();
        
        console.log( data );

        navigate( '/products' );
    }


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

                        <form onSubmit={ handleSubmit } className="user form-control-user">
                            <div className="form-group row">

                                <div className="col-sm-6 mb-3 mb-sm-0 paddingForm">
                                    Código:
                                    <input
                                        className="form-control form-control-user" 
                                        type="text" 
                                        name="codigo"
                                        value={ codigo } 
                                        onChange = { handleChange }
                                    />
                                </div>

                                <div className="col-sm-6 mb-3 mb-sm-0 paddingForm">
                                    Nombre:
                                    <input
                                        className="form-control form-control-user"
                                        type="text" 
                                        name="nombre"
                                        value={ nombre }
                                        onChange = { handleChange }
                                    />
                                </div>

                                <div className="col-sm-6 mb-3 mb-sm-0 paddingForm">
                                    Cantidad:
                                    <input
                                        className="form-control form-control-user"
                                        type="number" 
                                        name="cantidad"
                                        value={ cantidad }
                                        onChange = { handleChange }
                                    />
                                </div>

                                <div className="col-sm-6 mb-3 mb-sm-0 paddingForm">
                                    Valor unitario:
                                    <input
                                        className="form-control form-control-user"
                                        type="number" 
                                        name="valorUnitario"
                                        value={ valorUnitario }
                                        onChange = { handleChange }
                                    />
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
                                        <option value="disponible">Disponible</option>
                                        <option value="no disponible">No Disponible</option>
                                    </select>
                                </div>

                            </div>

                            <div className="col-sm-12">
                                <label for="Textarea1">Descripcion de producto</label>
                                <textarea
                                    className="form-control form-control-user"
                                    name="descripcion"
                                    value={ descripcion }
                                    onChange = { handleChange } 
                                rows="4"></textarea>
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
export default EditProduct;