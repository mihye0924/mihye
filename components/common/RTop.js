import top from '@/styles/scss/components/common/top.module.scss'
import { useCallback, useEffect, useState } from 'react'

const RTop = () => {
  const [topActive, setTopActive] = useState('')  

  const handleScroll = useCallback(() => {   
    const y = window.scrollY //스크롤 
   
    if(y >= 600) {
      setTopActive(top['top_top_active'])
    }else{
      setTopActive('')
    }
  },[])
  
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