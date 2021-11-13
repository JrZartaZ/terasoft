import React, { useState, useEffect } from 'react';

const Select = ({ urn, property, field, label, formData, setFormData }) => {

    const
        [ select, setSelect ] = useState({
            selected: {},
            data: [],
            obj: {}
        }),
        { selected, data, nombre } = select;

    useEffect( () => {
        
		const getDataAvailableProductsAPI = async () => {
			const
				response = await fetch( `${ process .env .REACT_APP_LOCAL_URI }${ urn }` ),
				data = await response .json();
			
            console .log( property )
			console .log( data[ property ] );
		
            setSelect({
                ...select,
                data: data[ property ]
            });
        }

		getDataAvailableProductsAPI();

	}, [] );

    const handleChange = event => {

		setSelect({
            ...select,
            selected: event.target.value
        });

        console.log( data );

        const selectedObject = data .filter( obj => (
            obj.nombre == event.target.value
        ));

        setFormData({
            ...formData,
                sale: {
                    ...formData.sale,
                    [ field ]: event.target.value,
                    valor: ( 'valorUnitario' in selectedObject[ 0 ] ) ? selectedObject[ 0 ].valorUnitario : 0
                },
                selectedObject
        })

	}

    return (
        <div className="col-sm-6 mb-3 mb-sm-0 paddingForm ">
            { label }:
            <select
                className="form-control"
                name="nombre"
                value={ nombre }
                onChange = { handleChange }
            >
                <option value="">Seleccione...</option>
                {   data .map( item => (
                    <option key={ item ._id } value={ item .nombre }>{ item .nombre }</option>
                ))}
                
            </select>
        </div>
    )
}

export default Select;
