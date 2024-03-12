import loading  from '@/styles/scss/components/common/loading.module.scss'
import { useEffect, useState } from 'react'

const RLoading = ({isLoading, setIsLoading}) => {

    useEffect(() => { 
        // setIsLoading(true)  
        // setTimeout(() => {
        //   setIsLoading(false)
        // }, 3000); 
    },[setIsLoading])
    return(  
        <div className={`${loading.loading_wrap} ${!isLoading ? loading['loading_hide'] : ''}`}>
            <div className={loading.loading_load}>
                <span>Loading...</span>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div> 
    )
}
export default RLoading