import { Link } from "react-router-dom";


function Register () {
    return (
        <div>
            <div className="container">

<div className="card o-hidden border-0 shadow-lg my-5">
    <div className="card-body p-0">
       
        <div className="row">
            <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
            <div className="col-lg-7">
                <div className="p-5">
                    <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Crea una cuenta</h1>
                    </div>
                    <form className="user">
                        <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                    placeholder="Nombre"/>
                            </div>
                            <div className="col-sm-6">
                                <input type="text" className="form-control form-control-user" id="exampleLastName"
                                    placeholder="Apellido"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                placeholder="Email"/>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                <input type="password" className="form-control form-control-user"
                                    id="exampleInputPassword" placeholder="Contraseña"/>
                            </div>
                            <div className="col-sm-6">
                                <input type="password" className="form-control form-control-user"
                                    id="exampleRepeatPassword" placeholder="Confirma contraseña"/>
                            </div>
                        </div>
                        <a href="login.html" className="btn btn-primary btn-user btn-block"  data-toggle="modal" data-target="#logoutModal">
                            Regístrate   
                        </a>
                        <hr/>
                        <a href="index.html" className="btn btn-google btn-user btn-block" data-toggle="modal" data-target="#logoutModal">
                            <i className="fab fa-google fa-fw"></i> Regístrate con Gmail
                        </a>
                       
                    </form>
                    <hr/>
                    <div className="text-center">
                        <a className="small" href="forgot-password.html"> 
                            ¿Olvidaste la contraseña?</a>
                    </div>
                    <div className="text-center">
                        <a className="small" href="login.html">¿Ya tienes una cuenta confirmada? Ingresa</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</div>


<div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
aria-hidden="true">
<div className="modal-dialog" role="document">
<div className="modal-content">
  <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLabel">Estado cuenta</h5>
      <button className="close" type="button" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
      </button>
  </div>
  <div className="modal-body">La cuenta se encuentra en estado: PENDIENTE, se confirmará por correo electrónico.</div>
  <div className="modal-footer">
        
      <a className="btn btn-primary" href="login.html">Aceptar</a>
  </div>
</div>
</div>
</div>
        </div>
    );
}

export default Register;