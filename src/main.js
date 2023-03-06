const config = document.querySelector(".config"),  bSettingsContainer = document.querySelector(".bSettingsContainer")
// const bSettingsContainer = document.querySelector(".bSettingsContainer")
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
const bCreateAccountTopBar = document.querySelector(".bCreateAccountTopBar")
bCreateAccountTopBar.addEventListener("click", fCreateAccountTopBar)
const createAccountContainer = document.querySelector(".createAccountContainer")
const bCancelCreateAccountTopBar = document.querySelector(".bCancelCreateAccountTopBar")
bCancelCreateAccountTopBar.addEventListener("click", fCancelCreateAccount)
const BCreate = document.querySelector(".BCreate")
BCreate.addEventListener("click", fLogin)
const buttonLogOut = document.querySelector(".buttonLogOut")
buttonLogOut.addEventListener("click", logOut)
const BLogin = document.querySelector(".BLogin")
BLogin.addEventListener("click", fLogin)
const forgotContainer = document.querySelector(".forgotContainer")
forgotContainer.addEventListener("click", fForgotContainer)
const loginContainer = document.querySelector(".loginContainer")
const forgotPassword = document.querySelector(".forgotPassword")
const bResetPassword = document.querySelector(".bResetPassword")
bResetPassword.addEventListener("click", fEMailSent)
const eMailSent = document.querySelector(".eMailSent")
const buttoneEMailSent=document.querySelector(".buttoneEMailSent")
buttoneEMailSent.addEventListener("click", finishForgotPasswor)

//EVERY CONTAINERS//

const sectionProfile = document.querySelector(".sectionProfile")
const sectionLogin = document.querySelector(".sectionLogin")


function fLogin(){
    sectionLogin.classList.add("view")
    sectionProfile.classList.remove("view")
    createAccountContainer.classList.add("view")
}
function logOut (){
    sectionLogin.classList.remove("view")
    loginContainer.classList.remove("view")
    sectionProfile.classList.add("view")
}

function fCreateAccountTopBar(){
    loginContainer.classList.add("view")
    bCreateAccountTopBar.classList.add("view")
    createAccountContainer.classList.remove("view")
    bCancelCreateAccountTopBar.classList.remove("view")
}
function fCancelCreateAccount(){
    createAccountContainer.classList.add("view")
    loginContainer.classList.remove("view")
    bCreateAccountTopBar.classList.remove("view")
}

function fForgotContainer(){
    loginContainer.classList.add("view")
    forgotPassword.classList.remove("view")
    bCreateAccountTopBar.classList.add("view")
}

function fEMailSent(){
    eMailSent.classList.remove("view")
    forgotPassword.classList.add("view")
}
function finishForgotPasswor(){
    eMailSent.classList.add("view")
    loginContainer.classList.remove("view")
    bCreateAccountTopBar.classList.remove("view")
}

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
            createMessageContainer.classList.add("view")
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
        bViewFormReport.classList.remove("view")
    } else {
        formContainer.classList.remove("view")
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