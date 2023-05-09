
import { Component, PureComponent, useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/PedirDatos'
import ItemList from '../ItemList/ItemList'
import { useParams,useSearchParams } from 'react-router-dom'

export const ItemListContainer = () =>{

const [productos, setProductos] = useState([])
const [loading, setLoading] = useState(true)
const [searchParams] = useSearchParams()

const search = searchParams.get ('search')

const {categoriaId} = useParams()

useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then ((data) =>{
                if (!categoriaId){
                    setProductos(data)
                } else {
                    setProductos (data.filter((el) => el.categoria === categoriaId) )
                }
                
            })
            .catch((err) => console.log(err))
            .finally (() => setLoading(false))
    }, [categoriaId])

const listado = search
                    ? productos.filter((el) => el.nombre.toLowerCase().includes(search.toLowerCase() ) )
                    : productos


    return (
        <div className="container my-5">
            {
            loading
                ? <h2>Cargando...</h2>
                : <ItemList items={listado}/>
            }
        </div>
    )
}

