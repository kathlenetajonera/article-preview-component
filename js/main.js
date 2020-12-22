const mainShareBtn = document.querySelector(".share")
const shareButtons = document.querySelectorAll(".share")
const shareLinksMobile = document.querySelector(".share-links-mobile")
const shareLinksDesktop = document.querySelector(".share-links-desktop")

shareButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        if (window.innerWidth < 855) {
            shareLinksMobile.classList.toggle("inactive")
        } else {
            shareLinksDesktop.classList.toggle("inactive")

            if (!shareLinksDesktop.classList.contains("inactive")) {
                mainShareBtn.classList.add("active")
            } else {
                mainShareBtn.classList.remove("active")
            }
        }
    })
})