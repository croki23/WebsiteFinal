const leftDiv = (title1,para1,Btn1, Btn2, Btn3, Btn4) => {
    let div = document.createElement("div")
    div.className = "ClassL"
    div.innerHTML = `<h1>${title1}</h1> 
                     <p>${para1}</p>
                    <button>${Btn1}</button> 
                    <button>${Btn2}</button>
                    <button>${Btn3}</button> 
                    <button>${Btn4}</button> 
                    `
    
    return div
}

export { leftDiv }
