import React from 'react'
import BarraNav from '../components/BarraNav'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'


const ListSales = () => {
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
                  <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Listar Ventas</h1>
                  </div>
    
    
    
                  <div>
                    <a href="/addsale" className="btn btn-primary btn-circle btn-sm">
                      <i href="/addsale" className="fa fa-plus-circle fa-2x" aria-hidden="true"></i>
    
                    </a>
                  </div>
    
    
                  <div className="card-body">
    
                    <div className="table-responsive">
                      <table className="table table-bordered centerText" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                          <tr>
                            <th>ID Venta</th>
                            <th>Fecha de Venta</th>
                            <th>Nombre Cliente</th>
                            <th>Cédula/NIT Cliente</th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Valor total</th>
                            <th>Acción</th>
                          </tr>
                        </thead>
    
                        <tbody>
                          {/*Aqui!! Podemos imprimir un array de objetos HTML (que es un array de DOM ) */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* /.container-fluid */}
    
              </div>
              {/* End of Main Content */}
    
              <Footer />
            </div>
            {/* End of Content Wrapper */}
    
          </div>
          {/* End of Page Wrapper */}
    
          {/* Scroll to Top Button*/}
          <a className="scroll-to-top rounded" href="#page-top">
            <i className="fas fa-angle-up"></i>
          </a>
    
    
    
    
          {/* Logout Modal*/}
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
    
          {/* C Delete Modal*/}
          <div className="modal fade" id="logoutModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Eliminar venta</h5>
                  <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">La venta fue eliminada de forma permanente</div>
                <div className="modal-footer">
                  <a className="btn btn-primary" href="/index">Aceptar</a>
                </div>
              </div>
            </div>
          </div>
    
    
    
    
        </div>
      );
}

export default ListSales

