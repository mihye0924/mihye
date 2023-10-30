import navList from '@/pages/api/Nav.json'
import nav from '@/styles/scss/components/layout/nav.module.scss' 
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
const Nav = ({  
  aboutHeight,
  maqueeHeight,
  careerHeight,
  projectHeight,
  contactHeight
}) => {  
  const [active, setActive] = useState(1)   
  const [bgActive, setBgActive] = useState('') 
  const router = useRouter() 


  // 스크롤 이벤트
  const handleScroll = () => {  
    const y = Math.ceil(window.scrollY) // 스크롤 
    const wHeight = window.innerHeight // 윈도우 높이 
    const intro = aboutHeight + maqueeHeight
    const career = aboutHeight + maqueeHeight + careerHeight  
    const project = aboutHeight + maqueeHeight + careerHeight + projectHeight // 마지막 계산해야함.
    const contact = aboutHeight + maqueeHeight + careerHeight + projectHeight + contactHeight
    const bg = wHeight + aboutHeight + maqueeHeight
 

    // 스크롤 번째 체크
    if(y < intro){
      setActive(1) 
    }else if( intro < y + wHeight && y + wHeight <= career) {
      setActive(2)
    }else if( career < y + wHeight && y + wHeight <= project ) {
      setActive(3)
    }else if( project < y + wHeight && y + wHeight <= contact ) {
      setActive(4)
    } 

    if(y > bg) { 
      setBgActive(nav['nav_yellow'])
    }else{
      setBgActive('')
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
    return(() => {
      window.removeEventListener('scroll', handleScroll)
    }) 
  },[handleScroll])
  
  return ( 
    <aside className={`${nav.nav_wrap} ${bgActive}`}> 
        <ul>
          { 
            navList.map((item) => (
              <li key={item.id} className={item.id === active ? nav['nav_active'] : ""}>
                <button onClick={() => { router.push(`#${item.link}`)}}>
                </button> 
              </li>
            ))
          }
        </ul> 
    </aside>
  )
}
export default Nav