import Page from './page'
import faker from 'faker'

class RequestsPage extends Page {
    get buttonCreateStudyRequest(){
        return $('.create-request-button-container a')
    }

    get alert() {
        return $('.alert__message')
    }

    get title() {
        return $('.form h1')
    }

    get textSteps() {
        return $('.wizard__steps')
    }

    get stepOneForm() {
        return {
            name: $('#name'),
            dropdowns: {
                project: $$('.Dropdown-control')[0],
                study: $$('.Dropdown-control')[1],
                market: $$('.Dropdown-control')[2],
            },
            goals: $('#client-goals'),
            audience: {
                number1: $$('.toggle--audience__label')[0],
                number2: $$('.toggle--audience__label')[1],
                number3: $$('.toggle--audience__label')[3]
            }
        }
    }

    accessCreateStudyRequest(){
        super.click(this.buttonCreateStudyRequest)
    }

    getAlertText(){
        return super.getText(this.alert)
    }

    getTitleText(){
        return super.getText(this.title)
    }

    getStepsText(){
        return super.getText(this.textSteps)
    }

    selectOnDropdown(dropdown, text) {
        super.click(dropdown)
        super.clickOnElementWithText(text)
    }

    fillStepOneForm(){
        super.sendKeys(
            this.stepOneForm.name,
            `test${faker.company.companySuffix()}-${faker.datatype.number()}`
        )
        this.selectOnDropdown(this.stepOneForm.dropdowns.project, 'QA Projects')
        this.selectOnDropdown(this.stepOneForm.dropdowns.study, 'Concept')
        super.sendKeys(
            this.stepOneForm.goals,
            faker.lorem.paragraph()
        )
        super.click(this.stepOneForm.audience.number1)
        super.clickOnElementWithText('Next Step')
    }

    fillStepTwoForm() {
        super.clickOnElementWithText('Submit')
    }
}

export default new RequestsPage();