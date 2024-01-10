import Image from "next/image";
import Link from "next/link";

let url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const fetchData = async (id) => {
  const response = await fetch(`${url}${id}`);
  const data = await response.json();
  return data;
};

const SingleDrinksPage = async ({ params }) => {
  const data = await fetchData(params.id);
  console.log(data.drinks[0].strDrinkThumb);
  return (
    <div>
      <Link href="/drinks">Go Back</Link>
      <br />
      <h2>{data.drinks[0].strDrink}</h2>

      {/* the following tag is from the html */}
      <img src={data.drinks[0].strDrinkThumb}></img>

      {/* the below tag is provided by the nextjs to optimize the image 
      and make it small size so that it doesn't take long to load that image. */}
      {/* <Image src={data.drinks[0].strDrinkThumb} width="36 rem"></Image> */}
    </div>
  );
};

export default SingleDrinksPage;

// Image with src "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg" is missing required "width" property.
