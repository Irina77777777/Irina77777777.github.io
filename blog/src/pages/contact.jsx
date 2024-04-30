
  import { createBrowserRouter, RouterProvider, useLoaderData} from "react-router-dom";

import About from "./about";
import { Outlet, Link } from "react-router-dom";


const router = createBrowserRouter([
 {
 path: "/",
 element: < About/>,
 },
 ]);

function Contact() {
    return (
            <>
            <nav>
 <ul>
     <li><Link to={`about`}>About</Link></li>
     <li><Link to={`contact`}>Contact</Link></li>
                </ul>
                  <div id="ring"><Outlet /></div>
 </nav>

        </>
    );
}
export default Contact;