import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import BarraNav from '../../components/BarraNav';
import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';

import Select from '../Select';


function EditSale() {
    // TODO: Hacer que los componentes hijos recuerden el estado general del componente para producto, vendedor
    const
		[ formData, setFormData ] = useState({
			sale: {
				codigo: '',
				cedula: '',
				nombreCliente: '',
				nombreEncargado: '',
				producto: '',
				cantidad: 0,
				valor: 0,
				total: 0,
				estado: '',
				fechaVenta: ''
			},
			selectedObject: {}
		}),
		{ sale, selectedObject } = formData,
		{ codigo, cedula, nombreCliente, nombreEncargado, producto, valor, cantidad, total, estado, fechaVenta } = sale,
        { id } = useParams(),
		navigate = useNavigate();


    useEffect( () => {
        const getDataAPI =  async () => {
            const
                response = await fetch( `${ process .env .REACT_APP_LOCAL_URI }/ventas/${ id }` ),
                data = await response .json();

            console.log( data );

            setFormData({
                ...formData,
                sale: data.sale
                
            });
        }

        getDataAPI();

    }, [ id ] );

    const handleChange = event => {

        setFormData({
            ...formData,
            sale: {
                ...sale,
                [ event.target.name ]: event.target.value,
                total: ( event.target.name == 'cantidad' ) ? event.target.value *  valor : 0
            }
            
        });
    }

    const handleSubmit = async event => {
        event .preventDefault();

        const
            response = await fetch( `${ process .env .REACT_APP_LOCAL_URI }/ventas/${ id }`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify( formData.sale )
            }),
            data  = await response.json();
        
        console.log( data );

        navigate( '/sales' );
    }


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
                                    <form onSubmit={ handleSubmit } className="user form-control-user">

                                        <div className="form-group row">

                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm">
                                                Factura:
                                                <input
                                                    className="form-control form-control-user" 
                                                    type="text" 
                                                    name="codigo"
                                                    value={ codigo } 
                                                    onChange = { handleChange }
                                                />
                                            </div>

                                            <Select
                                                urn="/vendedores"
                                                property="sellers"
                                                label="Encargado"
                                                formData={ formData }
                                                setFormData={ setFormData } 
                                                field="nombreEncargado"
                                            />

                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm">
                                                Nombre del cliente:
                                                <input
                                                    className="form-control form-control-user" 
                                                    type="text" 
                                                    name="nombreCliente"
                                                    value={ nombreCliente } 
                                                    onChange = { handleChange }
                                                />
                                            </div>

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

                                            <Select
                                                urn="/productos/disponibles"
                                                property="products"
                                                label="Producto"
                                                formData={ formData }
                                                setFormData={ setFormData }
                                                field="producto"
                                            />

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

                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm ">
                                                Estado:
                                                <select
                                                    className="form-control"
                                                    name="estado"
                                                    value={ estado }
                                                    onChange = { handleChange }
                                                >
                                                    <option value="">Seleccione...</option>
                                                    <option value="en proceso">En proceso</option>
                                                    <option value="entregado">Entregado</option>
                                                    <option value="cancelado">Cancelado</option>
                                                </select>
                                            </div>

                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm">
                                                Total:
                                                <p>$ { total }</p>
                                            </div>

                                        </div>

                                        <div className="col-sm-12">

                                            <button
                                                type="submit"
                                                className="btn btn-primary btnSmall centerBtn btn  btn-user btn-block"
                                            >Agregar</button>

                                        </div>

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