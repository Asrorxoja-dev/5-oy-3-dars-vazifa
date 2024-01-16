 


const button = document.querySelectorAll('#btn')

// button.addEventListener('click', function (){
//  alert('bu element ochirilsinmi');
 

//  let del = document.createElement('del');
//  button.parentElement.classList.add("hidden");

//  button.appendChild(del);
// });

button.forEach((item) => {
confirm('bu element ochirilsinmi');
    item.addEventListener('click', (e) => {
        buttonParent = e.target.parentElement.parentElement
        buttonParent.classList.add("hidden")
        
    })
})