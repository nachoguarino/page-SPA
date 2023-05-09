export const ItemCounter = ({stock, setCantidad, cantidad}) => {


        const handleRestar = () =>{
            cantidad > 1 && setCantidad (cantidad -1)
        }
        const handleSumar = () =>{
            cantidad < stock && setCantidad (cantidad + 1)
        }



    return 	(	
        <div>
            <button onClick={handleRestar} className="btn btn-outline-dark my-2">-</button>
            <span className="mx-2"> {cantidad} </span>
            <button onClick={handleSumar} className="btn btn-dark my-2">+</button>
        </div>
    ) 	}

export default ItemCounter