describe('template spec',()=>{
  it('valid login', ()=> {
    //nagivating to website
    cy.visit('https://www.saucedemo.com/');
    //locating username field and typing username
    cy.get('#user-name').type ('standard_user')
    //locating password field and typing password
    cy.get('#password').type ('secret_sauce')
    //locating login button and clicking it
    cy.get('#login-button').click();
    //confirming login was succesfull
    cy.get('body')
  })
  })
  describe('tepmplate spec',()=> {
    it('invalid login',()=> {
     //nagivating to website
    cy.visit('https://www.saucedemo.com/');
     //locating username field and typing username
     cy.get('#user-name').type ('standard_user')
     //locating password field and typing password
    cy.get('#password').type ('sauce_secret')
    //locating login button and clicking it
    cy.get('#login-button').click();
    //confirming login was not succesfull
    cy.get('[data-test="error"]')
    })
    })
    describe('Website Navigation Test',() =>{
      it('should navigate through pages',() =>{
         //visit the website homepage
         cy.visit('https://www.saucedemo.com');
         cy.get('#user-name').type ('standard_user')
         cy.get('#password').type ('secret_sauce')
         cy.get('#login-button').click();
         cy.get('body')
         cy.title().should('eq','Swag Labs');
         //Assert that the products page is loaded
         cy.get('#item_4_title_link > .inventory_item_name').click();
         //Assert that the product detail page is loaded
         cy.get('#inventory_item_container')
       })
       })
       describe('Add Items to Cart Test',() =>{
        it('should add items to the cart',() =>{
        //visit the website homepage
        cy.visit('https://www.saucedemo.com/');
        //locating username field and typing username
        cy.get('#user-name').type ('standard_user')
        //locating password field and typing password
        cy.get('#password').type ('secret_sauce')
        //locating login button and clicking it
        cy.get('#login-button').click();
        //confirming login was succesfull
        cy.get('body')
        //Click on a product to view its details
        cy.get('#item_4_title_link > .inventory_item_name')
        //Assert that the product detail page isa loaded
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        //Wait for the item to be added to the cart
        cy.get('.shopping_cart_link').click();
        //Asserting item in the cart
        cy.get('.cart_item')
        })
        })
        describe('Add Items to Cart Test',() =>{
          it('should add items to the cart',() =>{
          //visit the website homepage
          cy.visit('https://www.saucedemo.com/');
          //locating username field and typing username
          cy.get('#user-name').type ('standard_user')
          //locating password field and typing password
          cy.get('#password').type ('secret_sauce')
          //locating login button and clicking it
          cy.get('#login-button').click();
          //confirming login was succesfull
          cy.get('body')
          //Click on a product to view its details
          cy.get('#item_4_title_link > .inventory_item_name')
          //Assert that the product detail page isa loaded
          cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
          //Wait for the item to be added to the cart
          cy.get('.shopping_cart_link').click();
          //Asserting item in the cart
          cy.get('.cart_item')
          //Visit the checkout page
          cy.get('[data-test="checkout"]').click();
          //Fill out the form
          cy.get('[data-test="firstName"]').type('Madhavi');
          cy.get('[data-test="lastName"]').type('Mirdoddi');
          cy.get('[data-test="postalCode"]').type('02910');
          //Submit the form
          cy.get('[data-test="continue"]').click();
          //Check for success message
          cy.get('.cart_item')
          cy.get('[data-test="finish"]').click();
          cy.get('#checkout_complete_container')
          .should('have.text', 'Thank you for your order!Your order has been dispatched, and will arrive just as fast as the pony can get there!Back Home');
          })
          })






      










