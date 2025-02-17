document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById("cookiePopup")
    const acceptBtn = document.getElementById("acceptCookies")
    const closeBtn = document.getElementById("closeBtn")

    if (!localStorage.getItem("cookieAccepted")) {
        popup.style.display = "block"
    }

    acceptBtn.addEventListener("click", function () {
        localStorage.setItem("cookieAccepted", true)
        popup.style.display = "none"
    })

    closeBtn.addEventListener("click", function () {
        popup.style.display = "none"
    })
})