const archor = document.getElementsByClassName("about")
console.log(archor)

let arr_div = {'education':'none','skills':'none','experience':'none'}
function select(){
    for(let k of archor){
        k.addEventListener('click',()=>{
            const [i, _ ] =  k.attributes
            const id = i.value.slice(1)
            const div = document.getElementById(id)
            div.setAttribute("display","block")
            if(getKey('block') !== undefined){
                /**
                 * First remove element that has block first.
                 * Then, add a new element that has blocked.
                 */
                const elem = getKey('block')
                arr_div[elem] = "none"
                document.getElementById(elem).setAttribute('display','none')
                console.log("It is here")

                // Let's work it out.
                div.setAttribute('display','block')
                div.style.color = "red"

            }else{
                console.log("It doesn't work here")
                arr_div[id] = "block"
                div.setAttribute('display','block')
                div.style.color = "red"
            }

        });
    }
}

select()

// Check if there is a div that has the block keyword
function getKey(value){
    return Object.keys(arr_div).find(element => arr_div[element] === value)
}