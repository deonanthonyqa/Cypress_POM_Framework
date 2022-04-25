class HomePage {
    get imgAssignLeave() { 
        return cy.get('a[href="/index.php/leave/assignLeave"][target="_self"]'); 
    }
    
    get lblMenuAdmin() { 
        return cy.get('#txtPassword'); 
    }
    
    get lblMenuPIM()
    {
        return cy.get('#btnLogin');
    }
    
    clickImgAssignLeave(){
        this.imgAssignLeave.click();
    }
    
    

    

}
export default HomePage