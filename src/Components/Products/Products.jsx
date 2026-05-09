import "../Products/_Products.scss";
import productSlice from "../../Redux/Product/ProductSlice/ProductSlice";
import { useSelector } from "react-redux";

export default function Products() {
  const productData = useSelector(productSlice.getInitialState);

  return (
    <div className="product-container">
      {productData.map((product) => {
        return (
          <div
            key={product.id}
            className="p-3 col-lg-4 col-md-6 col-sm-12 product-card"
          >
            <div className="product-image-container">
              <img src={product.img} alt="Product" className="product-image" />
            </div>
            <div className="product-info">
              <h5>
                <a href="#">{product.pName}</a>
              </h5>
              <p className="product-price">{product.pPrice}</p>
              <div className="product-rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
