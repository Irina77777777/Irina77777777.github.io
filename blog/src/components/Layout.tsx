
import Header from "./Header";
function Layout ()  {
    return (
        <div>
            <Header />
            <main>{"children"}</main>
        </div>
    );
}
export default Layout