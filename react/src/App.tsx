import { HashRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Menu from './components/Menu';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import Logo from './assets/shared/logo.svg';
import './App.css'

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const getPageClass = () => {
    if (location.pathname.includes('Home')) return 'page-home';
    if (location.pathname.includes('Destination')) return 'page-destination';
    if (location.pathname.includes('Crew')) return 'page-crew';
    if (location.pathname.includes('Technology')) return 'page-technology';
    return '';
  };

  return (
    <div className={`app ${getPageClass()}`}>
      {children}
    </div>
  );
}


function App() {
  return (
    <Router>
      <Layout>
        <header className="flex justify-between items-center lg:py-5">
          <img src={Logo}  className="m-10"/>
          <div className="absolute left-[168px] right-[660px] -translate-y-1/2 bg-[#979797] h-[1px] z-20 hidden lg:block"></div>
          <Menu />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/Home" />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Destination" element={<Destination />} />
            <Route path="/Crew" element={<Crew />} />
            <Route path="/Technology" element={<Technology />} />
          </Routes>
        </main>
      </Layout>
    </Router>
  );
}

export default App