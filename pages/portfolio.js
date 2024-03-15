import Portfolio from "@/components/content/Portfolio"
import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import content from "@/styles/scss/pages/content.module.scss" 
import all from '@/styles/scss/pages/cursor.module.scss'
import { useEffect } from "react"
import { handleCursorMove } from "@/pages/js/cursor"

export default function PortfolioPage() {    
    useEffect(() => {  
      handleCursorMove()  
      },[])
    
  return (
    <div className={content.content}>
        <div className={all.all_cursor}>
          <div className="ball">
            <span>View Project</span>
          </div>
        </div>
        <Header type="prev" />
        <Portfolio/>
        <Footer />
    </div>
  )
}
 