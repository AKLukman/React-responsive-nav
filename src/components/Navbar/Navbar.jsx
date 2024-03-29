import { useState } from "react";
import Link from "../Link/Link";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/service", name: "Service" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <nav className="tex-black p-6 bg-yellow-200">
      <div onClick={() => setOpen(!open)} className="md:hidden">
        {open === true ? (
          <IoClose className="text-2xl" />
        ) : (
          <FiMenu className="text-2xl" />
        )}
      </div>

      <ul
        className={`md:flex absolute md:static duration-1000 bg-yellow-200 
            ${open ? "top-16" : "-top-60"}
      px-6`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
