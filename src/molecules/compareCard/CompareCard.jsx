import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CompareCard = ({ compareItems }) => {
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [compareCard, setCompareCard] = useState(
    compareItems.length > 0 &&
    compareItems.map((item, index) => {
      
      return (
        <div className="compare-card">
            <img classname="compare-card-img" src={item.imageSrc} alt="phone" />
            <div>{item.productName}</div>
          </div>
        );
      })
      );

      const [comp, setComp] = useState([]);
      useEffect(() => {
        setComp(compareItems);
      }, [compareItems]);

      const loadCards = () => {
        
      }
      
      
  return (
    <div>
      <Carousel responsive={responsive}>{compareCard}</Carousel>
    </div>
  );
};

export default CompareCard;
