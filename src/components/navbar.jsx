import { useEffect, useState, useRef } from 'react';
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Navbar() {
  const [header, setHeader] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  const scrollHeader = () => {
    if (window.scrollY >= 15) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader);
    window.addEventListener('resize', handleResize);

    handleResize(); // Check screen size on load

    return () => {
      window.removeEventListener('scroll', scrollHeader);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const renderMobileMenu = () => {
    if (isMobile) {
      return (
        <div className="flex flex-col mt-2 mb-2" ref={menuRef}>
          <button className="text-slate-900 font-normal" onClick={toggleMenu}>
            <IoMenu size={30} />
          </button>
          {menuOpen && (
            <div className="flex flex-col gap-5 px-2 rounded-lg bg-sky-100/90 relative top-20">
              <Link to="/" className="text-slate-900 font-normal">
                Home
              </Link>
              <Link to="/mision" className="text-slate-900 font-normal">
                Mision y Vision
              </Link>
              <Link to="/experience" className="text-slate-900 font-normal">
                Quien soy
              </Link>
              <Link to="/images" className="text-slate-900 font-normal">
                Herramientas de control
              </Link>
              <Link href="/contact" className="text-slate-900 font-normal">
                Contacto
              </Link>
            </div>
          )}
        </div>
      );
    }
  }

  return (
    <div className={header ? 'sticky top-0 h-20 mx-auto px-5 flex flex-col-2 items-center justify-center bg-sky-100' 
    : 'h-20 mx-auto bg-sky-100 flex flex-col-2 items-center justify-center px-5'}>
      <h3 className="text-xl basis-2/6 text-slate-900 font-semibold text-center place-self-center">Dr. Ramses</h3>
      <div className="flex flex-row py-5">
        {isMobile && renderMobileMenu()}
        {!isMobile && (
          <div className="flex gap-5 ">
            <Link to="/" exact activeClassName="active" onClick={() => scrollToRef(null)}>Home</Link>
            <Link to="/mision" activeClassName="active">Mision y Vision</Link>
            <Link to="/experience" activeClassName="active">Quien Soy</Link>
            <Link to="/images" activeClassName="active">Herramientas de Control</Link>
            <Link to="/contact" activeClassName="active">Contacto</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
