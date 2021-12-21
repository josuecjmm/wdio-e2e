import Page from './page'

class LoginPage extends Page {
    get inputEmail() {
        return  $('#email')
    }

    get inputPassword() {
        return  $('#password')
    }

    get btnSubmit() {
        return  $('button[type="submit"]')
    }

    get alertMessage() {
        return $('.alert__message')
    }

    fillLoginForm(email, password) {
        super.sendKeys(this.inputEmail, email)
        super.sendKeys(this.inputPassword, password)
        super.click(this.btnSubmit)
    }

    getAlertMessageText(){
        return super.getText(this.alertMessage)
    }
}

export default new LoginPage()