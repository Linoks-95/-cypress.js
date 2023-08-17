describe('Длинный автотест HuntingPony', function () {
    it('Проверка', function () {
         cy.visit('https://huntingpony.com');
         cy.get('[data-index="2"] > .header__collections-controls > .header__collections-link').click();
         cy.get('[data-product-id="338932745"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
         cy.get('.add-cart-counter__btn').click();
         cy.wait(1000);
         cy.get('[data-add-cart-counter-plus=""]').click();
         cy.get('.header__cart > .icon').click();
         cy.get('.cart-controls > .button').click();
         cy.get('#client_surname').type('Власов')
         cy.get('#client_contact_name').type('Василий');
         cy.get('#client_phone').type('89119034650');
         cy.get('#client_email').type('met-95.95@MediaList.ru');
         cy.get('#shipping_address_street').type('Комендантский проспект');
         cy.get('#shipping_address_house').type('21 к2');
         cy.get('#shipping_address_flat').type('162');
         cy.get('#order_comment').type('test');
         cy.get('#order_field_24333471').type('tester');
         cy.get('#order_field_24333473').type('17.08.2023')
         cy.get('.co-delivery_method-list > .co-input--captcha > .g-recaptcha > [style="width: 304px; height: 78px;"] > div > iframe').click();
         // Дальше мне не выполнить проверку, т.к. там есть капча, но сделаем проверку на это
         cy.get('#client_contact_name').should('be.visible');
        
             })
            })