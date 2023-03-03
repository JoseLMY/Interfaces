const config = document.querySelector(".config")
const bSettingsContainer = document.querySelector(".bSettingsContainer")
bSettingsContainer.addEventListener("click", viewSettings)
const messagesContainer = document.querySelector(".messagesContainer")
const details = document.querySelector(".details")
details.addEventListener("click", viewMessages)


function viewSettings (){
    if (config.classList.contains("view")){
            config.classList.remove("view")
            messagesContainer.classList.add("view")
    } else {
        config.classList.add("view")
    }
}
function viewMessages (){
    if (messagesContainer.classList.contains("view")){
            messagesContainer.classList.remove("view")
            config.classList.add("view")
    } else {
        messagesContainer.classList.add("view")

    }
}
