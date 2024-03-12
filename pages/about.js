import RTitle from '@/components/common/RTitle'
import about from '@/styles/scss/pages/about.module.scss' 
import Career from "@/pages/api/Career.json" 
import stack from "@/pages/api/Stack.json" 

const About = () => {   
  return (
    <section className={`${about.about_wrap} l-content about`}> 
        <RTitle mainTitle="About Me" />
        <RTitle subTitle="Education"/>
        <ul className={about.about_education}>
          <li>
              <p>광운대학교</p>
              <span>2020. 03 ~ 2024. 02</span>
          </li>
          <li>
              <p>동구마케팅고등학교</p>
              <span>2013. 03 ~ 2016. 02</span>
          </li>
        </ul> 
        <RTitle subTitle="Career"/>
        <ul className={about.about_company}>
            {
            Career.map((item) => {
                return ( 
                <li key={item.id}> 
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
        <RTitle subTitle="Stack"/>
        <ul className={about.about_stack}>
          {
            stack.map((item) => {
              return(
                <li key={item.id}>
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