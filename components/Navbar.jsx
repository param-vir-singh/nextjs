import Link from "next/link";

const Links = [
  { path: "/", content: "Home" },
  { path: "/about", content: "About" },
  { path: "/about/info", content: "Info" },
  { path: "/client", content: "Client" },
  { path: "/drinks", content: "Drinks" },
  // { path: "/prisma-example", content: "Prisma example" },
  { path: "/query", content: "Query" },
];

const Navbar = () => {
  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
        <Link href="/" className="btn btn-primary">
          NextJs
        </Link>
        <ul className="menu menu-horizontal md:ml-8">
          {Links.map((link) => {
            return (
              <li key={link.path}>
                <Link className="capitalize" href={link.path}>
                  {link.content}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
