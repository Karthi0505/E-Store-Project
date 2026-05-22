import "../Products/_Products.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../Redux/Product/ProductAction";
import { addCartItems } from "../../Redux/Cart/CartSlice";
              
export default function Products() {
  const productData = useSelector(state =>state.productReducer.products);
  const cart = useSelector(state => state.cartReducer.cartItems);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const addToCart = (itemData) => {
    dispatch(addCartItems(itemData));
  };
  return (
    <div className="product-container">
      {productData.map((product) => {
        return (
          <div
            key={product.id}
            className="p-3 col-lg-4 col-md-6 col-sm-12 product-card"
          >
            <div className="product-image-container">
              <img src={product.product_img} alt="Product" className="product-image" />
            </div>
            <div className="product-info">
              <h5>
                <a href="#">{product.product_name}</a>
              </h5>
              <p className="product-price">{product.price}</p>
              <div className="product-rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
            </div>

            <div className='my-3' onClick={() => addToCart(product)}>
              <div className="cart-button">
                <div  className="cart-icon-container">
                  <i className="fa fa-shopping-cart mx-4"/>
                </div>
                <div className="cart-text-container mx-2">
                  <p>Add to Cart</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
