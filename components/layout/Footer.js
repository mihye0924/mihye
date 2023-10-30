 
import footer from '@/styles/scss/components/layout/footer.module.scss'
 
const Footer = () => { 
    return (
        <footer className={footer.footer_wrap}>
            <div className="l-content">
                <p>본 사이트는 상업적 목적이 아닌 개인포트폴리오 사이트로 제작되었습니다.
                    일부 이미지 및 폰트 등은 그 출처가 따로 있음을 밝힙니다.</p>
                <span>&copy;Copyright 2023. MIHYE. All rights reserved. </span>
            </div> 
        </footer>
    )
}
export default Footer