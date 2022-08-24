import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className='d-flex justify-content-center'>
        
            <Link to="/"> <h3 className="p-4">Navbar</h3> </Link>

          
            <Link to="/signin"> <h3 className="p-4">SignIn</h3> </Link>
         
            <Link to="/signup"> <h3 className="p-4">SignUp</h3> </Link>

            
          
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;