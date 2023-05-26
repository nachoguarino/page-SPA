export const ItemCounter = ({stock, setCantidad, cantidad, agregar}) => {


        const handleRestar = () =>{
            cantidad > 1 && setCantidad (cantidad -1)
        }
        const handleSumar = () =>{
            cantidad < stock && setCantidad (cantidad + 1)
        }



    return 	(	
        <div className="container m-1">
            <div className="container mx-3">
                <button 
                    onClick={handleRestar} 
                    className={`btn my-2 ${cantidad === 1 ? "boton" : ''} ${cantidad === 1 ? "btn-outline-danger" : "btn btn-outline-dark"}`} 
                    disabled ={cantidad === 1}
                    >
                        -
                </button>

                <span className="mx-2"> {cantidad} </span>

                <button 
                    onClick={handleSumar} 
                    className={cantidad === stock ? "btn my-2 btn-danger": "btn my-2 btn-dark"}
                    disabled = {cantidad === stock}
                    >
                        +
                </button>
            </div>

            <div>
                <button onClick={agregar} className="btn btn-dark m-1">Agregar al Carrito</button>
            </div>
        </div>
    ) 	}

export default ItemCounter