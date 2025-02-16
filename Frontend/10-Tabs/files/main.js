document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tablinks");
    const tabContents = document.querySelectorAll(".tabcontent");

    tabButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabContents.forEach(content => {
                content.classList.remove("active");
                content.querySelector("p").style.animation = "none";
            });

            this.classList.add("active");
            tabContents[index].classList.add("active");

            setTimeout(() => {
                if (index === 0) tabContents[index].querySelector('p').style.animation = "slideFromBottom 0.5s ease-out forwards";
                if (index === 1) tabContents[index].querySelector('p').style.animation = "slideFromTop 0.5s ease-out forwards";
                if (index === 2) tabContents[index].querySelector('p').style.animation = "slideFromRight 0.5s ease-out forwards";
                if (index === 3) tabContents[index].querySelector('p').style.animation = "slideFromLeft 0.5s ease-out forwards";
            }, 10);
        });
    });

    tabButtons[0].classList.add("active");
    tabContents[0].classList.add("active");
    tabContents[0].querySelector("p").style.animation = "slideFromBottom 0.5s ease-out forwards";
});