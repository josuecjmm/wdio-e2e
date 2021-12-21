import {assert} from 'chai'
import Page from '../pageObjects/page'
import LoginPage from '../pageObjects/login.page'
import RequestsPage from '../pageObjects/requests.page'

const {EMAIL, PASSWORD} = process.env

describe('Requests Tests', () => {
    before(() => {
        Page.open('login')
        LoginPage.fillLoginForm(EMAIL, PASSWORD)
    })

    it('Test the creation of a new request', () => {
        RequestsPage.accessCreateStudyRequest()
        assert.equal(RequestsPage.getTitleText(), 'Create Study Request')
        assert.equal(RequestsPage.getStepsText(), 'Step 1 of 2')
        RequestsPage.fillStepOneForm()
        assert.equal(RequestsPage.getStepsText(), 'Step 2 of 2')
        RequestsPage.fillStepTwoForm()
        assert.equal(RequestsPage.getAlertText(), 'Submission success!')
    })
})