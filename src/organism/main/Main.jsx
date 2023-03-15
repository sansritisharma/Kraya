import React, {useState, useEffect} from "react";
import Button from "../../atoms/button/Button";
import Card from "../../molecules/prodCard/Card";
import Filters from "../../molecules/filters/Filters";
// import { FilterContext } from "../../context/filtercontext";
// import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/ProductSlice";
import CompareCard from "../../molecules/compareCard/CompareCard";


const Main = (props) => {
  // const cardData = props.data;
 //  const {sorting}= useContext(FilterContext);
  const [clickedItem, setClickedItem] = useState(0);
  const compareItems = useSelector((state) => state.compare.compareData); 
  const dispatch = useDispatch();
  const cardData = useSelector((state) => state.products.data);

  
  useEffect(() => {
    dispatch(fetchProducts());

  }, [dispatch]);

  const btnData = [
    {
      text: "Ratings" ,
      value: "ratings" ,
      classText: "highlight"
    },
    {
      text: "Price low-High" ,
      value: "lowhigh" ,
      classText: " "
    },
    {
      text: "Newest First" ,
      value: "newfirst" ,
      classText: " "
    }
  ]

  const sortHandler = (val, index) => {
    setClickedItem(index);
    // sorting(val);
  }


  return (
    <React.Fragment>
      <main className="main">
        <div className="main-wrapper">
          <div className="filter-wrapper">
              <div className="home">HOME / MOBILES</div>
              <Filters />
          </div>

          <div className="card-container">
          
            <div className="strip">
              {/* <div className="home">HOME / MOBILES</div> */}
              {
                cardData && <div className="showing">
                Showing {cardData.length} results for phones
              </div>
              }
              
              <div className="sort-by">
                <span>Sort By</span>
                { btnData.map((btn, index)=> {
                  return (
                    <Button 
                      classText={clickedItem === index ? 'highlight' : null}
                      buttonText = {btn.text}
                      value = {btn.value}
                      handleClick = {()=> sortHandler(btn.value, index)}
                      key = {index}
                    />
                  )
                }) }
              </div>
          </div>
            <div className="card-inner-container">

             { cardData && cardData.map((card, id) => {
                return (
                  <Card
                    data={card}
                    altText={card.productName + card.id}
                    quantity={props.quantity}
                    addToWishList={props.addToWishList}
                    rmvFromWishList ={props.rmvFromWishList}
                    key = {id}
                  />
                );
              })}
            </div>

          </div>
        </div>
        <CompareCard compareItems={compareItems} />
      </main>
    </React.Fragment>
  );
};

export default Main;
