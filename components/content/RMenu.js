import menu from '@/styles/scss/components/content/RMenu.module.scss'   
import navList from '@/pages/api/Nav'
import Link from 'next/link'
import { useEffect } from 'react'

const RMenu = ({
    setMenu
}) => {
    
    const handleFocus = (e) => {   
        const menu = document.querySelector("#menu")    
        if(menu) {
            const menuFocus = menu.querySelectorAll('button') 
            const firstFocusableEl = menuFocus[0]
            const lastFocusableEl = menuFocus[menuFocus.length - 1] 
            firstFocusableEl.focus() 
            menu.addEventListener('keydown', (e) => {
                if(e.key === 'Tab') {
                    if(document.activeElement === lastFocusableEl && !e.shiftKey) {
                        firstFocusableEl.focus()
                        e.preventDefault()
                    }else if(document.activeElement === firstFocusableEl && e.shiftKey) {
                        lastFocusableEl.focus() 
                        e.preventDefault()
                    }
                }
            })
        }else{
            const headerFocus = document.querySelector(`.header_header_button__ktHmm > button`) 
            headerFocus.focus()
        }
        
    }
    const handleCloseMenu = () => {
        const body = document.querySelector('body')
        setMenu(false)
        body.classList.remove('active')
    
    }

    useEffect(() => {
        return(() => {
            handleFocus()
            }
        )
    },[]) 
    
    return(
        <div id="menu" className={menu.menu_wrap}> 
            <div className={menu.menu_header}>
                <h1 className={menu.menu_header_h1}>
                    <Link tabIndex={-1} href="#" onClick={handleCloseMenu}><span>M</span>HYE</Link>
                </h1> 
                <div className={menu.menu_header_button}>
                    <button tabIndex={0} onClick={handleCloseMenu}>
                        <div>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
            </div>
            <div className={menu.menu_bg}>
                <div className={menu.menu_bg_div}>
                    <div></div> 
                </div>
                <div className={menu.menu_bg_div}>
                    <div></div> 
                </div>
                <div className={menu.menu_bg_div}>
                    <div></div> 
                </div>
            </div> 
            <div className={menu.menu_content}> 
                <div className={menu.menu_content_div}>
                    <div>
                        <p>
                            <span>
                                <b>M Hye </b>포트폴리오
                            </span>
                        </p>
                        <p>
                            <span>010-4775-5749</span>
                        </p> 
                        <button tabIndex={0}>
                            <span>이력서 보기</span>
                        </button> 
                    </div>
                </div>
                <div className={menu.menu_content_div}>
                    <ul>
                            {
                                navList.map((item) => {
                                    return(
                                        <li key={item.id} >
                                            <button tabIndex={0} onClick={() => {
                                                handleCloseMenu()
                                                window.location.href = `#${item.link}`
                                            }}>
                                                <span>{item.title}</span>
                                            </button>
                                        </li>
                                    )
                                })
                            }
                    </ul>
                </div>
                <div className={menu.menu_content_div}>
                </div>
            </div> 
        </div>
    )
}
export default RMenu