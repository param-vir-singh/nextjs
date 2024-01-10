import SingleDrinksPage from "@/app/drinks/[id]/page";
import React from "react";

const DrinksList = ({ drink }) => {
  return (
    <div>
      {/* <h2>Drink List Page</h2> */}
      <p>{drink.strDrink}</p>
      <img src={drink.strDrinkThumb}></img>
    </div>
  );
};

export default DrinksList;
