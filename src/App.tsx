import { useEffect, useState } from 'react';
import style from './App.module.scss';
import Navbar from './components/Navbar';
import Principal from './pages/Principal';
import Hello from './pages/Hello';
import Tech from './pages/Tech';
import Project from './pages/Projects';
import Form from './pages/Form';
function App() {

  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  
  useEffect(() => {
    function handleScroll(): void {
      const principalElement = document.querySelector(`.${style.Principal}`) as HTMLElement;
      const principalBottom: number = principalElement.getBoundingClientRect().bottom;
      const navbarElement = document.querySelector(`.${style.Navbar}`) as HTMLElement;
      if (principalBottom <= 0) {
        setShowNavbar(true);
        navbarElement.classList.add(style.NavbarVisible);
      } else {
        setShowNavbar(false);
        navbarElement.classList.remove(style.NavbarVisible);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  function handleMenuItemClick(componentName: string): void {
    const componentElement = document.querySelector(`.${style[componentName]}`) as HTMLElement;
    componentElement.scrollIntoView({ behavior: 'smooth' });
  }
  
  return (
    <div className={style.App}>
      <div className={showNavbar ? style.NavbarVisible : style.Navbar}>
        <Navbar onItemClick={handleMenuItemClick} />
      </div>
      <div className={style.Principal}>
        <Principal />
      </div>
      <div className={style.Hello}>
        <Hello />
      </div>
      <div className={style.Tech}>
        <Tech />
      </div>
      <div className={style.Projects}>
        <Project />
      </div>
      <div className={style.Form}>
        <Form />
      </div>
    </div>
  )
}

export default App
