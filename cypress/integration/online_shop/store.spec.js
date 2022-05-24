//Visit store

describe("visit store", () => {
  it("visit store", function () {
    cy.visit("http://localhost:3000");
  });
});

//check out one pruduct
describe("add ,remove ,increase ,decrease, product", () => {
  //we have 20 product
  it("get all products", function () {
    cy.get(".product_product__8NFYa").should("have.length", 20);
  });


  //increase 4 product
  it("increase 4 product", function () {
    for (var i = 0; i < 4; i++) {
      cy.get(`[data-testid=product-button-${product_count}]`).click();
      cy.wait(1000);
    }
   
  }); 

  //remove product
  it("remove product", function () {
    for (var i = 0; i < 4; i++) {
    cy.get(`[data-testid=product-button-decrease-${product_count}]`).click();
    cy.wait(1000);
    }
    cy.wait(3000);
  }); 

 // add to card multi products
  it("add to card multi products", function () {
    let product_count = random_number(10);
    for (var i = 0; i < product_count; i++) {
      cy.get(`[data-testid=product-button-${random_number(20)}]`).click();
      cy.wait(1000);
    }  
 });

 
});

describe("checkout", () => {
    
        it("go to shop card", function () {
            cy.get(".navbar_container__kRWCp div a").click();
            cy.wait(1000);
          });

          it("click checkout", function () {
            cy.get(".shopCard_check_out__XWR45").click();
            cy.wait(2000);
          });

          //buy more
          it("buy more", function () {
            cy.get(".shopCard_clear_checkout_div__lKoz0 a").click();
            
          });
   
  });

//this function can create random number between 1 to max_random
function random_number(max_random) {
  let rand = 0;
  rand = Math.floor(Math.random() * max_random) + 1;
  return rand;
}

let product_count = random_number(20);