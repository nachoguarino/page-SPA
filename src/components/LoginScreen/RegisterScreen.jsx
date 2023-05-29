import { useContext, useState } from "react"
import './LoginScreen.css'
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"


export const RegisterScreen = () => {
    const { register } = useContext(AuthContext)

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleImput = (e) => {
        setValues({
            ...values,
            [e.target.name] :e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        register(values)
    }
    return 	(
        <div className="login">
            <div className="login-container">
                <h2>Registrarme</h2>
                <hr />
                <form onSubmit={handleSubmit}>
                    <input  
                            value={values.email}
                            type="text"
                            name="email"
                            className="form-control my-2"
                            placeholder="Email"
                            onChange={handleImput}
                    />
                    <input  
                            value={values.password}
                            type="password"
                            name="password"
                            className="form-control my-2"
                            placeholder="Contraseña"
                            onChange={handleImput}
                    />
                    <button className="btn btn-dark mx-2" type="submit">Registrarme</button>
                    <Link className="btn btn-outline-dark mx-2" to='/login'>Ya estoy Registrado</Link>
                </form>
            </div>
        </div>
	) 	
}   

export default RegisterScreen