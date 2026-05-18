import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../Redux/Category/CategorySlice/Action";
import "./_SideNav.scss"
import { filterByPrice, filterProducts } from "../../Redux/Product/ProductSlice/prdSlice";

function SideNav() {

    const accordionData = useSelector(state => state.categoryReducer.categories);
    const[minPriceList, setMinPriceList] = useState(10);
    const[maxPriceList, setMaxPriceList] = useState(130);
    const status = useSelector(state => state.categoryReducer.status);
    const error = useSelector(state => state.categoryReducer.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);
    const filterData = (selectedCategory) => {
        dispatch(filterProducts(selectedCategory.id || selectedCategory.category_id)); 
    }

    const handleMinPriceChange = (e) => {
        setMinPriceList(e.target.value);
    }

    const handleMaxPriceChange = (e) => {
        setMaxPriceList(e.target.value);
    }

    const applyPriceFilter = () => {
        const payload = { min: minPriceList, max: maxPriceList };
        dispatch(filterByPrice(payload));
    }

    if (status === "loading") {
        return (
            <div className='side-nav'>
                <div className='section-title'>
                    <h3>Category</h3>
                </div>
                <p>Loading categories...</p>
            </div>
        )
    }

    if (status === "error") {
        return (
            <div className='side-nav'>
                <div className='section-title'>
                    <h3>Category</h3>
                </div>
                <p>{error}</p>
            </div>
        )
    }

    if (!accordionData.length) {
        return (
            <div className='side-nav'>
                <div className='section-title'>
                    <h3>Category</h3>
                </div>
                <p>No categories found</p>
            </div>
        )
    }

    return (
        <div className='side-nav'>
            <div className='section-title'>
                <h3>Category</h3>
            </div>
            <div className='accordion'>
                {
                    accordionData
                    .filter(accordionCategory => accordionCategory.parent_category_id === null || accordionCategory.parent_category_id === "null")
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
                                            .filter(subCategory => Number(subCategory.parent_category_id) === Number(accordionCategory.id || accordionCategory.category_id))
                                            .map((subCategory)=>{
                                                return (
                                                    <li key={subCategory.id || subCategory.category_id} className='sub-items'><a href="#" onClick={()=>filterData(subCategory)}>{subCategory.category}</a></li>
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
            <div className="price-filter-container">
                <div className="section-title">
                    <h3>Filter by Price</h3>
                </div>
                <div>
                    <label>Min : {minPriceList}</label>
                   <input type="range" 
                   className="form-range"
                   min={10} 
                   max={130} 
                   step={10} 
                   onChange={handleMinPriceChange}
                   />
                </div>
                <div>
                    <label>Max : {maxPriceList}</label>
                    <input type="range" 
                   className="form-range"
                   min={10} 
                   max={130} 
                   step={10} 
                   onChange={handleMaxPriceChange}
                   />
                </div>
                <button className="btn btn-outline-dark my-3" onClick={applyPriceFilter}>Apply filter</button>
            </div>
        </div>
    )
}

export default SideNav
