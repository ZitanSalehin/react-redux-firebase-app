import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";

import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/tasks/AddTask";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function App() {
  return (
    // <BrowserRouter>
    
    //   <Routes>
    //     <Route path="/" element={<NavBar />}>
    //       <Route index element={< SignIn/>} />
    //       <Route path="/signin" element={<SignIn />} />
    //       <Route path="/signup" element={<SignUp />} />
          
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <>
    <ToastContainer/>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signout" element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
