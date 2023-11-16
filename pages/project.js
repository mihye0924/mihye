import project from '@/styles/scss/pages/project.module.scss'  
import RTitle from "@/components/common/RTitle"
import projectList from '@/pages/api/Project.json'
import Link from 'next/link'
import Context from '@/context/context';
import { useContext, useEffect } from 'react'


const Project = ({
    aboutHeight, 
    maqueeHeight 
  }) => {     
    const { prefix } = useContext(Context);

    // 마우스 커서 이벤트
    const handleCursor = () => {
        const mouseCursor = document.querySelector("#ball");  
        const project = document.querySelectorAll('#project ul > li')
        const plattes =['pink','red','orange','yellow']

        plattes.forEach((item,index) => { 
            project[index].addEventListener('mouseover',() => {
                mouseCursor.classList.add(plattes[index])
            })
            project[index].addEventListener('mouseout',() =>{
                mouseCursor.classList.remove(plattes[index])
            })
        })

    } 

    // 키보드 포커스 이벤트
    const handleFocus = () => {
        const project = document.querySelectorAll('#project ul > li')
        project.forEach((item) => { 
            item.addEventListener('focus', (e) => {     
                project.forEach((item) => {
                    if(item.classList.contains('active')) { 
                        item.classList.remove('active')
                    }
                })
                e.target.classList.add('active') 
            }) 
            item.addEventListener('keydown',(e) => { 
                if(e.key === 'Enter') {
                    const a = e.target.querySelector('a')
                    a.click()
                }
            })
        }) 
    } 
  
    // 스크롤 이벤트
    const handleScroll = () => {
        const y = window.scrollY
        const wHeight = window.innerHeight
        const bg = wHeight + aboutHeight + maqueeHeight + 100
        const project = document.querySelector('.project-bg')
         
        if( y > bg) { 
          project.style.cssText = `
          opacity: ${y/2500};
          background:#fff;
          `
        }else{ 
          project.style.cssText = `
          opacity: 1; 
          `
        } 
    } 

    useEffect(()=>{   
        window.addEventListener('scroll', handleScroll) 
        return(() => {  
            window.removeEventListener('scroll', handleScroll) 
            handleCursor()
            handleFocus()  
        })
    },[handleScroll]) 
    
    
    return(
        <section id="project" className={project.project_wrap}>
            <div className='project-bg'></div> 
            <div className="l-content">  
                <div className={project.project_box}> 
                    <RTitle 
                        aboutHeight={aboutHeight}
                        maqueeHeight={maqueeHeight}
                        mainTitle="Project" 
                        mainSubTitle="실력 향상!! <br/> 빠른 변화에 대응하기"
                        subTitle="WEB PUBLISHER"
                    />
                    <p className={project.project_box_mouse}>
                        <i className="arrow_down"/>
                        <span>이미지에 마우스를 올리면 프로젝트를 볼 수 있습니다.</span>
                    </p>
                    <ul className={`ul ${project.project_box_ul}`}>
                        {
                            projectList.map((item,index) => {
                            return(
                                <li 
                                    data-aos="zoom-in"
                                    data-aos-delay={`${500 * (index+1)}`}
                                    key={item.id}  
                                    tabIndex={0}
                                >
                                    <Link tabIndex={-1} href={item.link} target='_blank'>
                                        <img src={`${prefix}/${item.img}`} alt={item.title}/>
                                        <p>
                                            <span>{ item.title }</span>
                                            {
                                                item.test &&
                                                <span>{item.test}</span>
                                            }
                                        </p>
                                        <div className={project.project_box_ul_subbox}>
                                            <div> 
                                                <i className='arrow-icon' />
                                            </div>
                                            <div>
                                                <span>{item.title}</span>
                                            </div>
                                            <div>
                                                <span>{item.engTitle}</span>
                                            </div>
                                            <div href={item.link} > 
                                                <span> 
                                                    <i className='github-icon' />보러가기 
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                )
                            })
                        }
                    </ul>
                    <div className={project.project_box_button}> 
                        <button 
                            onClick={()=>{alert('준비중입니다.')}}
                        >
                            <span>더보기</span>
                        </button> 
                    </div>
                </div> 
            </div>   
        </section>
    )
}
export default Project