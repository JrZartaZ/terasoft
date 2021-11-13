import React, { useState, useEffect } from 'react';

const Select = ({ urn, property, label, formData, setFormData }) => {

    const
        [ select, setSelect ] = useState({
            selected: {},
            data: []
        }),
        { selected, data } = select;

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
		
	}

    return (
        <div className="col-sm-6 mb-3 mb-sm-0 paddingForm ">
            { label }:
            <select
                className="form-control"
                name="data"
                value={ data }
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
