import { useCallback, useEffect } from 'react';
import Link from 'next/link'    
import Header from '@/components/layout/Header'
import Intro from '@/components/content/Intro' 
import About from '@/components/content/About' 
import Portfolio from '@/components/content/Portfolio'    
import Footer from '@/components/layout/Footer';
import all from '@/styles/scss/pages/cursor.module.scss'    
import { handleCursorMove } from "@/js/cursor.js"

export default function Home() {  

  // 본문 바로가기
  const handleKeyBoard = useCallback((e) => {
    const top = document.querySelector(`.about`).offsetTop; 
    if(e.code === 'Space') { 
      e.preventDefault()
      window.scrollTo(0, top - 50); 
    } 
  },[])
  
 
 

  useEffect(() => {  
    handleCursorMove()  
  },[])

  return (  
    <div id="smooth-wrapper">   
      <div id="smooth-content"> 
        <div className={all.all_cursor}>
          <div className="ball">
            <span>View Project</span>
          </div>
        </div>
        <div className={all.all_skip}>
          <Link href="#intro" onKeyDown={handleKeyBoard} className={all.all_link}>
            <span>콘텐츠 바로가기</span>
          </Link>
        </div> 
        <Header/>  
        <Intro/>  
        <About />
        <Portfolio /> 
        <Footer/> 
      </div>
    </div>  
  )
}