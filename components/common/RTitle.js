import title from '@/styles/scss/components/common/title.module.scss'
import parse from 'html-react-parser';
import { useEffect, useState } from 'react'

const RTitle = ({
        aboutHeight,
        maqueeHeight,
        mainTitle,
        subTitle,
        mainSubTitle
    }) => {
    const [titleActive, setTitleActive] = useState('') 

           // 스크롤 이벤트
    const handleScroll = () => { 
        const y = window.scrollY
        const wHeight = window.innerHeight
        const bg = wHeight + aboutHeight + maqueeHeight  
          
        if( y > bg) {  
            setTitleActive(title['title_active'])
        }else{  
            setTitleActive('')
        } 
    } 

    useEffect(()=>{   
        window.addEventListener('scroll', handleScroll) 
        return(() => {  
            window.removeEventListener('scroll', handleScroll)  
        })
    },[handleScroll]) 

    return(
        <div className="l-content">
            <div className={`${title.title_h1} ${titleActive}`}>
                <div>
                    <h1>{mainTitle}</h1>
                    {parse(`<p>${mainSubTitle}</p>`)}
                </div>
                <span>{subTitle}</span> 
            </div>
      </div>
    )
}
export default RTitle