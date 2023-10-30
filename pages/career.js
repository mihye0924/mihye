import career from '@/styles/scss/pages/career.module.scss' 
import RCareerSwiper from '@/components/content/RCareerSwiper' 
import RTitle from '@/components/common/RTitle' 
import { useEffect } from 'react'

const Career = ({
  aboutHeight, 
  maqueeHeight 
}) => {     
  
  // 스크롤 이벤트
  const handleScroll = () => {
      const y = window.scrollY
      const wHeight = window.innerHeight
      const bg = wHeight + aboutHeight + maqueeHeight + 100
      const career = document.querySelector('.career-bg') 

      if( y > bg) { 
        career.style.cssText = `
        opacity: ${y/2500}; 
        background:#fff;
        `
      }else{ 
        career.style.cssText = `
        opacity: 1; 
        `
      } 
  }

  useEffect(()=>{  
      window.addEventListener('scroll', handleScroll)
      return(() => { 
          window.removeEventListener('scroll', handleScroll) 
      })
  },[handleScroll]) 
   
  return(
      <section id='career' className={career.career_wrap}> 
        <div className='career-bg'></div> 
        <RTitle mainTitle="Career" mainSubTitle="값진 경험과 노하우를 <br> 쌓은 커리어" subTitle="Front-End Develop" /> 
        <RCareerSwiper />   
      </section>
  )
}
export default Career