import ItemDetail from "../ItemDetail/ItemDetail"
import { useState } from "react"
import { useEffect } from "react"
import { pedirDatos } from "../../helpers/PedirDatos"
import {useParams} from "react-router-dom"
import {doc, collection, getDoc} from 'firebase/firestore'
import { dataBase } from "../../firebase/config"



const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(dataBase, "productos", itemId)

        getDoc(docRef)
            .then((doc)=> {
                const _item = {
                    id: doc.id,
                    ...doc.data()
                }
                setItem(_item)
            }) 
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
    }, [])

    return(
        <div className="container my-5">
        {
            loading
                ? <h2>Cargando...</h2>
                : <ItemDetail item={item}/>
        }
    </div>
    )
}

export default ItemDetailContainer