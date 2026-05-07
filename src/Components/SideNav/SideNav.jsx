import { useSelector } from "react-redux";
import accordionCatSlice from "../../Store/Slice/AccordionSlice/AccordianCatSlice";
import "./_SideNav.scss"

function SideNav() {

    const accordionData = useSelector(accordionCatSlice.getInitialState);
       
    return (
        <div className='side-nav'>
            <div className='section-title'>
                <h3>Category</h3>
            </div>
            <div className='accordion'>
                {
                    accordionData.map((accordionCategory, key)=>{
                        return (
                            <div key={accordionCategory.category} className='accordion-item individual-category'>
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
                                            {accordionCategory.items.map((items)=>{
                                                return (
                                                    <li key={items} className='sub-items'><a href="#">{items}</a></li>
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
