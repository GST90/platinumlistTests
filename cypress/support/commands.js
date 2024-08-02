// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('highlight', { prevSubject: 'element' }, (subject) => {
    cy.wrap(subject).then($el => {
      $el.css('border', '2px solid red');
    });
  });

  Cypress.Commands.add('selectRandomAvailableDate', (availableDateSelector) => {
    cy.get(availableDateSelector).then($availableDates => {
      const count = $availableDates.length;
      if (count > 0) {
        const randomIndex = Math.floor(Math.random() * count);
        cy.wrap($availableDates[randomIndex]).click({force: true});
      } else {
        throw new Error('No available dates found');
      }
    });
  });

  Cypress.Commands.add('selectRandomTimeSlot', (timeSlotSelector) => {
    cy.get(timeSlotSelector).then($timeSlots => {
      const count = $timeSlots.length;
      if (count > 0) {
        const randomIndex = Math.floor(Math.random() * count);
        cy.wrap($timeSlots[randomIndex]).click({force: true});
      } else {
        throw new Error('No available time slots found');
      }
    });
  });