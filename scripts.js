document.addEventListener("DOMContentLoaded", () => {
    const fixedItems = document.querySelectorAll(".fixed__nav, .areas__acting, .fixed__btn");    
    fixedItems.forEach((item, index) => {
        item.style.opacity = "0";
        item.style.transition = "opacity 0.6s ease";
        item.style.transitionDelay = `${index * 0.2}s`;
    });
    window.addEventListener("scroll", () => {
        const introHeight = document.querySelector("#intro").offsetHeight;
        if (window.scrollY > introHeight / 2) {            
            fixedItems.forEach(item => {
                item.style.opacity = "1";
            });
        } else {
            fixedItems.forEach(item => {
                item.style.opacity = "0";
            });
        }
    });
});