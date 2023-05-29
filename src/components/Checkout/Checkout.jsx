import { useContext } from "react"
import { useState } from "react"
import {  Navigate } from "react-router-dom"
import { collection, writeBatch, query, where, documentId, getDocs, addDoc, doc, getDoc } from 'firebase/firestore'
import { auth, dataBase } from '../../firebase/config'
import { Link } from 'react-router-dom'
import { CartContext } from "../../context/CartContext"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'

const schema = Yup.object().shape({
    nombre: Yup.string()
                .required("❗Este campo es Requerido")
                .min(3, "❌El nombre es muy corto")
                .max(20, "❌El nombre es demasiado largo"),
    direccion: Yup.string()
                .required("❗Este campo es Requerido")
                .min(6,"❌La dirección es muy corta ")
                .max(20, "❌la direccion es demasiada larga"),
    email: Yup.string()
                .email("❌El email no es valido")
                .required("❗Este campo es Requerido")
})

export const Checkout = () => {


    const {cart, totalCompra, emptyCart} = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const generarOrden = async (values) => {

        const orden = {
            client: values,
            items: cart.map(item =>({id: item.id, nombre: item.nombre, cantidad: item.cantidad})),
            total: totalCompra(),
        }
        // CREANDO ORDENES A FIREBASE
        const batch = writeBatch(dataBase)
        const productosRef = collection (dataBase, "productos")
        const ordersRef = collection(dataBase, "ordenes" )
    
        const promesas = cart.map((item)=>{
            const ref = doc(productosRef, item.id)
            return getDoc(ref)
        })
    
        const productos = await Promise.all(promesas)
    
        const outOfStock = []
    
        productos.forEach((doc) =>{
            const item = cart.find((i) => i.id === doc.id)
            const stock = doc.data().stock
    
            if(stock >= item.cantidad) {
                batch.update( doc.ref, {
                    stock: stock - item.cantidad
                })
            }else{
                outOfStock.push(item)
        }
    })

        if(outOfStock.length === 0) {
            addDoc(ordersRef, orden)
                .then((doc) => {
                    batch.commit()
                    setOrderId(doc.id)
                    emptyCart()
                })
        } else {
            alert("hay items sin stock!")
        }
    }




    if(orderId){
        return(
            <div className="container my-5">
                <h2>tu orden se registro existosamente!</h2>
                <hr />
                <p>Guarda tu numero de orden : <strong>{orderId}</strong> </p>
                
                <Link to="/" className="btn btn-dark ">Volver al Inicio</Link>
            </div>
        )
    }
    
    if (cart.length == 0) {
        return <Navigate to='/' />
    }


    return 	(
        <div className="container my-5 justify-content-center">
            <h2>Checkout</h2>
            <p> Ingrese sus datos de Envio</p>
            <hr />

            <Formik
                initialValues ={{
                    nombre: '',
                    direccion: '',
                    email: ''
                }}
                validationSchema={schema}
                onSubmit={generarOrden}
            >
                {() =>(
                    <Form>
                        <Field name="nombre" type="text" placeholder="Ingrese su Nombre" className="form-control my-2" />
                        <ErrorMessage name="nombre" component={"p"} />
                        <Field name="direccion" type="text" placeholder="Ingrese Domicilio de entrega" className="form-control my-2" />
                        <ErrorMessage name="direccion" component={"p"} />
                        <Field name="email" type="email" placeholder="Ingrese su Correo" className="form-control my-2" />
                        <ErrorMessage name="email" component={"p"} />

                        <button className="btn btn-dark" type="submit">Enviar</button>
                    </Form>
                )}
            </Formik>

        </div>
	) 
}   

export default Checkout