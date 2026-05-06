import "../Products/_Products.scss";

import Shop1 from "../../assets/Shop1.jpeg";

import Shop2 from "../../assets/Shop2.jpeg";

import Shop3 from "../../assets/Shop3.jpeg";

import Shop4 from "../../assets/Shop4.jpeg";

import Shop5 from "../../assets/Shop5.jpeg";

import Shop6 from "../../assets/Shop6.jpeg";

export default function Products() {
  const productData = [
    {
      id: 1,
      pName: "Leather Jacket",
      pPrice: 45,
      img: Shop1,
    },
    {
      id: 2,
      pName: "Watch",
      pPrice: 50,
      img: Shop2,
    },
    {
      id: 3,
      pName: "Sunglass",
      pPrice: 20,
      img: Shop3,
    },
    {
      id: 4,
      pName: "Bag",
      pPrice: 10,
      img: Shop4,
    },
    {
      id: 5,
      pName: "Denim",
      pPrice: 45,
      img: Shop5,
    },
    {
      id: 6,
      pName: "Leather Jacket",
      pPrice: 100,
      img: Shop6,
    },
  ];

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
