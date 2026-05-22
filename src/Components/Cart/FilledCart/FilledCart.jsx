import { useDispatch, useSelector } from "react-redux"
import { addCartItems, deleteCartItem, removeCartItems } from "../../../Redux/Cart/CartSlice"
import "./_FilledCart.scss"

function FilledCart() {
    const cart = useSelector(state => state.cartReducer.cartItems)
    const dispatch = useDispatch()
    const total = cart.reduce((sum, item) => sum + (Number(item.price) * (item.quantity || 1)), 0)

    return (
        <div className="filled-cart-container">
            <h1>Cart Items</h1>
            <div className="filled-cart-items">
                {cart.map(item => (
                    <div key={item.id || item.product_id} className="cart-item-card">
                        <img src={item.product_img} alt={item.product_name} />
                        <div>
                            <h2>{item.product_name}</h2>
                            <p>Price: {item.price}</p>
                            <p>Quantity: {item.quantity || 1}</p>
                            <div className="cart-quantity-actions">
                                <button onClick={() => dispatch(removeCartItems(item))}>-</button>
                                <span>{item.quantity || 1}</span>
                                <button onClick={() => dispatch(addCartItems(item))}>+</button>
                                <button className="remove-cart-item-btn btn btn-outline-danger" onClick={() => dispatch(deleteCartItem(item))}>Remove</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <h1>Cart Summary</h1>
                <h2>Total: {total}</h2>
            </div>
        </div>
    )
}

export default FilledCart
