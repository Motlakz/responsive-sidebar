const toggleBtn = document.querySelector('.toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', function() {
// The first method for executing the toggle on the toggleBtn
/* if(sidebar.classList.contains('show-sidebar')) {
    sidebar.classList.remove('show-sidebar');
   } else {
    sidebar.classList.add('show-sidebar');
   }*/

// The method below is the quickest and it saves time
   sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('show-sidebar');
});