// let toggleDropdown = (dropdownId) => {
//     let dropdown = document.getElementById(dropdownId);
//     if (dropdown.classList.contains('hidden')) {
//         dropdown.classList.remove('hidden');
//     } else {
//         dropdown.classList.add('hidden');
//     }
// }


// let hamShow = () => {
//     console.log("in hamshow")
//     let temp = document.getElementById('hambtn')
//     document.getElementById('ham').classList.add('hidden')
//     document.getElementById('cross').classList.remove('hidden');
//     temp.classList.remove('invisible', "opacity-0");
// }

// let hamClose = () => {
//     let temp = document.getElementById('hambtn')
//     temp.classList.add('invisible', "opacity-0")
//     document.getElementById('ham').classList.remove('hidden')
//     document.getElementById('cross').classList.add('hidden')
// }

// document.querySelectorAll("[data-dropdown]").forEach(dropdown => {
//     const button = dropdown.querySelector("[data-dropdown-button]")
//     const menu = dropdown.querySelector("[data-dropdown-menu]")
//     button.addEventListener("mouseover", () => {
//         menu.classList.remove("invisible", "opacity-0")
//     })
//     button.addEventListener("mouseout", () => {
//         menu.classList.add("invisible", "opacity-0")
//     })
//     menu.addEventListener("mouseover", () => {
//         menu.classList.remove("invisible", "opacity-0")
//     })
//     menu.addEventListener("mouseout", () => {
//         menu.classList.add("invisible", "opacity-0")
//     })
// })
// document.querySelectorAll("[data-submenu-trigger]").forEach(trigger => {
//     const submenu = trigger.querySelector("[data-submenu]")
//     trigger.addEventListener("mouseover", () => {
//         submenu.classList.remove("invisible", "opacity-0")
//     })
//     trigger.addEventListener("mouseout", () => {
//         submenu.classList.add("invisible", "opacity-0")
//     })
//     submenu.addEventListener("mouseover", () => {
//         submenu.classList.remove("invisible", "opacity-0")
//     })
//     submenu.addEventListener("mouseout", () => {
//         submenu.classList.add("invisible", "opacity-0")
//     })
// })