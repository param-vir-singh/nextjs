import Link from "next/link";

const HomePage = () => {
  console.log("Home Page");
  console.log("This will be displayed in the server");
  console.log(
    "Nextjs treat all the pages as server page by default. \n",
    " - If we need to render the page as client page, then we need to explicitly mention 'use client' on the top of the jsx file"
  );
  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold">Next Js Tutorial</h1>
      <Link href="/client" className="btn btn-accent">
        Get Started
      </Link>
    </div>
  );
};

export default HomePage;
