
import "./_SideNav.scss"

function SideNav() {
    return (
        <div className='side-nav'>
            <div className='section-title'>
                <h3>Category</h3>
            </div>
            <div className='accordion'>
                <div className='accordion-item individual-category'>
                    <div className='accordion-header'>
                        <button type="button" className='accordion-button' data-bs-toggle="collapse" data-bs-target="#accordion-heading-one">
                            <div className='category-title'>
                                <a href="#">Men</a>
                            </div>
                        </button>
                    </div>
                    <div className='accordion-collapse collapse show' id='accordion-heading-one'>
                        <div className='accordion-body'>
                            <ul>
                                <li className='sub-items'><a href="#">Shirts</a></li>
                                <li className='sub-items'><a href="#">T-Shirts</a></li>
                                <li className='sub-items'><a href="#">Jeans</a></li>
                                <li className='sub-items'><a href="#">Trousers</a></li>
                            </ul>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNav
