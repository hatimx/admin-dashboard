const sideMenu = document.querySelector('aside')
const menuBtn = document.getElementById('menu-btn')
const closeBtn = document.getElementById('close-btn')
const themeToggler = document.querySelector(".theme-toggler")

menuBtn.addEventListener("click", () => {
    sideMenu.style.display = 'block'
})
closeBtn.addEventListener("click", () => {
    sideMenu.style.display = 'none'
})

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    // themeToggler.querySelector('span').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

// const links = document.querySelectorAll('.sidebar a');

// // Loop through each link to add click event listener
// links.forEach(link => {
//     link.addEventListener('click', function (event) {
//         event.preventDefault(); // Prevent default link behavior

//         // Remove 'active' class from all links
//         links.forEach(item => {
//             item.classList.remove('active');
//         });

//         // Add 'active' class to the clicked link
//         this.classList.add('active');
//     });
// });
const sidebarLinks = document.querySelectorAll('.sidebar a');

// Loop through each sidebar link to add click event listener
sidebarLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        // Remove 'active' class from all sidebar links
        sidebarLinks.forEach(item => {
            item.classList.remove('active');
        });

        // Add 'active' class to the clicked sidebar link
        this.classList.add('active');
    });
});
