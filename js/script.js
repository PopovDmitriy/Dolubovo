document.addEventListener('DOMContentLoaded', function() {
    function headerToggler() {
        const html = document.documentElement;
        let header = document.querySelector('.js-header');
        let nav = header.querySelector('[data-nav]');
        let toggler = nav.querySelector('[data-toggler]');
        toggler.classList.toggle('open');

        function toggleMenu() {
            nav.classList.toggle("is-open");
        }

        function noScroll() {
            html.classList.toggle('no-scroll');
        }

        toggler.addEventListener('click', function() {
            toggleMenu();
            noScroll();
        });
    }  
    headerToggler(); 
})
