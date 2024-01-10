import React from "react";
import { resolve } from "styled-jsx/css";
import error from "./error";
import DrinksList from "@/components/DrinksList";
import Link from "next/link";

const uri = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchData = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 4000));
  // const response = await fetch(uri);
  // const data = await response.json();
  // return data;
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 4000);
  });
  const response = await fetch(uri);

  if (!response.ok) {
    throw new Error("next js error thrown by drinks page - PS");
  }

  const data = await response.json();
  return data;
};

const DrinksPage = async () => {
  const data = await fetchData();
  const drinks = data.drinks;
  console.log(drinks[0].strDrink);
  // console.log(data.drinks[0].strInstructions, data.drinks[0].strInstructionsES);
  return (
    <>
      <div className="text-7xl">DrinksPage</div>
      <ul>
        {drinks.map((drink) => {
          return (
            <li key={drink.idDrink}>
              <Link
                href={`/drinks/${drink.idDrink}`}
                // content={drink.strInstructions}
              >
                <DrinksList drink={drink} key={drink.idDrink}></DrinksList>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* <DrinksList drink={data.drinks[0]}></DrinksList> */}
    </>
  );
};

export default DrinksPage;
