import portfolio from '@/styles/scss/components/content/portfolio.module.scss'  
import RTitle from "@/components/common/RTitle"
import PortfolioList from '@/pages/api/Portfolio.json'
import Link from 'next/link'
import Context from '@/context/context';
import { useCallback, useContext, useEffect } from 'react' 
import { gsap } from '../../pages/_app'
import { handleCursor } from '@/js/cursor';
const Portfolio = () => {     
    const { prefix } = useContext(Context); 


    // 키보드 포커스 이벤트
    const handleFocus = useCallback(() => {
        const portfolio = document.querySelectorAll('.portfolio ul > li > a')
        portfolio.forEach((item) => { 
            item.addEventListener('focus', (e) => {     
                portfolio.forEach((item) => {
                    if(item.classList.contains('tabActive')) { 
                        item.classList.remove('tabActive')
                    }
                })
                e.target.classList.add('tabActive') 
            })  
        }) 
    },[])

    useEffect(()=>{   
        const active = document.querySelectorAll(".portfolio .active");
        active.forEach((item,index) => { 
        gsap.fromTo(active[index], {opacity: 0}, {
            y: -50, 
            opacity: 1, 
            duration: .5,  
            delay: .2  * index,
            ease: "power4.in",
            scrollTrigger: {
                trigger: item,
                start: '0 80%',
                end: '0 80%',
                scrub: 0,
                markers: true,
                toggleActions: 'play reverse none reverse'
            },
        })
        })
        handleCursor()
        handleFocus()  
    },[handleFocus]) 
    
    
    return(
        <section className={`${portfolio.portfolio_wrap} portfolio l-content`}>  
            <RTitle mainTitle="Portfolio" animate="active" />
            <div className={portfolio.portfolio_box}> 
                <ul className={`ul ${portfolio.portfolio_box_ul}`}>
                    {
                        PortfolioList.map((item) => {
                        return(
                            <li className='active' key={item.id} tabIndex="-1">
                                <Link className='tabActive' tabIndex="0" href={ `${prefix}/post/${item.id}` }>
                                    <p>{item.id}</p>
                                    <div className={portfolio.portfolio_box_ul_img}> 
                                        <img src={`${prefix}/${item.img}`} alt={item.title}/> 
                                    </div>
                                </Link>
                                <div className={portfolio.portfolio_box_ul_subbox}> 
                                    <span>{item.title}</span>
                                    <span>{item.category}</span> 
                                    {
                                        item.keywords.map((item2) => {
                                            return(
                                                <div className={portfolio.portfolio_box_ul_keywords} key={item2.id}>
                                                    <span># {item2.label1}</span>
                                                    <span># {item2.label2}</span>
                                                    <span># {item2.label3}</span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </li>
                            )
                        })
                    }
                </ul> 
            </div>  
        </section>
    )
}
export default Portfolio