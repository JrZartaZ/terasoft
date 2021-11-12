import Panel from '../components/panel';

function Login() {
    return (
        <div>
            <Panel />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Iniciar Sesión</h1>
                                            </div>
                                            <form className="user">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-control-user"
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Ingrese su correo electrónico" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control form-control-user"
                                                        id="exampleInputPassword" placeholder="Contraseña" />
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                        <label className="custom-control-label" for="customCheck">Recordarme</label>
                                                    </div>
                                                </div>
                                                <a href="/index" className="btn btn-primary btn-user btn-block">
                                                    Ingresa
                                                </a>
                                                <hr />
                                                <a href="/index" className="btn btn-google btn-user btn-block">
                                                    <i className="fab fa-google fa-fw"></i> Inicia Sesión con Gmail
                                                </a>

                                            </form>
                                            <hr />
                                            <div className="text-center">
                                                <a className="small" href="/forgot">¿Olvidó su contraseña?</a>
                                            </div>
                                            <div className="text-center">
                                                <a className="small" href="/register">¡Crea una cuenta!</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );

}

export default Login;