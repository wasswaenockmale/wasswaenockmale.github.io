
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
function codeAnimation(codes,element){
    // Now, I have to write code.

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

    return;
}

codeAnimation(word_code,cod)