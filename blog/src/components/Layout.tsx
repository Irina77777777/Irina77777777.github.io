
import Header from "./Header";

function Layout({ children }) {
 return (
 <div className="max-w-screen-xl mx-auto p-1">
 <Header />
 <main>{children}</main>
 </div>
 ); }

export default Layout