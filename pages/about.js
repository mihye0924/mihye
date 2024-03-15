import About from '@/components/content/About'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header' 
import content from "@/styles/scss/pages/content.module.scss"

export default function AboutPage() {
  return ( 
    <div className={content.content}>
        <Header type="prev" />
        <About/>
        <Footer />
    </div>
  )
}
 