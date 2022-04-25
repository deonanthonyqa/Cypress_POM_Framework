
import HomePage from '../pageObjects/HomePage'
import AssignLeavePage from '../pageObjects/AssignLeavePage'

describe('LoginTest', function () {
    
    const home = new HomePage()
    const asl = new AssignLeavePage()
    //Cypress.Cookies.preserveOnce('session_id', 'remember_token')

    it('Sign in', function () {
        cy.log('Inside Test')
        home.clickImgAssignLeave()
        asl.fillEmployeeName('Deon')
        asl.selectddLeaveType('2')
        asl.fillFromDate('2022-04-14')
        asl.clickTxtComment()
        asl.fillToDate('2022-04-16')
        asl.clickTxtComment()
        asl.fillComment('Test Comment')
        asl.clickBtnAssign()
        cy.end
    })
})