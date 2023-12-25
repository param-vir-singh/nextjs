import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-7xl">HomePage</h1>
      <Link href="/about">About Page</Link>
      <Link href="/about/info">Info Page</Link>
    </div>
  );
};

export default HomePage;
