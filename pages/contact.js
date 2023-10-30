 
import contact from '@/styles/scss/content/contact.module.scss'
import Link from 'next/link'
import contactList from '@/pages/api/Contact.json' 

const Contact = () => { 
    return(
        <section id="contact" className={contact.contact_wrap}> 
            <div className='l-content'> 
                <div className={contact.contact_box}>
                    <div>
                        <p>
                            <span>인재 </span>
                            알리미
                        </p>
                        <p>
                            <span>회사에 도움이 되는 인재</span>
                            <span>정보를 안내합니다.</span>
                        </p>
                    </div>
                    <ul>
                        {
                            contactList.map((item) => {
                                return(
                                    <li key={item.id}>
                                        <Link href={item.link} target="_blank">
                                            <i className={item.icon}/>
                                            <p>{item.title}</p> 
                                        </Link>
                                    </li> 
                                )
                            })
                        }
                    </ul>
                </div>
            </div> 
        </section>
    )
}
export default Contact