let toggle = document.querySelector('#btn__theme');

let theme = localStorage.getItem('theme');

let imgHeader = document.querySelector('#img__header');

const themeDark = () => {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
}

const themeLight = () => {
    document.body.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
}

if (theme === 'dark') {
    themeDark();
}

toggle.addEventListener('click', () => {

    theme = localStorage.getItem('theme');
    theme === 'dark' ? themeLight() : themeDark();

});