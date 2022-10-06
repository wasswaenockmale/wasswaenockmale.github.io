const archor = document.getElementsByClassName("about")
console.log(archor)

let arr_div = {'education':'active','skills':'not','experience':'not'}
function select(){
    for(let k of archor){
        if(k.hasAttribute('id')){
            k.style.color = "blue"
        }
        k.addEventListener('click',()=>{
            if(getKey('active') === undefined){
                k.setAttribute('id','active')

                const [i, _] = k.attributes
                const id = i.value.slice(1)
                document.getElementById(id).setAttribute("display","block")
                arr_div[id] = 'active'
            }else{
                // This means that the clicked Item is active.
                const di = getKey('active')
                arr_div[di] = "not"
                // console.log(di)
                const [i, _] = k.attributes
                const id = i.value.slice(1)
                // console.log(id)

                for(let l of archor){
                    if(l.hasAttribute('id')){
                        console.log(l)
                        l.removeAttribute('id')
                    }
                }
                document.getElementById(di).setAttribute("style","display:none")
                document.getElementById(id).setAttribute("style","display:block")
                arr_div[id] = "active"
            }
        });
    }
}

select()

// Check if there is a div that has the block keyword
function getKey(value){
    return Object.keys(arr_div).find(element => arr_div[element] === value)
}