import Header from '@/components/layout/Header'
import { useRouter } from 'next/router'
import post from "@/styles/scss/pages/post.module.scss"
import Portfolio from '@/pages/api/Portfolio.json'
import { prefix } from '@/config/config' 
import Footer from '@/components/layout/Footer'
import { useEffect, useState } from 'react' 
import { gsap } from '@/pages/_app'

const Post = () => {
  const [num, setNum] = useState(0);
  const router = useRouter()  
  useEffect(() => { 
    
    if (router.isReady) {
      const { id } = router.query;
      if (!id) return;
      setNum(parseInt(id) - 1);
    }
  }, [router.isReady, router.query]);
  return <>
    <Header type="prev" />
    <div className={post.post_wrap}>
      <div className='l-content'>
        <h2>{Portfolio[num].title}</h2>
        <div className={post.post_title}>
          <p><span>담당역할</span> : {Portfolio[num].category}</p>
          <p><span>기여도</span> : {Portfolio[num].contribution}</p>
        </div>
        {
          Portfolio[num].period !== undefined &&
          <div className={post.post_subtitle}>
            <p><span>작업기간</span> : {Portfolio[num].period}</p>
          </div>
        }
        {
          Portfolio[num].test !== undefined &&
          <div className={post.post_subtitle}>
            <p><span>테스트</span> : {Portfolio[num].test}</p>
          </div>
        }
        <div className={post.post_content}>
          {
            Portfolio[num].content.map((item) => {
              return(
                <div key={item.id}>{item.label}</div>
              )
            })
          }
        </div>
        <div className={post.post_button}>
          <button onClick={() => window.open(Portfolio[num].link)}>사이트 바로가기</button>
          {
            Portfolio[num].github !== undefined &&
            <button onClick={() => window.open(Portfolio[num].github)}><i className='github'/> 깃허브</button>
          }
        </div>
      </div>
      <div className={post.post_image_main}> 
        <img src={`${prefix}${Portfolio[num].img}`} alt='이미지'/>
      </div>
      <div className={`${post.post_image} l-content`}> 
        {
          Portfolio[num].image.map((item) => {
            return(
              <div key={item.id}>
                <img src={`${prefix}${item.img}`} alt='이미지'/>
              </div>
            )
          })
        }
      </div>
    </div>
    <Footer /> 
  </>
}

export default Post 