document.addEventListener("DOMContentLoaded", () => {
    const fixedItems = document.querySelectorAll(".fixed__nav, .areas__acting, .fixed__btn");    
    fixedItems.forEach(item => {
        item.style.opacity = "0";
        item.style.transition = "opacity 0.6s ease";
    });
    window.addEventListener("scroll", () => {
        const introHeight = document.querySelector("#intro").offsetHeight;
        if (window.scrollY > introHeight - 50) {            
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