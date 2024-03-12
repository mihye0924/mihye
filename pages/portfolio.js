import portfolio from '@/styles/scss/pages/portfolio.module.scss'  
import RTitle from "@/components/common/RTitle"
import PortfolioList from '@/pages/api/Portfolio.json'
import Link from 'next/link'
import Context from '@/context/context';
import { useCallback, useContext, useEffect } from 'react'
import { useRouter } from 'next/router';


const Portfolio = () => {     
    const { prefix } = useContext(Context);
    const router = useRouter();

    // 마우스 커서 이벤트
    const handleCursor = useCallback(() => {
        const mouseCursor = document.querySelector(".ball");  
        const portfolio = document.querySelectorAll('.portfolio ul > li > a')
        const plattes = ['green','orange','pink','red','yellow']

        plattes.forEach((item,index) => { 
            portfolio[index].addEventListener('mouseover',() => {
                mouseCursor.classList.add(plattes[index])
            })
            portfolio[index].addEventListener('mouseout',() =>{
                mouseCursor.classList.remove(plattes[index])
            })
        })

    },[])

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
        handleCursor()
        handleFocus()  
    },[handleCursor, handleFocus]) 
    
    
    return(
        <section className={`${portfolio.portfolio_wrap} portfolio`}> 
            <RTitle mainTitle="Portfolio" /> 
            <div className="l-content">  
                <div className={portfolio.portfolio_box}> 
                    <ul className={`ul ${portfolio.portfolio_box_ul}`}>
                        {
                            PortfolioList.map((item,index) => {
                            return(
                                <li  
                                    key={item.id}  
                                    tabIndex={0}
                                >
                                    <Link tabIndex={-1} href={ `/post/${item.id}` }>
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
                                                            <span className={item2.label1}>{item2.label1}</span>
                                                            <span className={item2.label2}>{item2.label2}</span>
                                                            <span className={item2.label3}>{item2.label3}</span>
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