const word = "Hi, I'm Wasswa Enock Male. A software developer. MERN Stack."

function typeText(str){
    // Accept the string and them Start typing on the screen.
    const div = document.getElementById("header-left");
    
    // now, create a p tag.
    const p = document.createElement('p')
    // p.innerHTML = "|"

    // I have added the p tag to the div header-left.
    div.appendChild(p)
    let letter_count = 0;
    const len = word.length;

    const btn = document.createElement("button");
    btn.textContent = "HIRE ME";
    div.append(btn)
    btn.classList.add("hide")

    setInterval(()=>{
        const reg = /[.,]/
        // const capital = /[A-Z]/
        if(letter_count === len){
            btn.classList.remove("hide");
            return true;
            clearInterval()
        }else{
            if(reg.test(str[letter_count])){
                p.innerHTML += str[letter_count] + "<br>"
                letter_count++;
            }else{
                p.innerHTML += str[letter_count]
                letter_count++;
            }
        }
    },100)
    // also, create an hr tag
    const hr = document.createElement('hr');
    div.appendChild(hr);
}

// console.log(typeText(word))
export default typeText