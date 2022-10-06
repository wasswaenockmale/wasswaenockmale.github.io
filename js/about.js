const archor = document.getElementsByClassName("about")
console.log(archor)

let arr_div = {'education':'none','skills':'none','experience':'none'}
function select(){
    for(let k of archor){
        if(k.hasAttribute('id')){
            k.style.color = "blue"
        }
        k.addEventListener('click',()=>{
            
        });
    }
}

select()

// Check if there is a div that has the block keyword
function getKey(value){
    return Object.keys(arr_div).find(element => arr_div[element] === value)
}