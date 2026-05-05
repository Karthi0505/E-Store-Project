import './_CatNav.scss'
import '../../Styles/SCSS/_mixins.scss'

function CatNav() {
    return (
        <div className='cat-nav-container container'>
            <ul>
                <li className='list-items'><a href="#">Women</a></li>
                <li className='list-items'><a href="#">Men</a></li>
                <li className='list-items'><a href="#">Kids</a></li>
                <li className='list-items'><a href="#">Best offers</a></li>
            </ul>
        </div>
    )
}

export default CatNav
