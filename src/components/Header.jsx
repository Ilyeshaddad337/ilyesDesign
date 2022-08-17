
import { useState, useEffect } from 'react';
function Header() {
  const [mobile,setMobile] = useState(false);

  const handleWidth = (width) => {
    if (width < 650) {
      const nav = document.querySelector('nav');
      const ham = document.querySelector('div.hamburger');
      ham.classList.remove('hide')
      nav.classList.add('hide');
      setMobile(true)
    } else {

      const ham = document.querySelector('div.hamburger');
      setMobile(false)
      ham.classList.add('hide')

    }
  }
  const handleClick = () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('hide');
  }
  const handleNavClick = () => {
    if (mobile) {
      handleClick()
    }
  }
  const locationChanged = () => {
    console.log(window.location.hash);
    const aes = document.querySelectorAll('#header ul li a');
    aes.forEach (a => {
      a.classList.remove('active');
    })
    const link = document.querySelector(`#header ul li a[href="${window.location.hash}"]`);
    console.log(link);
    link.classList.add('active')
  }
  useEffect(() => {
    handleWidth(window.innerWidth);
    window.onhashchange = locationChanged;
    window.addEventListener('resize', e => {
      handleWidth(e.target.innerWidth)
    })
  })
  
  return (
    <div id='header'>
      <div className="container">
        <div className="logo comic-bold">
         <a href="#hero"><h2>Ilyes<span className="red">Haddad</span></h2></a>
        </div>
        <div className="hamburger hide">
          <i onClick={handleClick} className="fa-solid fa-bars"></i>
          </div>
        <nav className={mobile ? 'mobile': ''}>
          <ul >
            <li><a className="active" onClick={handleNavClick} href="#hero">Home</a></li>
            <li><a onClick={handleNavClick} href="#About">About</a></li>
            <li><a onClick={handleNavClick} href="#Portfolio">Portfolio</a></li>
            <li><a onClick={handleNavClick} href="#Contact">Contact</a></li>
          </ul>
        </nav>
      </div>
      <img src="./images/header-vect.png" alt="" className="header-vect" />
    </div>
  )
}

export default Header