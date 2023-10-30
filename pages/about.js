 import about from '@/styles/scss/content/about.module.scss' 
 import Context from '@/context/context';
import { useContext } from 'react';


const About = () => {  
  const { prefix } = useContext(Context); 
  return (  
    <section id="about" className={about.about_wrap} > 
      <div className='l-content'> 
        <div className={about.about_box}> 
          <div 
            data-aos="fade-right" 
            data-aos-delay="400" 
            className={about.about_img}
          > 
            <img src={`${prefix}/images/content/mihye.jpg`} alt='미혜'/>
          </div>
          <div className={about.about_text_wrap}>
            <div className={about.about_text}>
              <h2 
              data-aos="fade-up"  
              data-aos-delay="800" 
              >
                안녕하세요😀.<br/> 프론트엔드 개발자가 되고 싶은<br /> 조미혜입니다.
              </h2> 
              <p 
                data-aos="fade-up"  
                data-aos-delay="1200" 
                className={about.about_text_keyword}
              >
                [ SINCERE ] : 성실하다.
              </p> 
              <h3 
                data-aos="fade-up"  
                data-aos-delay="1400" 
                >
                이 단어는 저를 대표하는 성실하다 라는 단어입니다.
                저에게 있어서는 <span>꾸준함</span>이라는 대표적인 키워드가 있습니다. 
                <br/>
                <br/>
                개발 역시 아무리 극한 상황에 처해지더라도 <span>포기하지 않고 차근차근 문제를 해결</span>해 나가다보면
                실마리가 보이게 됩니다.
              </h3>
              <h4 
                data-aos="fade-up"  
                data-aos-delay="1600" 
                >
                이러한 자세로 포기하지 않고 <span>꾸준히 성장해 나가는</span> 프론트 엔드 개발자가 되겠습니다.
              </h4>
            </div>
            <div 
              data-aos="fade-up"  
              data-aos-delay="1800" 
              className={about.about_hash}
            >
              <span># 성실함</span>
              <span># 꾸준함</span>
              <span># 열정</span>
              <span># 도전의식</span>
            </div>
          </div>
        </div> 
      </div>  
    </section> 
  
 )
}
export default About