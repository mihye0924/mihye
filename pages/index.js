import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link'   
import RLoading from '@/components/common/RLoading' 
import Header from '@/components/layout/Header'
import Intro from '@/pages/intro' 
import About from '@/pages/about' 
import Portfolio from '@/pages/portfolio'   
import RTop from '@/components/common/RTop';
import Footer from '@/components/layout/Footer';
import all from '@/styles/scss/pages/cursor.module.scss'
import content from '@/styles/scss/pages/content.module.scss'   

export default function Home() { 
  const [isLoading, setIsLoading] = useState(false) 
  

  // 본문 바로가기
  const handleKeyBoard = useCallback((e) => {
    const top = document.querySelector(`.about`).offsetTop; 
    if(e.code === 'Space') { 
      e.preventDefault()
      window.scrollTo(0, top - 50); 
    } 
  },[])
  
  // 마우스 커서 이벤트
  const handleCursor = useCallback(() => {
    const mouseCursor = document.querySelector(".ball");  
    const tag = document.querySelectorAll('button, a') 
    document.addEventListener("mousemove", (e) => {   
      mouseCursor.style.cssText = ` 
      left: ${e.clientX}px;
      top: ${e.clientY}px; 
      `; 
    });  
    tag.forEach((item) => {
      item.addEventListener("mouseover",() => { 
        mouseCursor.classList.add("scale")
      })
      item.addEventListener("mouseout",()=>{
        mouseCursor.classList.remove("scale")
      })
    })  
  },[])
    
 

  useEffect(() => { 
    handleCursor()  
  },[handleCursor])

  return (  
    <div>   
      <RLoading 
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
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
      <Header type="black"/>  
      <Intro/> 
      <div className={`${content.content_wrap} wave`}></div> 
      <About />
      <Portfolio />  
      <RTop />
      <Footer/> 
    </div>  
  )
}