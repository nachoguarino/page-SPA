import { useContext, useState } from "react"
import './LoginScreen.css'
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

export const LoginScreen = () => {
    const {login, loginWithGoogle} = useContext(AuthContext)
    
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleImput = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        login(values)
    }
    return 	(
        <div className="login">
            <div className="login-container">
                <h2>Login</h2>
                <hr />
                <form onSubmit={handleSubmit}>
                    <input  
                            value={values.email}
                            name="email"
                            type="text"
                            className="form-control my-2"
                            placeholder="Email"
                            onChange={handleImput}
                    />
                    <input  
                            value={values.password}
                            name="password"
                            type="password"
                            className="form-control my-2"
                            placeholder="Contraseña"
                            onChange={handleImput}
                    />
                    <button className="btn btn-dark mx-2" type="submit">Login</button>
                    <Link className="btn btn-outline-dark mx-2" to='/register'>Registrarme</Link>
                </form>
                <button className="btn btn-primary m-2" onClick={loginWithGoogle}>Ingresar con Google</button>
            </div>
        </div>
	) 	
}   

export default LoginScreen