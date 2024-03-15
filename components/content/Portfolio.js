import portfolio from '@/styles/scss/components/content/portfolio.module.scss'  
import RTitle from "@/components/common/RTitle"
import PortfolioList from '@/pages/api/Portfolio.json'
import Link from 'next/link'
import Context from '@/context/context';
import { useCallback, useContext, useEffect } from 'react' 
import { gsap } from '../../pages/_app'
import { handleCursor } from '@/pages/js/cursor';
const Portfolio = () => {     
    const { prefix } = useContext(Context); 


    // 키보드 포커스 이벤트
    const handleFocus = useCallback(() => {
        const portfolio = document.querySelectorAll('.portfolio ul > li > a')
        portfolio.forEach((item) => { 
            item.addEventListener('focus', (e) => {     
                portfolio.forEach((item) => {
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
    },[])

    useEffect(()=>{   
        const active = document.querySelectorAll(".portfolio .active");
        active.forEach((item) => { 
        gsap.fromTo(item, {opacity: 0}, {
            y: -50, 
            opacity: 1, 
            duration: .5,  
            ease: "power4.in",
            scrollTrigger: {
            trigger: item,
            start: '-50px center',
            end: '-50px center',
            scrub: 0,
            toggleActions: 'play reverse none reverse'
            },
        })
        })
        handleCursor()
        handleFocus()  
    },[handleFocus]) 
    
    
    return(
        <section className={`${portfolio.portfolio_wrap} portfolio`}> 
            <RTitle mainTitle="Portfolio" animate="active" />
            <div className="l-content">  
                <div className={portfolio.portfolio_box}> 
                    <ul className={`ul ${portfolio.portfolio_box_ul}`}>
                        {
                            PortfolioList.map((item,index) => {
                            return(
                                <li  
                                    key={item.id}  
                                    tabIndex={0}
                                    className='active'
                                >
                                    <Link tabIndex={-1} href={ `/post/${item.id}` }>
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
            </div>   
        </section>
    )
}
export default Portfolio