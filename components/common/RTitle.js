import title from '@/styles/scss/components/common/title.module.scss' 

const RTitle = ({mainTitle, subTitle}) => { 
    return(
    <div>
        {
            mainTitle && 
            <h1 className={title.title_h1}> 
                {mainTitle} 
            </h1>
        }
        {
            subTitle &&
            <h2 className={title.title_h2}>
                {subTitle}
            </h2>
        }
    </div>
    )
}
export default RTitle