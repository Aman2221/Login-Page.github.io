const inputs = document.querySelectorAll(".form_input")

function addfocus(){
    let parent = this.parentNode.parentNode
    parent.classList.add("focus")
}

function remfocus(){
    let parent = this.parentNode
    if(this.value == ""){
        parent.classList.remove("focus")
    }
}

inputs.forEach(input => {
    input.addEventListener("focus",addfocus)
    input.addEventListener("blur",remfocus)
})