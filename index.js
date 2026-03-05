document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                return;
            }
            else { entry.target.classList.remove("in-view"); }
        });
    }, {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0
    });

    const allAnimatedElements = document.querySelectorAll(".animate");

    allAnimatedElements.forEach((element) => observer.observe(element));
});
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view-right");
                return;
            }
            else { entry.target.classList.remove("in-view-right"); }
        });
    }, {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0
    });

    const allAnimatedElements = document.querySelectorAll(".animate-right");

    allAnimatedElements.forEach((element) => observer.observe(element));
});