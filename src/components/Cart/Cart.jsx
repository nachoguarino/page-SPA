
export const Cart = () => {

    return 	(	
        <div>
            <h2>Tu Compra</h2>
            <hr />

            {
                cart.map( (item)=> (
                    <div key={item.id}>
                        <h3>{item.nombre} </h3>
                        <img src={item.img} alt={'foto'+item.nombre}/>
                    </div>

                ))
            }
        </div>
    )

}