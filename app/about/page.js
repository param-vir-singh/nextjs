import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-7xl">AboutPage</h1>
      <Link href="/">Home Page</Link>
      <Link href="/about/info">Info Page</Link>
    </div>
  );
};

export default AboutPage;
