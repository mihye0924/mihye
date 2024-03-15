 import intro from '@/styles/scss/components/content/intro.module.scss' 
 import Context from '@/context/context';
import { useCallback, useContext, useEffect, useState} from 'react';   

const Intro = () => {  
  const { prefix } = useContext(Context);  
  const [on, setOn]= useState(false)  
  
  const handleText = useCallback(() => {
    setOn(!on)
  },[on])
  useEffect(() => {
    window.addEventListener('DOMContentLoaded', handleText)
    return () => window.removeEventListener('DOMContentLoaded', handleText)
  },[handleText])
  return (  
    <section className={`${intro.intro_wrap} intro`}> 
      <div className={intro.intro_txtbox}>
        <svg className={intro.intro_subtxt}> 
          <text className={intro["intro_subtxt_on"]} x="50%" y="90%" textAnchor="middle" >Publisher</text>
        </svg>
        <div className={intro.intro_maintxt}>
          <span className={intro.intro_maintxt_inner}>
            진정한 나를 알리다
          </span> 
          <span className={`${intro.intro_maintxt_txtleft} ${intro.intro_maintxt_anitxt}`}>
            <span>진정한 나를 알리다</span>  
          </span> 
          <span className={`${intro.intro_maintxt_txtright} ${intro.intro_maintxt_anitxt}`}>
            <span>진정한 나를 알리다</span>  
          </span>
        </div> 
        <div className={`${intro.intro_image} ${intro["intro_image_on"]}`}>
          <img src={`${prefix}/images/common/mihye.png`} alt="circle"/>
          <span>웹 퍼블리셔</span>
          <span>1년차 조미혜</span>
        </div>
      </div>   
      <div className={intro.intro_circle}>
        <img src={`${prefix}/images/common/circle.svg`} alt="circle"/>
      </div>
      <div className={intro.intro_linebox}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span> 
      </div>  
    </section> 
  
 )
}
export default Intro