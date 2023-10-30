import top from '@/styles/scss/components/common/top.module.scss'
import { useEffect, useState } from 'react'

const RTop = ({
  aboutHeight,
  maqueeHeight
}) => {
  const [topActive, setTopActive] = useState('')  

  const handleScroll = () => {   
    const y = window.scrollY //스크롤
    const wHeight = window.innerHeight // 윈도우 높이
    const bg = wHeight + aboutHeight + maqueeHeight
   
    if(y >= 800) {
      setTopActive(top['top_top_active'])
    }else{
      setTopActive('')
    }
    
    if(y > bg) { 
      setTopActive(top['top_top_bg'])
    }
  }  
  
  useEffect(() => {      
    window.addEventListener('scroll', handleScroll);  
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up 
    }; 
  },[handleScroll])

    return( 
    <div id="top" className={`${top.top_top} ${topActive}`}>
        <button onClick={() => { window.scrollTo(0,0)}}>TOP</button>
      </div>
    )

}
export default RTop