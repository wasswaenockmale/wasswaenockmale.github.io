import typeText from "./index.js";
const cod = document.getElementById("code");
const word = "Hi, I'm Wasswa Enock Male. A software developer. MERN Stack."

let word_code = `console.log("Hello, world");
const hireMe = true; 
if(company.hasOpenRole("developer role") && hireMe==true){ 
    console.log("Hire this passionate developer");
}{
    console.log("Let me train with you.");
    hireMe = false;
}`

// Trying to use the async await in my project 
async function codeAnimation(codes,element,word, callback){
    // Now, I have to write code.

    const bol = await callback(word)

    if(bol === "true"){
        const len = codes.length;
        let code_count = 0;
        setInterval(()=>{
            if(code_count === len){
                clearInterval()
            }else{
                element.innerHTML += codes[code_count]
                code_count++
            }
        }, 100);
    }else{
        code.innerHTML += bol
    }
}

codeAnimation(word_code,cod,word,typeText)