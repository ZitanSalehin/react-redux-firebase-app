import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { connect } from "react-redux";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Task manager app
      </Link>
      <ul>
      
        <CustomLink to="/signin">Sign In</CustomLink>
        <CustomLink to="/signout">Sign Out</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}


const mapStateToProps = (state) => {
  console.log(state);
};

connect(mapStateToProps)(Navbar);