import './_CatNav.scss'
import '../../Styles/SCSS/_mixins.scss'
import { useSelector } from 'react-redux'
import categorySlice from '../../Store/Slice/CategorySlice/CategorySlice'

function CatNav() {
    const categories = useSelector(categorySlice.getInitialState)
    return (
        <div className='cat-nav-container container'>
            <ul>
                {categories.map((category) => (
                    <li className='list-items'><a href="#">{category}</a></li>
                ))}
            </ul>
        </div>
    )
}

export default CatNav
