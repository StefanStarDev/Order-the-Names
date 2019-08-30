function solve() {

    let btn = document.querySelector("#exercise > article > button")
      
    let liElements = document.getElementsByTagName("li")

    btn.addEventListener("click", () => {
        let inputWord = document.getElementsByTagName("input")[0].value
        let firstChar = inputWord[0]
        let newWord = firstChar.toUpperCase() + inputWord.substring(1, inputWord.length)
        

        Array.from(liElements).forEach( li => {
            
            let check = String.fromCharCode(Array.from(li.parentNode.children).indexOf(li) + 97)
            console.log(check);
            
            if(check == firstChar){
               
                if(li.textContent === ""){
                    li.textContent = newWord
                }else{
                    li.textContent += `, ${newWord}`
                }

            }
        })  
        
    })
    
    


    

}