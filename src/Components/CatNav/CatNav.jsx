import './_CatNav.scss'
import '../../Styles/SCSS/_mixins.scss'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getCategories } from '../../Redux/Category/CategorySlice/Action'
import { Link } from 'react-router-dom'

function CatNav() {
    const categories = useSelector(state => state.categoryReducer.categories)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    return (
        <div className='cat-nav-container container'>
            <ul>
                <li className='list-items'>
                    <Link to="/"> Home  </Link>
                </li>
                {categories.map((category) => {
                    if(category.parent_category_id === null){
                        return <li className='list-items'><a href="#">{category.category}</a></li>
                    }
                })}
            </ul>
        </div>
    )
}

export default CatNav
