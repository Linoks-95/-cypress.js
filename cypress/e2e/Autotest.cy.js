describe('Тестирование формы логина и пароля', function () {
    it('Проверка, что при вводе верного логина и пароля', function () {
         cy.visit('https://login.qa.studio');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.contains('Авторизация прошла успешно').should('be.visible');
             })
    
    it('Проверка, проверка функции восстановления пароля', function () {
    cy.visit('https://login.qa.studio');
    cy.get('#mail').type('met-95.95@mail.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#forgotEmailButton').click();
    cy.get('#mailForgot').type('met-95.95@mail.ru')
    cy.get('#restoreEmailButton').click();
    cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
    cy.get('#exitMessageButton').should('be.visible');
            })

    it('Проверка, что при вводе верного логина и не верного пароля', function () {
    cy.visit('https://login.qa.studio');
    cy.get('#loginButton').should('be.disabled'); 
    cy.get('#mail').type('german@dolnikov.ru');
    cy.get('#loginButton').should('be.disabled');
    cy.get('#pass').type('iLoveqastudio12');
    cy.get('#loginButton').should('be.enabled');
    cy.get('#loginButton').click();
    cy.contains('Такого логина или пароля нет').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
             })


    it('Проверка, что при вводе не верного логина и верного пароля', function () {
    cy.visit('https://login.qa.studio');
    cy.get('#loginButton').should('be.disabled'); 
    cy.get('#mail').type('german@delnikov.ru');
    cy.get('#loginButton').should('be.disabled');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').should('be.enabled');
    cy.get('#loginButton').click();
    cy.contains('Такого логина или пароля нет').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                         })


    it('Проверка, что при отсутствии @', function () {
    cy.visit('https://login.qa.studio');
    cy.get('#loginButton').should('be.disabled'); 
    cy.get('#mail').type('germandolnikov.ru');
    cy.get('#loginButton').should('be.disabled');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').should('be.enabled');
    cy.get('#loginButton').click();
    cy.contains('Нужно исправить проблему валидации').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                          })

                          
    it('Проверка, что при использовании строчных букв в логине', function () {
    cy.visit('https://login.qa.studio');
    cy.get('#loginButton').should('be.disabled'); 
    cy.get('#mail').type('GerMan@Dolnikov.ru');
    cy.get('#loginButton').should('be.disabled');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').should('be.enabled');
    cy.get('#loginButton').click();
    cy.contains('Такого логина или пароля нет').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                           })

 })  