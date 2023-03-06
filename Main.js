// Select the navbar toggler button
const navbarToggle = document.getElementById('navbarToggle');

// Add a click event listener to the navbar toggler button
navbarToggle.addEventListener('click', function() {
  // Select the navbar menu
  const navbarMenu = document.querySelector('.navbar-menu');
  
  // Toggle the 'active' class on the navbar menu
  navbarMenu.classList.toggle('active');
  
  // Select the navbar toggler button
  const navbarToggle = document.querySelector('.navbar-toggle');
  
  // Toggle the 'active' class on the navbar toggler button
  navbarToggle.classList.toggle('active');
});
