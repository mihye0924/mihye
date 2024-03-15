import title from '@/styles/scss/components/common/title.module.scss' 

const RTitle = ({mainTitle, subTitle, animate}) => { 
    return(
    <div>
        {
            mainTitle && 
            <h1 className={`${title.title_h1} ${animate}`}> 
                {mainTitle} 
            </h1>
        }
        {
            subTitle &&
            <h2 className={`${title.title_h2} ${animate}`}> 
                {subTitle}
            </h2>
        }
    </div>
    )
}
export default RTitle