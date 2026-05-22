import { Link } from "react-router-dom"
import "./_EmptyCart.scss"

const EmptyCart = () => {
  return (
    <div className="ec-main-div p-4">
      <span className="my-5 ec-text">Empty Cart</span>
      <hr />
      <Link to="/">
        <div className="btn btn-warning my-3">
          <p>Continue Shopping</p>
        </div>
      </Link>
    </div>
  )
}

export default EmptyCart