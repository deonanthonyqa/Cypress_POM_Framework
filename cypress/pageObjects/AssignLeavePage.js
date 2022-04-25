class AssignLeavePage {
    get txtEmployeeName() { 
        return cy.get('#assignleave_txtEmployee_empName'); 
    }
    
    get ddLeaveType() { 
        return cy.get('#assignleave_txtLeaveType'); 
    }
    
    get txtFromDate()
    {
        return cy.get('#assignleave_txtFromDate');
    }
    
    get txtToDate(){
        return cy.get('#assignleave_txtToDate');
    }
    
    get txtComment(){
        return cy.get('#assignleave_txtComment')
    }

    get btnAssign(){
        return cy.get('#assignBtn')
    }
    
    fillEmployeeName(value){
        this.txtEmployeeName.type(value);
    }

    fillFromDate(value){
        this.txtFromDate.type(value)
    }

    fillToDate(value){
        this.txtToDate.type(value)
    }
    
    fillComment(value){
        this.txtComment.type(value)
    }

    selectddLeaveType(value){
        this.ddLeaveType.select(value).should('have.value', value)


    }

    clickBtnAssign(){
        this.btnAssign.click()
    }

    clickTxtComment(){
        this.txtEmployeeName.click()
    }

}
export default AssignLeavePage