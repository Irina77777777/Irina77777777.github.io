import BlogInfo from "./BlogInfo";
function Header() {

    
  return (
      <div className="border-b-2 border-indigo-600 mb-5 flex justify-between text-sm">
          <div className="text-indigo-600 flex items-center pb-2 pr-2 uppercase">
              <a href="#" className="font-semibold inline-block">
                  <BlogInfo />
              </a>
          </div>
          <a href="#" className="text-1xl">
              See All
          </a>
      </div>
  );

}
export default Header;
