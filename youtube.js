const menuIcon =document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar")
const container = document.querySelector(".container")

menuIcon.addEventListener("click", function(){
    sidebar.classList.toggle("show")
    container.classList.toggle("large-container")
})