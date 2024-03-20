import { prefix } from '@/config/config';
import header from '@/styles/scss/components/layout/header.module.scss'   
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react'   
import navList from '@/pages/api/Nav.json'

const Header = ({type}) => {  
  const [menu, setMenu] = useState(false);
  const router = useRouter();
    
  
  const handleLink = useCallback((link) => { 
    const top = document.querySelector(`.${link}`) 
    if(router.asPath !== "/") {
      router.push(`/${link}`); 
      setMenu(false)
    }else{  
      window.scrollTo(0, top.offsetTop - 170); 
      setMenu(false) 
    }
  },[router])

  const handleMenu = useCallback(() => {
    const nav = document.querySelector('.nav');
    const focusableContent = document.querySelectorAll('.header nav button') 
    const menuBtn = document.querySelector('.header .menu button')  
    const lastFocusableElement = focusableContent[focusableContent.length - 1]; 
    nav.addEventListener("keydown", (e) => {
      let isTabPressed = e.key === 'Tab' || e.keyCode === 9; 
      if (!isTabPressed) {
        return;
      }
      if (e.shiftKey) {
        if(document.activeElement === menuBtn) {
          lastFocusableElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusableElement) { 
          menuBtn.focus();
          e.preventDefault();
        }
      }
    })
    setMenu(!menu)
  },[menu])
  

  useEffect(() => {  
  },[handleMenu])

    return(  
    <header className={`${header.header_wrap} header`}> 
      <div className={header.header_nav}>
        {
          type ==="prev" ? 
          <>
           <button className='prev' onClick={() => router.push('/')}>
            <img src={`${prefix}/images/common/icon_arrow_right.png`} alt='이전'/>
            </button>
          </>
          :
          <h1>
            <button onClick={() => window.scrollTo(0, 0)}>
            CHOMIHYE
            </button>
          </h1>
        }
        <div className={`menu ${header.header_menu} ${menu ? header["header_menu_active"]:""}`}>
          <p>Menu</p>
          <button onClick={handleMenu}>
            <span></span>
            <span></span> 
          </button>
          <div className={`${header.header_menu_nav} nav`}> 
            <nav>
              <ul>
                {
                  navList.map((item) => {
                    return(
                      <li tabIndex="-1" key={item.id}>
                        <button tabIndex="0" onClick={() =>handleLink(item.link)}>{item.title}</button>
                        <span>{item.title}</span>
                      </li>
                    )
                  })
                }
              </ul>
            </nav> 
          </div>
        </div>
      </div>
    </header>
    )
}
export default Header