import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../Redux/Category/CategorySlice/Action";
import "./_SideNav.scss"

function SideNav() {

    const accordionData = useSelector(state => state.categoryReducer.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);
       
    return (
        <div className='side-nav'>
            <div className='section-title'>
                <h3>Category</h3>
            </div>
            <div className='accordion'>
                {
                    accordionData
                    .filter(accordionCategory => accordionCategory.parent_category_id === null)
                    .map((accordionCategory, key)=>{
                        return (
                            <div key={accordionCategory.id || accordionCategory.category_id} className='accordion-item individual-category'>
                                <div className='accordion-header'>
                                    <button type="button" className='accordion-button' data-bs-toggle="collapse" data-bs-target={"#collapse" + key}>
                                        <div className='category-title'>
                                            <a href="#">{accordionCategory.category}</a>
                                        </div>
                                    </button>
                                </div>
                                <div className='accordion-collapse collapse show' id={'collapse' + key}>
                                    <div className='accordion-body'>
                                        <ul>
                                            {accordionData
                                            .filter(subCategory => subCategory.parent_category_id === (accordionCategory.id || accordionCategory.category_id))
                                            .map((subCategory)=>{
                                                return (
                                                    <li key={subCategory.id || subCategory.category_id} className='sub-items'><a href="#">{subCategory.category}</a></li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SideNav
