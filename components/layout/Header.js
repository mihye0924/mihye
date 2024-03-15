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
      window.scrollTo(0, top.offsetTop - 50); 
      setMenu(false) 
    }
  },[router])

  useEffect(() => {      
  },[])

    return(  
    <header className={`${header.header_wrap} header`}> 
      <div className={header.header_nav}>
        {
          type ==="prev" ? 
          <>
           <button onClick={() => router.push('/')}>
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
        <div className={`${header.header_menu} ${menu ? header["header_menu_active"]:""}`}>
          <p>Menu</p>
          <button onClick={() => setMenu(!menu)}>
            <span></span>
            <span></span> 
          </button>
          <div className={header.header_menu_nav}> 
            <nav>
              <ul>
                {
                  navList.map((item) => {
                    return(
                      <li key={item.id}>
                        <span>{item.title}</span>
                        <button onClick={() =>handleLink(item.link)}>{item.title}</button>
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