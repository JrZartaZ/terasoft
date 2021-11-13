import react, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import BarraNav from '../../components/BarraNav';
import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';

function AddProduct(){
    {/*Defino las variables para capturar los datos de add-product*/}
    const [ product, setProduct ] = useState({
        codigo: '',
        nombre: '',
        descripcion: '',
        valorUnitario: '',
        cantidad: '',
        estado: ''
    });
    const { codigo, nombre, descripcion, valorUnitario, cantidad, estado } = product;
    const navigate = useNavigate();

    const handleChange = event => {
        setProduct({
            ...product,
            [ event.target.name ]: event.target.value
        });
    }

    const handleSubmit = async event => {
        event .preventDefault();

        const
            response = await fetch( `${ process .env .REACT_APP_LOCAL_URI }/productos`, {
                method: 'POST',
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
                                        >Agregar</button>

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
export default AddProduct;