import {assert} from 'chai'
import Page from '../pageObjects/page'
import LoginPage from '../pageObjects/login.page'
import SideBarPage from '../pageObjects/sideBar.page'

const {EMAIL, PASSWORD} = process.env

describe('Login Tests', () => {
    beforeEach(() => {
        Page.open('login')
    })

    it('Test a Positive Login', () => {
        LoginPage.fillLoginForm(EMAIL, PASSWORD)
        assert.equal(SideBarPage.getLogoutText(), 'Logout')
        SideBarPage.logout()
    })

    it('Test a Negative Login', () => {
        LoginPage.fillLoginForm('wrong_email@gmail.com', 'testing')
        assert.equal(LoginPage.getAlertMessageText(), 'That email or password is incorrect. Please try again.')
    })
})