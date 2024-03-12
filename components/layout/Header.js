import header from '@/styles/scss/components/layout/header.module.scss'   
import { useCallback, useEffect, useRef, useState } from 'react'  
import navList from "@/pages/api/Nav.json" 
import { useRouter } from 'next/router'

const Header = ({type}) => { 
  const scrollThumb = useRef(null);
  const router = useRouter();
  const [fixed, setFixed] = useState("");
  const [black, setBlack] = useState("");
  const [menu, setMenu] = useState("");
    
  // 스크롤
  const handleScroll = useCallback(() => { 
    const y = window.scrollY; //스크롤
    const scrollT = scrollThumb.current; 
    const wHeight = window.innerHeight; // 윈도우 높이
    const dHeight = document.querySelector('body').offsetHeight; // 총 도큐먼트 높이
    let width = Math.ceil(((y + wHeight) / dHeight * 100 ) * 1.0);
    const hHeader = document.querySelector('.header').offsetHeight;
 
    if(scrollT) {
      scrollT.style.cssText = `
      position: absolute;
      display: inline-block;
      background: ${type === "white" ? "#000": "#fff"};
      width: ${width}%;
      height: 10px;
      transition: 0.8s ease-out;
    ` 
    }   

    if(type === "black" && scrollT) { 
      const pHeight = document.querySelector('.header p').offsetTop; 
      const hIntro = document.querySelector('.intro').offsetHeight; 
      if(y > pHeight) {
        setFixed(header["header_fixed"])
      }else{
        setFixed("")
      } 
      if(hHeader + hIntro <= y) {
        setBlack(header["header_black"]) 
        scrollT.style.cssText = `
        position: absolute;
        display: inline-block;
        background: #000;
        width: ${width}%;
        height: 10px;
        transition: 0.8s ease-out; 
      ` 
      }else {
        setBlack("") 
      } 
    } 
  },[type]) 
 
  const handleLink = useCallback((link) => { 
    const top = document.querySelector(`.${link}`).offsetTop; 
    window.scrollTo(0, top - 50); 
  },[])

  useEffect(() => {    
    console.log(type,"type")
    window.addEventListener('scroll', handleScroll);   
    return () => {  
      window.removeEventListener('scroll', handleScroll);   
    }
  },[handleScroll, type])

    return( 
      <>
        {
          (()=>{
            switch(type){
              case "black":
              return (
                <header className={`${header.header_wrap} ${fixed} ${black} header`}>
                  <div className={`${header.header_scrollbar} ${black}`}>
                      <span ref={scrollThumb} className={header.header_scrollThumb}></span>
                  </div> 
                  <h1 className={header.header_h1}> 
                    <p>CHOMIHYE</p>
                  </h1> 
                  <div className={header.header_nav}>
                    <button onClick={() => window.scrollTo(0, 0)}>
                      <p>CHOMIHYE</p>
                    </button>
                    <div className={`${header.header_menu} ${menu}`}>
                      <button onClick={() => setMenu(menu === "" ? header["header_menu_active"]:"")}>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                      <ul className={header.header_menu_ul}>
                        {
                          navList.map((item) => {
                          return(
                            <li key={item.id}>
                              <button onClick={() => {
                                handleLink(item.link)
                                setMenu(menu === "" ? header["header_menu_active"]:"")
                              }}>
                                {item.title}
                              </button> 
                            </li>
                          )
                          })
                        }
                      </ul>
                    </div>
                  </div>
                </header>
              )
              case "white":
              return (
                <header className={`${header.header_wrap} ${fixed} ${header[`header_${type}`]} header`}> 
                  <div className={`${header.header_scrollbar}`}>
                      <span ref={scrollThumb} className={header.header_scrollThumb}></span>
                  </div> 
                  <div className={header.header_nav}>
                    <button onClick={() => router.push("/")}>
                      <i className='icon'/>
                    </button>
                  </div>
                </header>   
              )

            }
          })()
        }
      </>
    )
}
export default Header