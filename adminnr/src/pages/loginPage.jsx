import logo from './../assets/images/nrlogo.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

import { login } from '../functions/functions';

import { useContext, useRef, useState, useEffect } from 'react';
import { StoreContext } from '../store/storeProvider';
import { types } from '../store/storeReducer';

function LoginPage() {

    const [store, dispatch] = useContext(StoreContext);
    const { isLoading } = store;

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
        document.getElementById("main").classList.add("mainL");        
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        document.body.style.pointerEvents = 'none'; //Desactiva clicks
        dispatch({ type: types.setLoadingOn, payload: { isLoading: true } }) //Activa el mensaje de cargando
        
        const data = { email: user, password: pwd };
        login(data).then(() => {
            dispatch({ type: types.setLoadingOff, payload: { isLoading: false } }) //Desactiva el mensaje de cargando
            document.body.style.pointerEvents = 'all'; //Activa clicks
        });
    }

    return (

        <section>
            <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>
                {errMsg}
            </p>
            <div className="container" style={{ marginTop: '90px' }}>
                <div className="row">
                    <div className="col s12 m6 offset-m3">
                        <div className="card-panel z-depth-5" style={{ borderRadius: '6px' }}>
                            <h4 className="center">¡Bienvenido!</h4>
                            <div className='center'><img src={logo} className="App-logo" alt="logo" width={250} /></div>
                            <div className="row">
                                <form action="/home" method="get" className="col s12 m12" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="input-field col s12 m12">
                                            <i className="prefix"><AccountCircleIcon fontSize='large' /></i>
                                            <input
                                                id="username"
                                                type="text"
                                                ref={userRef}
                                                onChange={(e) => setUser(e.target.value)}
                                                value={user}
                                                required
                                            />
                                            <label htmlFor="username">Usuario</label>
                                        </div>
                                        <div className="input-field col s12 m12">
                                            <i className="prefix"><LockIcon fontSize='large' /></i>
                                            <input
                                                id="password"
                                                type="password"
                                                autoComplete='off'
                                                onChange={(e) => setPwd(e.target.value)}
                                                value={pwd}
                                                required
                                            />
                                            <label htmlFor="password">Contraseña</label>
                                        </div>

                                        <div className='center'>
                                            <button className="btn waves-effect waves-light center" name="action" style={{ marginTop: '20px' }}>
                                                Iniciar sesión
                                            </button>
                                        </div>

                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage