class login {
    get txtUserName() { 
        return cy.get('#txtUsername'); 
    }
    
    get txtPassword() { 
        return cy.get('#txtPassword'); 
    }
    
    get btnLogin()
    {
        return cy.get('#btnLogin');
    }
    
    fillUsername(value){
        this.txtUserName.clear().type(value);
    }
    
    
    fillPassword(value){
        this.txtPassword.clear().type(value);
    }
    
    clickBtnLogin(){
        this.btnLogin.click();
    }
    

}
export default login