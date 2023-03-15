import Accordion from "../../atoms/accordian/Accordian";
import Slider from 'react-input-slider';
import Checkbox from '../../atoms/checkbox/Checkbox';
import { useState, useEffect, useContext } from "react";
import {FilterContext} from '../../context/filtercontext';
import checkboxData from './checkboxData.json';

function Filters () {
    const [state, setState] = useState({ x: 10, y: 10 });
    const [brands, setBrands] = useState([]);

    const {filterByBrand} = useContext(FilterContext);


    useEffect(() => {
        filterByBrand(brands);
    }, [brands]);

    const brandFilter = (e) => {
        if(e.target.checked) {
            setBrands(prevState => [...prevState, e.target.value]);
        } else {
            setBrands(brands.filter(item => e.target.value !== item));
        }
    }


    return(
        <>  <div className="filters">
                <section className="filters-column">
                    <span className="title">FILTERS</span>
                    <span className="clear-all">CLEAR ALL</span>

                    {brands.map((item, id)=><div key={id} className="ph-brand">{item}</div>)}

                </section>

                <section className="price">
                    <Accordion title="Price">
                    <Slider
                    axis="x"
                    x={state.x}
                    onChange={({ x }) => setState(state => ({ ...state, x }))}/>
                    </Accordion>
                </section>

                <section className="brand">
                    <Accordion title="Brand" >
                        {checkboxData.map((item, id) => {
                            return <Checkbox key={id} name={item.name} htmlFor={item.name} label={item.label} value={item.value} onChangeHandler={brandFilter} />
                        })}
                    </Accordion>
                    {/* <Accordion title="Brand">
                        <Checkbox name="apple" htmlFor="apple" label="Apple" value="Apple" onChangeHandler={selectFilter}/>
                        <Checkbox name="apple" htmlFor="apple" label="Sony" value="Sony" onChangeHandler={selectFilter}/>
                        <Checkbox name="apple" htmlFor="apple" label="Asus" value="Asus" onChangeHandler={selectFilter}/>
                        <Checkbox name="apple" htmlFor="apple" label="LG" value="LG" onChangeHandler={selectFilter}/>
                        <Checkbox name="apple" htmlFor="apple" label="Lenovo" value="Lenovo" onChangeHandler={selectFilter}/>
                        <Checkbox name="apple" htmlFor="apple" label="Honor" value="Honor" onChangeHandler={selectFilter}/>
                        <Checkbox name="apple" htmlFor="Xiaomi" label="Xiaomi" value="Xiaomi" onChangeHandler={selectFilter}/>
                        <Checkbox name="apple" htmlFor="Meizu" label="Meizu" value="Meizu" onChangeHandler={selectFilter}/>
                    </Accordion> */}
                </section>
                        
                
                <section className="">
                    <Accordion title="Battery Capacity" />
                </section>
                <section className="">
                    <Accordion title="Screen Size" />
                </section>
                <section className="">
                    <Accordion title="RAM" />
                </section>
                <section className="">
                    <Accordion title="Customer Ratings" />
                </section>
                <section className="">
                    <Accordion title="Camera" />
                </section>
                <section className="">
                    <Accordion title="Resolution" />
                </section>
                <section className="">
                    <Accordion title="Operating System" />
                </section>
               
            </div>
        </>
    )
}

export default Filters;