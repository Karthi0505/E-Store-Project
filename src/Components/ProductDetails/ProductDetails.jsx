import { useParams,useLocation } from 'react-router-dom'
import './_ProductDetails.scss'
import { useDispatch } from 'react-redux'
import { addCartItems } from '../../Redux/Cart/CartSlice'

const ProductDetails = () => {
  const { id } = useParams()
  const location = useLocation()
  const product = location.state    
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    console.log('Add to cart', product)
    dispatch(addCartItems(product))
  }

  return (
    <div className='product-details-container'>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
      {product && (
        <div className='product-details-card'>
          <div className='product-details-image-container'>
            <img src={product.product_img} alt={product.product_name} />
          </div>
          <div className='product-details-content'>
            <div className='product-details-name'>
              <span>{product.product_name}</span>
            </div>
            <div className='product-details-rating'>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
            </div>
            <div className='product-details-price'>
              MRP:<span>{product.price}</span>
              <div>Inclusive of all taxes</div>
            </div>
            <div className='product-details-description'>
              <span>some product description given here</span>
            </div>
            <div className='product-details-actions'>
              <button>Buy Now</button>
              <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      )}
      {!product && <p>No product data found. Please open this page by clicking a product image.</p>}
    </div>
  )
}

export default ProductDetails