

import { createBrowserRouter, RouterProvider, useLoaderData} from "react-router-dom";
import Contact from "./contact";
import { Outlet, Link } from "react-router-dom";


const router = createBrowserRouter([
 {
 path: "/",
 element: < Contact/>,
 },
 ]);


function About() {
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
export default About;