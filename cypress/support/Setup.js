
    before(function() {
      cy.fixture('Configuration').then(function(data){
          this.data=data
      })
    })
    
    
    beforeEach(() => {
      
      cy.visit(this.data.url)
    })
  
    
