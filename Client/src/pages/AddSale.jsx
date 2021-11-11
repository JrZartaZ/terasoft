import { Link } from "react-router-dom";
import BarraNav from '../components/BarraNav';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';


function AddSale() {
  return (
    <div>
      <div id="wrapper">
        <BarraNav />
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column" >
          {/* Main Content */}
          <div id="content">
            <TopBar />
            {/* Begin Page Content */}
            <div className="container-fluid">
              {/* Page Heading */}
              <h1 className="h3 mb-4 text-gray-800 center">Agregar Venta</h1>
              <div className="row center">
                <div className="col-lg-6">
                  <form className="user form-control-user ">
                    <div className="form-group row">

                      <div className="col-sm-6 mb-3 mb-sm-0 paddingForm">Fecha venta:
                        <input name="date" type="date" className="form-control form-control-user"
                          placeholder="" required />
                      </div>

                      <div className="col-sm-6 mb-3 mb-sm-0 paddingForm"> Nombre del cliente:
                        <input name="client_name" type="text" className="form-control form-control-user"
                          placeholder="" required />
                      </div>
                      <div className="col-sm-6 mb-3 mb-sm-0 paddingForm">Cédula del cliente:
                        <input name="client_cc" type="number" className="form-control form-control-user"
                          placeholder="" required />
                      </div>
                      <div className="col-sm-6 mb-3 mb-sm-0 paddingForm"> Producto:
                        <input name="product" type="text" className="form-control form-control-user"
                          placeholder="" required />
                      </div>
                      <div className="col-sm-6 mb-3 mb-sm-0 paddingForm"> Cantidad:
                        <input name="quantity" type="number" className="form-control form-control-user"
                          placeholder="" required />
                      </div>

                      <div className="col-sm-6 mb-3 mb-sm-0 paddingForm"> Valor total:
                        <input name="value" type="number" className="form-control form-control-user"
                          placeholder="" required />
                      </div>

                    </div>

                    <button className="btn btnSmall centerBtn btn-primary btn-user btn-block">
                      Registrar Venta
                    </button>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      < Footer />


      {/* Scroll to Top Button*/}
      < a className="scroll-to-top rounded" href="#page-top" >
        <i className="fas fa-angle-up"></i>
      </a >


    </div>

  );
}

export default AddSale;
