import {useEffect, useState } from 'react';


function Navbar() {
  const [header, setHeader] = useState('false');
  const scrollHeader = () => {
    if (window.scrollY >= 10) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader);
    return () => {
      window.removeEventListener('scroll', scrollHeader);
    }
  }
  , []);


  return (
    <div className= {header ? "sticky top-0 h-20 mx-auto px-5 flex-col gap-10 bg-sky-100" :
     "h-20 mx-auto px-5 bg-sky-100"}>
      <div className="flex flex-row items-center py-5 content-center"> 
        <h3 className="text-xl basis-1/2  text-slate-900 font-semibold text-center ">Dr. Ramses </h3> 
        <div className="flex basis-1/2 gap-5 self-center">
          <a href="#" className="text-slate-900 font-normal">Home</a>
          <a href="#" className="text-slate-900 font-normal">About</a>
          <a href="#" className="text-slate-900 font-normal">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
