import react, {useState, useEffect} from 'react';
import BarraNav from '../components/BarraNav';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

const ProductosBackend = [
    {
        "id": 123,
        "nombre": 'Toyota',
        "descripcion": 'Blanco',
        "valor": 1235,
        "cantidad": 12,
        "estado":'Nuevo'

    }
]

function AddProduct(){
    {/*Defino las variables para capturar los datos de addProduct*/}
        const [id, setId] = useState('')
        const [nombre, setNombre] = useState('')
        const [descrip, setDescrip] = useState('')
        const [valor, setValor] = useState('')
        const [cant, setCant] = useState('')
        const [state, setState] = useState('')

    {/**Funcion para mostrar en consola lo capturado */}
    
        const enviaDatos = ()=>{
            console.log(`
            ID: ${id}, 
            nombre: ${nombre}, 
            Descripcion: ${descrip},
            Valor: ${valor},
            Cantidad: ${cant},
            Estado: ${state},`)
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

                                <form className="user form-control-user">
                                        <div className="form-group row">

                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm"> ID:
                                                <input 
                                                onChange = {(e)=>{setId(e.target.value)}}
                                                type="text" 
                                                className="form-control form-control-user" 
                                                />
                                            </div>

                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm"> Nombre:
                                                <input
                                                onChange = {(e)=>{setNombre(e.target.value)}} 
                                                type="text" 
                                                className="form-control form-control-user"
                                                />
                                            </div>

                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm"> Cantidad:
                                                <input
                                                onChange = {(e)=>{setCant(e.target.value)}} 
                                                type="number" 
                                                className="form-control form-control-user"
                                                />
                                            </div>

                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm"> Valor unitario:
                                                <input
                                                onChange = {(e)=>{setValor(e.target.value)}} 
                                                type="number" 
                                                className="form-control form-control-user"
                                                />
                                            </div>

                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm "> Estado:
                                                <select
                                                onChange = {(e)=>{setState(e.target.value)}} 
                                                name="estado" 
                                                id="Estado">
                                                    <option value="seleccionar">Seleccionar</option>
                                                    <option value="autorizado">Disponible</option>
                                                    <option value="noautorizado">No Disponible</option>
                                                </select>
                                            </div>

                                        </div>

                                        <div className="col-sm-12">
                                            <label for="Textarea1">Descripcion de producto</label>
                                            <textarea
                                            onChange = {(e)=>{setDescrip(e.target.value)}} 
                                            className="form-control" 
                                            id="Textarea1" 
                                            rows="4"></textarea>
                                        </div>

                                        {/*Botón de Actualizar*/}
                                        <div className="container">
                                            
                                            <br/>
                                            <button
                                                onClick = {enviaDatos}
                                                type = "button"
                                                className="container btn btn-primary btnSmall centerBtn btn  btn-user btn-block"

                                            >agregar</button>

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