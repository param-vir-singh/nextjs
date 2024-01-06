const SingleDrinksPage = ({ params }) => {
  if (params.id) {
    console.log(params.id);
  }

  return <div>Single Drinks Page</div>;
};

export default SingleDrinksPage;
