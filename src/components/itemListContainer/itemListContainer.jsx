
import { Component, PureComponent, useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/PedirDatos'
import ItemList from '../ItemList/ItemList'
import { useParams, useSearchParams } from 'react-router-dom'
import {collection, getDocs, query, where} from 'firebase/firestore'
import {dataBase} from '../../firebase/config'

export const ItemListContainer = () =>{

const [productos, setProductos] = useState([])
const [loading, setLoading] = useState(true)
const [searchParams] = useSearchParams()

const {categoriaId} = useParams()

useEffect(() => {
        setLoading(true)

        //FIRESTORE
        //armar la referencia
        const productosRef = collection(dataBase, "productos")
        const q = categoriaId ?
                            query(productosRef, where("categoria", "==", categoriaId))
                            : productosRef
        // consumir la referencia(async)
        getDocs(q)
            .then((res) =>{
                const docs = res.docs.map((doc) =>{
                    return{
                        ...doc.data(),
                        id: doc.id
                    }
                })
                setProductos(docs)
                

            })
            .finally (() => setLoading(false))
    }, [categoriaId])



    return (
        <div className="container my-5">
            {
            loading
                ? <h2>Cargando...</h2>
                : <ItemList items={productos}/>
            }
        </div>
    )
}

