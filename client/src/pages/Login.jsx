import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLogin from 'react-google-login';

import Panel from '../components/panel';

const idClientGoogle = '530298702735-2f3kmn9k2dg8puodl8td5ka8480ipgi6.apps.googleusercontent.com';

function Login() {

    const navigate = useNavigate();

    const handleSuccessGoogle = async response => {

        console.log( process.env.REACT_APP_LOCAL_URI );

        const
            dataResponse = await fetch( `${ process.env.REACT_APP_LOCAL_URI }/auth/google-login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    tokenId: response.tokenId
                })
            }),
            data = await dataResponse.json();

            if( data ) {
                console.log( data );
                navigate( '/products' );
            }

    }

    const handleFailureGoogle = response => {
        console.log( 'Failure: ', response );
    }

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
                                                <Link to="/" className="btn btn-primary btn-user btn-block">
                                                    Ingresa
                                                </Link>
                                                <hr />
                                                <GoogleLogin
                                                    clientId={ idClientGoogle }
                                                    buttonText="Login with Google"
                                                    onSuccess={ handleSuccessGoogle }
                                                    onFailure={ handleFailureGoogle }
                                                    cookiePolicy={'single_host_origin'}
                                                    className="btn btn-google btn-user btn-block d-flex justify-content-center"
                                                />

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