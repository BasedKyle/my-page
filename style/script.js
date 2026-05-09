const userLang = navigator.language || navigator.userLanguage;
const savedLang = localStorage.getItem('user_selected_lang');
const currentPath = window.location.pathname;

if (!savedLang) {
    if (userLang.startsWith('ru') && !currentPath.includes('/ru/')) {
        window.location.href = '/ru/index.html';
    } else if (userLang.startsWith('en') && !currentPath.includes('/en/')) {
        window.location.href = '/en/index.html';
    }
}

function switchLanguage(lang) {
    localStorage.setItem('user_selected_lang', lang);
    window.location.href = `/${lang}/index.html`;
}

document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    function toggleDropdown() {
        dropdownContent.classList.toggle('show');
        dropbtn.classList.toggle('active');
    }

    dropbtn.addEventListener('click', toggleDropdown);

    window.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target)) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
                dropbtn.classList.remove('active');
            }
        }
    });
});

function showDetails(itemId) {
    const wrapper = document.querySelector('.content-wrapper');
    
    if (wrapper) {
        wrapper.classList.add('active-detail');
    }

    const allDetails = document.querySelectorAll('.details-content');
    allDetails.forEach(detail => {
        detail.classList.remove('active');
    });

    const targetDetail = document.getElementById(itemId + '-details');
    if (targetDetail) {
        targetDetail.classList.add('active');
    }
}