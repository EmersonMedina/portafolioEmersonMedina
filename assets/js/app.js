const inputs = document.querySelectorAll('input'); 

inputs.forEach(input => {
    input.addEventListener('focus', addActive); 
    input.addEventListener('blur', removeActive); 
});


function addActive(e) {
    const label = e.target.previousSibling.previousSibling; 
    label.classList.add('active'); 
}

function removeActive(e) {
    const label = e.target.previousSibling.previousSibling; 
    label.classList.remove('active'); 
}
