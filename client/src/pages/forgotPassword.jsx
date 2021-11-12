

function ForgotPassword() {
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-password-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-2">¿Olvidaste la contraseña?</h1>
                                                <p className="mb-4">No te preocupes, ingresa el correo electrónico con el que te registraste y te enviaremos un link para que la reestablezcas
                                                </p>
                                            </div>
                                            <form className="user">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-control-user"
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Ingresa el correo electrónico" />
                                                </div>
                                                <a href="/login" className="btn btn-primary btn-user btn-block" data-target="#PasswordModal" data-toggle="modal">
                                                    Olvidé mi contraseña
                                                </a>
                                            </form>
                                            <hr />
                                            <div className="text-center">
                                                <a className="small" href="/register">Crea una cuenta</a>
                                            </div>
                                            <div className="text-center">
                                                <a className="small" href="/login">¿Ya tienes una cuenta confirmada? Ingresa</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            {/* password modal */}
            <div className="modal fade" id="PasswordModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Olvidé mi contraseña</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">Se ha enviado un correo para reestablecer la contraseña</div>
                        <div className="modal-footer">
                            <a className="btn btn-primary" href="/login">Aceptar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    
    );
}

export default ForgotPassword;