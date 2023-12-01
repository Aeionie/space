// Get the menu button and the sidebar
const menuToggle = document.getElementById('menu');
const navbar = document.querySelector('.side-bar');
const closeBtn= document.querySelector(".close")
const addResources= document.querySelector(".add-resources")
const postPage=document.querySelector("#post-page")

// Add click event listener to the menu button
menuToggle.addEventListener('click', () => {
  // Toggle the 'fa-times' class on the menu button
  menuToggle.classList.toggle('fa-times');
  
  // Toggle the 'active' class on the sidebar to expand or collapse it
  navbar.classList.toggle('active');
});

addResources.addEventListener("click",()=>{
  postPage.style.display="flex"

})
postPage.addEventListener("click",()=>{
  postPage.style.display="none"

})