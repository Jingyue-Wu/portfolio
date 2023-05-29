import './App.css';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';

function App() {
  return (
    <>
      <div className='flex h-[90vh] text-text font-space-mono text-lg tracking-tighter'>
        <div className="flex flex-col m-auto mt-[15vh] gap-20 lg:flex-row max-w-3xl">
          <div>
            {/* Nav */}
            <ul  className='flex m-auto items-end justify-center gap-6 lg:flex-col lg:gap-3 mt-14 '>
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Hobbies</li>
              <li>Resume</li>
            </ul>
          </div>
          <div>
            <Home />
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
