import Link from "next/link";
import React from "react";

const InfoPage = () => {
  return (
    <div>
      <h1 className="text-7xl">InfoPage</h1>
      <Link href="/">HomePage</Link>
      <Link href="/about">AboutPage</Link>
    </div>
  );
};

export default InfoPage;
