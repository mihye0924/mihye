import maquee from '@/styles/scss/components/maquee.module.scss'
import Marquee from "react-fast-marquee";
const Maquee = () => {
    return(
        <section>
            <Marquee className={maquee.maquee_wrap} speed={150} pauseOnHover={true}>
                <span>I&rsquo; M</span> 
                <span>WEB</span>
                <span>PUBLISHER</span>
            </Marquee>
        </section>
    )
}
export default Maquee