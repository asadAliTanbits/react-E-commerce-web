import React, { useState, useEffect } from "react";
import ProductCards from "./ProductCards";
import SectionTitle from "../GlobalComponents/SectionTitle";
import Button from "../GlobalComponents/Button";
import { useParams } from "react-router-dom";

const ProductSection = () => {
  // Fetch Data from Api
  const [items, setItems] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const jsonData = await response.json();
      setItems(jsonData);
    };

    fetchData();
  }, [productId]);

  const handleShowMoreClick = () => {
    setShowAll(true);
  };

  const displayedItems = showAll ? items : items.slice(0, 8);

  return (
    <section className="flex flex-wrap justify-center m-6" id="products">
      <SectionTitle title="Our Products" />

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 mx-10 overflow-hidden">
        {displayedItems.map((item, index) => (
          <ProductCards
            key={index}
            productId={item.id}
            imgUrl={item.image}
            title={item.title}
            category={item.category}
            price={item.price}
            rating={item.rating.rate}
          />
        ))}
      </div>

      {items.length > 8 && (
        <div>
          <button
            onClick={handleShowMoreClick}
            className="bg-[#FFFFFF] text-[#B88E2F] shadow font-bold py-4 px-10 rounded m-2"
          >
            Show more
          </button>
          {/* <Button title="Show More" onClick={handleShowMoreClick} /> */}
        </div>
      )}
    </section>
  );
};

export default ProductSection;
