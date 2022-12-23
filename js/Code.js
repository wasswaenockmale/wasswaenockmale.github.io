import typeText from "./index.js";
const cod = document.getElementById("code");
const word = "Hi, I'm Wasswa Enock Male. A software developer. MERN Stack."
let word_code = `console.log("Hello, world");
const hireMe = true; 
if(company.hasOpenRole("developer role") && hireMe==true){ 
    console.log("Hire this passionate developer");
}else{
    console.log("Let me train with you.");
    hireMe = false;
}`

// Trying to use the async await in my project 
async function codeAnimation(codes,element,word, callback){
    // Now, I have to write code.
    
    // console.log("For sure")
    const bol = await callback(word)

    if(bol === true){
        const len = codes.length;
        let code_count = 0;
        setInterval(()=>{
            if(code_count === len){
                clearInterval()
            }else{
                const reg = /[;{]/
                if(reg.test(codes[code_count])){
                    element.innerHTML += codes[code_count] + "<br>"
                    code_count++
                }else{
                    element.innerHTML += codes[code_count]
                    code_count++
                }
                // element.innerHTML += codes[code_count]
                // code_count++
            }
        }, 100);
    }else{
        code.innerHTML += bol
    }
}

codeAnimation(word_code,cod,word,typeText)

// We call the two section for the menubar 
const menu = document.querySelector(".hidden-navbar-links-ul");
const navMenu = document.querySelector(".navbar-links-ul");

menu.addEventListener('click',()=>{
    menu.classList.toggle("active");
    navMenu.classList.toggle("active")
})