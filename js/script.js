console.log("Jeejushop JavaScript is working!");


const detailsBtn = document.querySelector(".hero-info button");

if (detailsBtn) {
    detailsBtn.addEventListener("click", () => {
        document.querySelector("#about").scrollIntoView({
            behavior: "smooth"
        });
    });
}




const planButtons = document.querySelectorAll(".button-card");

planButtons.forEach((button) => {
    button.addEventListener("click", () => {

        const card = button.closest(".serv-card");
        const planName = card.querySelector("h3").textContent;
        const price = card.querySelector(".price").textContent;

        alert(`You selected the ${planName} plan (${price})`);
    });
});



const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


const form = document.querySelector(".footer-form");

if (form) {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        alert("Thank you! Your message has been sent.");

        form.reset();

    });

}


const cards = document.querySelectorAll(".serv-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});


cards.forEach((card) => {
    observer.observe(card);
});