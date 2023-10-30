import About from './about'
import Career from './career'
import Project from './project' 
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Maquee from '@/components/Maquee' 
import Nav from '@/components/layout/Nav';  
import RLoading from '@/components/common/RLoading' 
import RTop from '@/components/common/RTop'
import all from '@/styles/scss/content/content.module.scss'
import Link from 'next/link' 
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import Contact from './contact' 
import RMenu from '@/components/content/RMenu'

export default function Home() { 
  const [isLoading, setIsLoading] = useState(false) // Loading 
  const [aboutHeight, setaboutHeight] = useState() //intro높이
  const [maqueeHeight, setMaqueeHeight] = useState() //maquee높이
  const [careerHeight, setCareerHeight] = useState() //career높이
  const [projectHeight, setProjectHeight] = useState() //project높이
  const [contactHeight, setContactHeight] = useState()  //contact높이
  const [Menu, setMenu] = useState(false)
  
  // 본문 바로가기
  const handleKeyBoard = (e) => {
    if(e.code === 'Space') { 
      e.preventDefault()
      window.scrollTo(0, 0)   
      window.location.href="#about"
    } 
  } 
  
  // 마우스 커서 이벤트
  const handleCursor = () => {
    const mouseCursor = document.querySelector("#ball");  
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
  }  
 

  useEffect(() => {
    AOS.init() 
    const aboutHeight = document.getElementById('about').offsetHeight;  
    const maqueeHeight = 180
    const careerHeight = document.getElementById('career').offsetHeight;
    const projectHeight = document.getElementById("project").offsetHeight
    const contactHeight = document.getElementById("contact").offsetHeight  
    setaboutHeight(aboutHeight)
    setMaqueeHeight(maqueeHeight)
    setCareerHeight(careerHeight)
    setProjectHeight(projectHeight)
    setContactHeight(contactHeight) 
    handleCursor() 
  },[])

  return (  
    <div>   
      <RLoading 
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <div className={all.all_cursor}>
        <div id='ball'>
          <span>View Project</span>
        </div>
      </div>
      <div className={all.all_skip}>
        <Link href="#about" onKeyDown={handleKeyBoard} className={all.all_link}>
          <span>콘텐츠 바로가기</span>
        </Link>
      </div> 
      <Header
        aboutHeight={aboutHeight}
        maqueeHeight={maqueeHeight} 
        setMenu= {setMenu} 
      /> 
      <Nav 
          aboutHeight={aboutHeight}
          maqueeHeight={maqueeHeight}
          careerHeight={careerHeight}
          projectHeight={projectHeight}
          contactHeight={contactHeight}
        /> 
      <About/>
      <Maquee/>
      <Career 
        aboutHeight={aboutHeight}
        maqueeHeight={maqueeHeight} 
      />
      <Project 
        aboutHeight={aboutHeight}
        maqueeHeight={maqueeHeight} 
      />  
      <Contact
        aboutHeight={aboutHeight}
        maqueeHeight={maqueeHeight} 
      />
      <RTop
        aboutHeight={aboutHeight}
        maqueeHeight={maqueeHeight} 
      />
      <Footer/>
      {
        Menu && 
        <RMenu  
          setMenu= {setMenu} 
        />  
      } 
    </div>  
  )
}