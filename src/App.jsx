import { Outlet, NavLink } from "react-router-dom";
import './App.css';



function App() {
  return (
    <>
      <div className='flex h-[90vh] text-text font-space-mono text-lg tracking-tighter lg:ml-20'>
        <div className="flex flex-col m-auto mt-5 lg:mt-[15vh] lg:gap-28 lg:flex-row max-w-3xl ">
          <div className="flex justify-center lg:flex-start mb-16 lg:mb-0">
            {/* Nav */}
            <ul className='fixed flex m-auto items-end justify-center gap-6 lg:flex-col lg:gap-3 mt-0 lg:mt-14'>
              <li><NavLink style={({ isActive }) => ({
                color: isActive ? '#818dc7' : '#1c2554'
              })} to={``}>Home</NavLink></li>

              <li><NavLink style={({ isActive }) => ({
                color: isActive ? '#818dc7' : '#1c2554'
              })} to={`about`}>About</NavLink></li>


              <li><NavLink style={({ isActive }) => ({
                color: isActive ? '#818dc7' : '#1c2554'
              })} to={`projects`}>Projects</NavLink></li>


              <li><NavLink style={({ isActive }) => ({
                color: isActive ? '#818dc7' : '#1c2554'
              })} to={`resume`}>Resume</NavLink></li>
            </ul>
          </div>
          <div className="lg:w-[600px]">
            <Outlet />
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
