window.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector("header");
    const hamburgerBtn = document.querySelector("#hamburger-btn");
    const closeMenuBtn = document.querySelector("#close-menu-btn");
    let section = document.getElementById('section');
    const table = document.querySelector(".tbody")

    // Toggle mobile menu on hamburger button click
    hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

    // Close mobile menu on close button click
    closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());

    const Mahsulotlar = {
        tovarlar: [
            'Olma',
            'Anor',
            'Behi',
            'Olcha',
        ],
    }
    
    table.innerHTML = ' '

    Mahsulotlar.tovarlar.forEach((item, idx) => {
        table.innerHTML += `
            <tr>
                <td>${idx + 1}</td>
                <!-- <td><img src="../img/img1.jpg" alt=""> </td> -->
                <td class="name">${item}</td>
                <td class="name">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad nisi sit libero dolor molestias corporis laborum nesciunt. Odit, sed dolorem quidem molestiae nobis ipsam, debitis necessitatibus ex eveniet, fugiat quos?</td>
                <td>25.04.2024</td>
                <td>100</td>
                <td onclick="rename()" class="pen">
                    <i class='bx bxs-pencil'></i>
                </td>
                <td onclick="del()">
                    <i class='bx bxs-trash-alt'></i>
                </td>
            </tr>
        `
    })



})

// Mahsulot qo'shish uchun 
function plusmenu() {
    section.classList.toggle('activ');
    let nevbox = document.getElementById('plus');
    nevbox.classList.toggle('activ');
}

function rename() {
    section.classList.toggle('activ');
    let renamebox = document.getElementById('rename');
    renamebox.classList.toggle('activ');
}

function del() {
    section.classList.toggle('activ');
    let removebox = document.getElementById('remove');
    removebox.classList.toggle('activ');
}