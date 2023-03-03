const config = document.querySelector(".config")
const bSettingsContainer = document.querySelector(".bSettingsContainer")
bSettingsContainer.addEventListener("click", toggleItems)


function toggleItems (){
    if (config.classList.contains("view")){
            config.classList.remove("view")
    } else {
        config.classList.add("view")
    }
}
