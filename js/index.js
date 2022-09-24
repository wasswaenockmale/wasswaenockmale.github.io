const word = "Hi, I'm Wasswa Enock Male. A software developer. MERN Stack."

function typeText(str){
    // Accept the string and them Start typing on the screen.
    const div = document.getElementById("header-left");

    // now, create a p tag.
    const p = document.createElement('p')

    // I have added the p tag to the div header-left.
    div.appendChild(p)
    let letter_count = 0;
    const len = word.length;
    const btn = document.createElement('button');
    div.appendChild(btn)
    btn.focus()
    setInterval(()=>{
        const reg = /[.,]/
        if(letter_count === len){
            btn.textContent = "HIRE ME"
            clearInterval()
            // Also, create a button tag
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
    const hr = document.createElement('hr')
    // now try to put the content to the p tag.
    // p.innerHTML = str
    div.appendChild(hr);
}

typeText(word)