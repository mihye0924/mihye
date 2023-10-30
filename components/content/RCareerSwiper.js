import careerSwiper from '@/styles/scss/components/content/RCareerSwiper.module.scss'
import careerList from '@/pages/api/swiper/Career.json';
import { FreeMode, Thumbs, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useContext, useState } from 'react'  
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';  
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; 
import Context from '@/context/context';



const RCareerSwiper = () => { 
    const { prefix } = useContext(Context);
    const [thumbsSwiper, setThumbsSwiper] = useState([] || null);  
    const [more, setMore] = useState(false)    

    const handleThumbSwiper = (swiper, index) => {
        thumbsSwiper[index] = swiper;
        setThumbsSwiper([...thumbsSwiper]); 
    };

    return (  
        <div className={careerSwiper.careerSwiper_box}>    
        <div>  
            {
                careerList.length > 1 ?
                <nav 
                    className={careerSwiper.careerSwiper_nav}
                    data-aos="fade-up"  
                    data-aos-delay="400" 
                >
                    <ul className='pagination_career swiper-pagination'> 
                        <li className="swiper-pagination-bullet"> 
                        </li>
                    </ul>
                </nav> 
                :
                <nav 
                    className={careerSwiper.careerSwiper_nav}
                    data-aos="fade-up"
                    data-aos-delay="400"   
                >
                    <ul className='career_ul'>  
                        <li className='bullet bullet-active'> 
                            <span>{careerList[0].title}</span>
                        </li> 
                    </ul>
                </nav>  
            } 
        </div>   
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={1}
                allowTouchMove={false}
                navigation= {{
                    prevEl: `.career_prev`,
                    nextEl: `.career_next`,
                }}
                pagination={{
                    el: `.pagination_career`,
                    clickable: true,
                    renderBullet: (index, className) => { 
                        return '<button class='+ className +'><span>' + (careerList[index].title) + '</span></button>' ;
                    },
                }}
            > 
                
            {
                careerList.map((item, index) => {
                    return(
                    <SwiperSlide key={index}>
                        <div
                            data-aos="fade-left"
                            data-aos-delay="600" 
                        >
                            <Swiper 
                                spaceBetween={10}   
                                modules={[FreeMode, Thumbs]}  
                                thumbs={{ swiper: thumbsSwiper[index] && !thumbsSwiper[index].destroyed ? thumbsSwiper[index] : null }}
                                className={`${item.swiperKey} swiperCustom1`}   
                            >
                                    {
                                    item.image.map((item2, index2)=> {
                                        return (
                                            <SwiperSlide key={index2+item.key}> 
                                                <img src={`${prefix}/${item2.img}`} alt='' />
                                            </SwiperSlide>  
                                        )
                                    })
                                }  
                            </Swiper>
                            <Swiper   
                                onSwiper={
                                    (swiper) => handleThumbSwiper(swiper, index) 
                                }
                                spaceBetween={10} 
                                slidesPerView={2}
                                freeMode={true}
                                watchSlidesProgress={true}  
                                modules={[FreeMode, Navigation, Thumbs]} 
                                className={`${item.swiper2Key} swiperCustom2`}  
                                breakpoints={{ 
                                    // when window width is >= 480
                                    480: {
                                        slidesPerView: 2,
                                        spaceBetween: 10
                                    },
                                    // when window width is >= 768
                                    768: { 
                                        slidesPerView: 3,
                                        spaceBetween: 10
                                    },
                                    // when window width is >= 1080
                                    1080: { 
                                        slidesPerView: 4,
                                        spaceBetween: 10
                                    }      
                                }}  
                            >
                                
                                {
                                    item.image.map((item2,index2)=> {
                                        return (
                                            <SwiperSlide key={index2+item.key}> 
                                                <img src={`${prefix}/${item2.img}`} alt='' />
                                            </SwiperSlide>  
                                        )
                                    })
                                } 
                            </Swiper> 
                        </div>
                        <div className={careerSwiper.careerSwiper_content}>
                            <div 
                                data-aos="fade-up"
                                data-aos-delay="800" 
                            >
                                <h3 className='lina'>{item.bottomTitle}</h3>
                                <p className='lina'>{item.title}</p> 
                            </div> 
                            <div 
                                className={careerSwiper.careerSwiper_text}
                                data-aos="fade-up"
                                data-aos-delay="1000" 
                            >
                                <span>
                                        {item.content}
                                    </span>
                                    <button onClick={() => more ? setMore(false) : setMore(true) }>
                                        {more ? '접기':'더보기'}
                                    </button>
                                    {
                                        more &&
                                        <p>
                                            <span><b>작업개요 : </b> {item.work}</span>
                                            <span><b>작업인원 : </b>{item.workNum} </span>
                                            <span><b>작업기간 : </b>{item.workTime}</span>
                                            <span><b>수행사 : </b>{item.workPartner}</span>
                                            <span><b>업무형태 : </b> {item.workKind}</span>
                                        </p>
                                    }
                            </div>    
                            <div
                                className={careerSwiper.careerSwiper_link_box} 
                                data-aos="fade-up"
                                data-aos-delay="1000" 
                            >
                                {
                                    item.keywords.map((item2) => {
                                        <span key={item2.id}>{item2.label}</span> 
                                    })
                                }
                            </div>
                            <div 
                                className={careerSwiper.careerSwiper_link} 
                                data-aos="fade-up"
                                data-aos-delay="1200" 
                            >
                                <Link href={item.pcLink} target='_blank' className={careerSwiper.careerSwiper_link_white}>
                                    PC 바로가기
                                </Link>
                                <Link href={item.mobileLink} target='_blank' className={careerSwiper.careerSwiper_link_gray}>
                                    모바일 바로가기
                                </Link> 
                            </div>
                        </div>  
                    </SwiperSlide>
                    )
                })
            }
            </Swiper>  
            <div className={careerSwiper.careerSwiper_swiper_button}> 
                <span className={`swiper-button-prev career_prev ${careerSwiper.careerSwiper_swiper_button_prev}`}></span>
                <span className={`swiper-button-next career_next ${careerSwiper.careerSwiper_swiper_button_next}`}></span>
            </div> 
        </div> 
    )
}
export default RCareerSwiper