 


const button = document.querySelectorAll('#btn')

// button.addEventListener('click', function (){
//  alert('bu element ochirilsinmi');
 

//  let del = document.createElement('del');
//  button.parentElement.classList.add("hidden");

//  button.appendChild(del);
// });

button.forEach((item) => {
    item.addEventListener('click', (e) => {
 let isdelete = confirm('bu element ochirilsinmi');
if(isdelete){
    buttonParent = e.target.parentElement.parentElement
    buttonParent.classList.add("hidden")
}
        
        
    })
})