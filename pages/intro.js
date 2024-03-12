 import intro from '@/styles/scss/pages/intro.module.scss' 
 import Context from '@/context/context';
import { useContext} from 'react';  


const Intro = () => {  
  const { prefix } = useContext(Context);   
  
  return (  
    <section className={`${intro.intro_wrap} intro`}> 
      <div className='l-content'> 
        <div className={intro.intro_box}> 
          <div className={intro.intro_imgBox}> 
            <div className={intro.intro_imgBox_img}> 
              <img src={`${prefix}/images/common/mihye.jpg`} alt='미혜'/> 
            </div> 
          </div> 
          <div className={intro.intro_text}> 
            <h2>
              안녕하세요!<br/> 웹 퍼블리셔, 조미혜입니다.
            </h2> 
            <div>
              코드치는 것을 즐기며 적성에 잘 맞아 천직이라 생각하고 있습니다.
              <br/>
              <br/>
              React/Vue 등 프레임 워크 환경에서 컴포넌트 단위의 마크업 작업을 능숙하게 다룰 수 있으며,
              어디에서도 잘 보이는 반응형, 웹 접근성과 웹 표준을 고려한 웹 페이지를 그려낼 수 있습니다.
              <br/>
              <br/>
              맡은 일에 책임감을 갖고 일을 하며 팀원들과의 의사소통을 중요시 생각하여
              디자이너와 개발자 사이에서 원활하게 의사소통이 가능합니다.
            </div>  
            <div className={intro.intro_icon}> 
              <i className="icon"/>
              <span className={intro.intro_icon_txt}> scroll</span>
            </div>
          </div>
        </div>   
      </div>    
    </section> 
  
 )
}
export default Intro