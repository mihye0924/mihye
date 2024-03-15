 
 // 마우스 커서 이벤트
 export const handleCursorMove = () => {
    const mouseCursor = document.querySelector(".ball");  
    const tag = document.querySelectorAll('button, a') 
    document.addEventListener("mousemove", (e) => {   
      mouseCursor.style.cssText = ` 
      left: ${e.clientX}px;
      top: ${e.clientY}px; 
      `; 
    });  
    tag.forEach((item) => {
      item.addEventListener("mouseover",() => { 
        mouseCursor.classList.add("scale")
      })
      item.addEventListener("mouseout",()=>{
        mouseCursor.classList.remove("scale")
      })
    })  
  }
    
  
    // 마우스 커서 이벤트
  export const handleCursor = () => {
    const mouseCursor = document.querySelector(".ball");  
    const portfolio = document.querySelectorAll('.portfolio ul > li > a')
    const plattes = ['green','orange','pink','red','yellow']

    plattes.forEach((item,index) => { 
        portfolio[index].addEventListener('mouseover',() => {
            mouseCursor.classList.add(plattes[index])
        })
        portfolio[index].addEventListener('mouseout',() =>{
            mouseCursor.classList.remove(plattes[index])
        })
    }) 
  }