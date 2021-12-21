import Page from './page'

class SideBarPage extends Page {
    get buttonLogout() {
        return $('.sidenav__logout')
    }

    getLogoutText() {
        return super.getText(this.buttonLogout)
    }

    logout() {
        super.click(this.buttonLogout)
    }
}

export default new SideBarPage();