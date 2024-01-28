import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
const Navigation = () => {
  return (
    <nav className="py-12">
      <div className="container flex items-center justify-between">
        <Link className="logo" to="/">
          <img src={logo} alt="Crown logo" className="" />{" "}
        </Link>
        <ul className="flex items-center gap-4">
          <Link>
            <a className="uppercase" href="">
              shop
            </a>
          </Link>
          <li>
            <Link className="uppercase" href="">
              contact
            </Link>
          </li>
          <li>
            <Link className="uppercase" href="">
              sign in
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
