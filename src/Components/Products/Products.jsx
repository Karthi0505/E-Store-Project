import "../Products/_Products.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../Redux/Product/ProductAction";
import { addCartItems } from "../../Redux/Cart/CartSlice";
import { Link } from "react-router-dom";
              
export default function Products() {
  const productData = useSelector(state =>state.productReducer.products);
  const selectedCategoryId = useSelector(state => state.productReducer.selectedCategoryId);
  const minPrice = useSelector(state => state.productReducer.minPrice);
  const maxPrice = useSelector(state => state.productReducer.maxPrice);
  const cart = useSelector(state => state.cartReducer.cartItems);
  const dispatch = useDispatch();
  const filteredProducts = productData.filter((product) => {
    const categoryMatched = selectedCategoryId
      ? Number(product.category_id) === Number(selectedCategoryId)
      : true;
    const priceMatched = minPrice && maxPrice
      ? Number(product.price) >= Number(minPrice) && Number(product.price) <= Number(maxPrice)
      : true;

    return categoryMatched && priceMatched;
  });
  
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const addToCart = (itemData) => {
    dispatch(addCartItems(itemData));
  };
  return (
    <div className="product-container">
      {filteredProducts.map((product) => {
        return (
          <div
            key={product.id}
            className="p-3 col-lg-4 col-md-6 col-sm-12 product-card"
          >
            <Link to={`/product/${product.id || product.product_id}`} state={product}>
              <div className="product-image-container">
                <img src={product.product_img} alt="Product" className="product-image" />
              </div>
            </Link>
            <div className="product-info">
              <h5>
                <Link to={`/product/${product.id || product.product_id}`} state={product}>{product.product_name}</Link>
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
