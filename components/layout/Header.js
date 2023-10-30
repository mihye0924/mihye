import header from '@/styles/scss/components/layout/header.module.scss'  
import Link from 'next/link'
import navList from '@/pages/api/Nav'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'


const Header = ({
  aboutHeight,
  maqueeHeight,
  setMenu
}) => { 
  const scrollThumb = useRef()    
  const [bgActive, setBgActive] = useState('')
  const router = useRouter() 
    
  // 스크롤
  const handleScroll = () => {   

   const y = window.scrollY //스크롤
   const scrollT = scrollThumb.current 
   const wHeight = window.innerHeight // 윈도우 높이
   const dHeight = document.querySelector('body').offsetHeight // 총 도큐먼트 높이
   let width = Math.ceil(((y+wHeight) / dHeight*100) * 1.0) 
   
    scrollT.style.cssText = `
     position: absolute;
     display: inline-block;
     background: rgb(255 220 34);
     width: ${width}%;
     height: 10px;
     transition: 0.8s ease-out;
   `   

    //  헤더 배경 흰색
    if(y > 10) {
      setBgActive(header['header_bg'])
    }else {
      setBgActive('')
    }    
  }
 
 const handleOpenMenu = () => {
  const body = document.querySelector('body')
  body.classList.add('active')
  setMenu(true)
 }
 useEffect(() => {    
    window.addEventListener('scroll', handleScroll);   
    return () => {  
      window.removeEventListener('scroll', handleScroll); //clean up  
    }; 
  },[handleScroll])

    return( 
      <header id="header" className={`${header.header_wrap} ${bgActive}`}>
            <div className={header.header_scrollbar}>
                <span ref={scrollThumb} className={header.header_scrollThumb}></span>
            </div> 
            <div className={header.header_box}>
              <h1 className={header.header_h1}>
                  <Link href="#"><span>M</span>HYE</Link>
              </h1>
              <ul className={header.header_ul}>
                {
                  navList.map((item) => {
                  return(
                    <li key={item.id}>
                      <button onClick={() => { router.push(`#${item.link}`)}}>
                        {item.title}
                      </button> 
                    </li>
                  )
                  })
                }
              </ul> 
              <div className={header.header_button}>
                <button onClick={handleOpenMenu}></button>
              </div>
            </div>
      </header>
    )
}
export default Header