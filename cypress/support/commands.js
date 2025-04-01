
Cypress.Commands.add('login', (email, password) => {
  cy.contains('button', 'Sign In').click();
  cy.get('form input[name="email"]').type(email);
  cy.get('form input[name="password"]').type(password);
  cy.contains('button', 'Login').click()
});

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    // turn off original log
    options.log = false
    // create our own log with masked message
    Cypress.log({
      $el: element,
      name: 'type',
      message: '*'.repeat(text.length),
    })
  };
  return originalFn(element, text, options);
});