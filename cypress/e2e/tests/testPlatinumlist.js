import Platinumlist from "../pages/platinumlistPage";

const platinumlist = new Platinumlist();


describe('Platinumlist test suite', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

  before(`Open the Platinumlist app`, () => {
    platinumlist.visit();
  });

  it('Verify that folowing elements are displayed on the page', () => {
    cy.log(`Observe Logo is displayed`)
    platinumlist.getLogo();
    cy.log(`Observe Language Switcher Button is displayed`)
    platinumlist.getLanguageSwitcherButton();
    cy.log(`Observe Currency Switcher Button is displayed`)
    platinumlist.getCurrencySwitcherButton();
    cy.log(`Observe Next Button is not displayed`)
    platinumlist.getNextButton()
  });
  
  it('Verify that info about chosen date is displayed on the arena map', () => {
    cy.log(`Selected random Month -> Day`)
    platinumlist.getCalendar();
    cy.log(`Select random Time`)
    platinumlist.selectRandomTime();
    cy.log(`Select the Event`)
    platinumlist.getSelectButton();
    cy.log(`Select ticket type`)
    platinumlist.getSelectSilver();
    cy.log(`Select Section`)
    platinumlist.getSection();
    cy.log(`Observe the Date is displayed in the header`)
    platinumlist.getDisplayedDate();
  });

  it('Verify that selected Seat is blue', () => {
    cy.log(`Select random available seat`)
    platinumlist.getSelectRandomSeat();
    cy.log(`Add Dinner`)
    platinumlist.getAddDinnerOption();
    cy.log(`Click checkbox`)
    platinumlist.getAddCheckbox();
    cy.log(`Click Submit`)
    platinumlist.getSubmit();
    cy.log(`Check the seat is blue`)
    platinumlist.getSelectedSeatAndVerifyColor();
  });

  it('Verify that order details page contain info about ticket', () => {
    platinumlist.getNext();
    const email = 'tegon25554@fuzitea.com'
    const name = 'Test User'
    const codeCountry = 'United States of America'
    const phone = '9293091801'
    const expectedEmail = `After purchasing, your tickets will be sent to ${email}`
    cy.log(`Type email: ${email}`)
    platinumlist.getEmail(email);
    cy.log(`Type name: ${name}`)
    platinumlist.getName(name);
    cy.log(`Select country code`)
    platinumlist.getCodeCountry(codeCountry);
    cy.log(`Type your phone number: ${phone}`)
    platinumlist.getPhone(phone);
    cy.log(`Select random country`)
    platinumlist.getCountry();
    cy.log(`Click Next`)
    platinumlist.getNext();
    cy.log(`Click checkbox`)
    platinumlist.getChechboxSecond();
    cy.log(`Click Next`)
    platinumlist.getNext();
    cy.log(`Check that the event summary contains the expected values.`)
    platinumlist.verifyEventSummary();
    cy.log(`Check that the Iten list contains the expected values.`)
    platinumlist.verifyItemList()
    cy.log(`Check that the Ticket Delivery contains the expected values.`)
    platinumlist.verifyTicketDelivery(expectedEmail)
  });

  afterEach('Take a Screenshot', () => {
    cy.screenshot({ capture: 'viewport' });
  });

  after('clean Cookie', () => {
    cy.clearAllLocalStorage();
    cy.clearCookies();
    cy.getCookies().should('be.empty');
  });
});

