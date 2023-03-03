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
const reportSended = document.querySelector(".reportSended")
const bReportSended = document.querySelector(".bReportSended")
bReportSended.addEventListener("click", finishReport)
const reportSendedContainer = document.querySelector(".reportSendedContainer")

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
}
function finishReport(){
    if (reportSended.classList.contains("view")){
        reportSended.classList.remove("view")
    } else {
        bViewFormReport.classList.remove("view")
        reportSendedContainer.classList.add("view")
    }
}