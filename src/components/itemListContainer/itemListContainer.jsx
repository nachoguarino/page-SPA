import './itemListContainer.css'

export const ItemListContainer = ({hola}) =>{

    return (
        <div className="listContainer">
            <h2 className='listContainerItem'>Item List Container</h2>
            <p className='listContainerItem'>{hola}</p>
        </div>
    )
}