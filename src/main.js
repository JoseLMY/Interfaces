const config = document.querySelector(".config")
const bSettingsContainer = document.querySelector(".bSettingsContainer")
bSettingsContainer.addEventListener("click", viewSettings)
const messagesContainer = document.querySelector(".messagesContainer")
const details = document.querySelector(".details")
details.addEventListener("click", viewMessages)
const bViewFormReport = document.querySelector(".bViewFormReport")
bViewFormReport.addEventListener("click", viewFormReport)
const formContainer = document.querySelector(".formContainer")
const exitReportData = document.querySelector(".exitReportData")
exitReportData.addEventListener("click", fExitReportData)
const bSendReport = document.querySelector(".bSendReport")
bSendReport.addEventListener("click", fSendedReport)
const reportSendedContainer = document.querySelector(".reportSendedContainer")
const createMessageContainer = document.querySelector(".createMessageContainer")
const bCreateMessage = document.querySelector(".bCreateMessage")
bCreateMessage.addEventListener("click", viewCreateMessage)
const exitCreatMessage = document.querySelector(".exitCreatMessage")
exitCreatMessage.addEventListener("click", fExitCreatMessage)
const bSendMessage = document.querySelector(".bSendMessage")
bSendMessage.addEventListener("click", finishSendMassage)

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

function viewFormReport(){
    if (formContainer.classList.contains("view")){
        formContainer.classList.remove("view")
        bViewFormReport.classList.add("view")
        config.classList.add("view")
    } else {
        formContainer.classList.add("view")
    }
}
function fExitReportData(){
    if (bViewFormReport.classList.contains("view")){
        formContainer.classList.add("view")
        reportSended.classList.remove("view")
        bViewFormReport.classList.remove("view")
    } else {
        formContainer.classList.remove("view")
        reportSended.classList.add("view")
    }
}
function fSendedReport (){
    if (formContainer.classList.contains("view")){
        formContainer.classList.remove("view")
    } else {
        reportSendedContainer.classList.remove("view")
        formContainer.classList.add("view")
    }

    setTimeout(function() {
        reportSendedContainer.classList.add("view")
        bViewFormReport.classList.remove("view")
    },3000)
}

function viewCreateMessage(){
    if (createMessageContainer.classList.contains("view")){
        createMessageContainer.classList.remove("view")
        messagesContainer.classList.add("view")
    } else {
        createMessageContainer.classList.add("view")
    }
}
function fExitCreatMessage(){
    createMessageContainer.classList.add("view")
    messagesContainer.classList.remove("view")
}
function finishSendMassage (){
    createMessageContainer.classList.add("view")
    reportSendedContainer.classList.remove("view")

    setTimeout(function() {
        reportSendedContainer.classList.add("view")
    },3000)
}
