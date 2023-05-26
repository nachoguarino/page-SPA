import { useContext } from "react"
import { useState } from "react"
import {  Navigate } from "react-router-dom"
import { collection, writeBatch, query, where, documentId, getDocs, addDoc } from 'firebase/firestore'
import { dataBase } from '../../firebase/config'
import { Link } from 'react-router-dom'
import { CartContext } from "../../context/CartContext"



export const Checkout = () => {

    const {cart, totalCompra} = useContext(CartContext)

    const [values, setValues] = useState({
        nombre:'',
        direccion:'',
        email:''
    })

    const [orderId, setOrderId] = useState(null)

    const handleImput = (e)=>{
        setValues({
            ...values,
            [e.target.name]: e.target.values
        })
    }

    const handleSubmit = async (values) => {
        e.preventDefault()
        
        const orden = {
            cliente: values,
            items: cart.map( item =>( { id: item.id, nombre: item.nombre, cantidad: item.cantidad })),
            total: totalCompra()
        }

        // CREANDO ORDENES A FIREBASE
        const batch = writeBatch(dataBase)
        const productosRef = collection (dataBase, "productos")
        const ordersRef = collection(dataBase, "ordenes" )

        const promesas = cart.map((item)=>{
            const ref = doc(productosRef,item.id)
            return getDoc(ref)
        })

        const productos = await Promise.all(promesas)

        const outOfStock = []

        productos.forEach((doc) =>{
            const item = cart.find((i) => i.id === doc.id)
            const stock = doc.data().stock

            if(stock >= item.cantidad){
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
        }else{
            alert("hay items sin stock!")
        }
    }


    if(orderId){
        return(
            <div className="container my-5">
                <h2>tu orden se registro existosamente!</h2>
                <hr />
                <p>Guarda tu numero de orden :{orderId} </p>
                
                <Link to="/">Volver al Inicio</Link>
            </div>
        )
    }
    
    if (cart.length == 0){
        return <Navigate to='/' />
    }


    return 	(
        <div className="container my-5">
            <h2>Checkout</h2>

            <form action="">
                <imput className = "form-control my-2"
                type= "text"
                placeholder= "Nombre"
                value={values.nombre}
                name="nombre"
                />

                <imput className = "form-control my-2"
                type= "text"
                placeholder= "Dirección"
                value={values.direccion}
                name="direccion"
                />

                <imput className = "form-control my-2"
                type= "text"
                placeholder= "Email"
                value={values.email}
                name="email"
                />

            </form>
        </div>
	) 
}   

export default Checkout