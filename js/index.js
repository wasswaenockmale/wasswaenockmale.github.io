const word = "Hi, I'm Wasswa Enock Male. A software developer. MERN Stack."

function typeText(str){
    // Accept the string and them Start typing on the screen.
    const div = document.getElementById("header-left");

    // now, create a p tag.
    const p = document.createElement('p');

    // Also, create a button tag
    const btn = document.createElement('button');
    btn.textContent = "HIRE ME"

    // also, create an hr tag
    const hr = document.createElement('hr')
    // now try to put the content to the p tag.
    p.innerHTML = str

    div.appendChild(p)
    div.appendChild(btn)
    div.appendChild(hr);
}

typeText(word)