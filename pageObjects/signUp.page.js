import Page from './page'

class SignUpPage extends Page {
    get linkAlreadyHaveAnAccount() {
        return $('.auth-box a')
    }

    accessAlreadyHaveAnAccountPage() {
        super.click(this.linkAlreadyHaveAnAccount)
    }
}

export default new SignUpPage();