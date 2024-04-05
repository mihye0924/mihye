import RTitle from '@/components/common/RTitle'
import about from '@/styles/scss/components/content/about.module.scss' 
import Career from "@/pages/api/Career.json" 
import stack from "@/pages/api/Stack.json" 
import { useEffect } from 'react'     
import { gsap } from '../../pages/_app'

const About = () => {  
  useEffect(() => {   
    const active = document.querySelectorAll(".about .active");
    active.forEach((item) => { 
      gsap.fromTo(item, {opacity: 0}, {
        y: -50, 
        opacity: 1, 
        duration: .5,  
        ease: "power4.in",
        scrollTrigger: {
          trigger: item,
          start: '0 80%',
          end: '0 80%',
          scrub: 0,
          toggleActions: 'play reverse none reverse'
        },
      })
    })
  },[])

  return (
    <section className={`${about.about_wrap} l-content about`}> 
        <RTitle mainTitle="About Me" animate="active" />
        <RTitle subTitle="Education" animate="active" />
        <ul className={`${about.about_education} active`}>
          <li>
              <p>광운대학교</p>
              <span>2020. 03 ~ 2024. 02</span>
          </li>
          <li>
              <p>동구마케팅고등학교</p>
              <span>2013. 03 ~ 2016. 02</span>
          </li>
        </ul> 
        <RTitle subTitle="Career" animate="active" />
        <ul className={about.about_company}>
            {
            Career.map((item) => {
                return ( 
                <li key={item.id} className='active'>
                    <div className={about.about_company_inner}>
                    <p className={item.engName}>{item.engName}</p>
                    <div className={about.about_company_inner_text}>
                        <span>{item.name}</span>
                        <span>{item.rank}</span>
                        <span>{item.period}</span>
                        <ul className={about.about_company_inner_list}>
                        {
                            item.achievements.map((item2, index) => {
                            return(
                                <li key={index}>{item2.list}</li>
                            )
                            })
                        }
                        </ul>
                    </div>
                    </div> 
                </li> 
                )
            })
            }
        </ul> 
        <RTitle subTitle="Stack" animate="active" />
        <ul className={about.about_stack}>
          {
            stack.map((item) => {
              return(
                <li key={item.id} className='active'>
                  <div className={about.about_stack_text}>
                    <p>{item.title}</p>
                    <ul className={about.about_stack_text_list}>
                      {
                        item.content.map((item2) => {
                          return(
                            <li key={item2.id}>{item2.label}</li>
                          )
                        })
                      }
                    </ul> 
                  </div>
                  <ul className={about.about_stack_img}>
                   {
                    item.image.map((item2) => {
                      return(
                        <li key={item2.id}>
                          <img src={item2.label} alt={item2.title}/>
                          <span>{item2.title}</span>
                        </li>
                      )
                    })
                   }
                  </ul> 
                </li>
              )
            })
          }
        </ul>  
    </section>
  )
}

export default About