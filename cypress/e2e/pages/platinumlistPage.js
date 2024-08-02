import PlatinumlistLocators from "../locators/platinumlistLocators";

class Platinumlist {
  
  visit() {
    return cy.visit('https://laperle.platinumlist.net/');
  }

  getLogo() {
    return cy.get(PlatinumlistLocators.logoLocator)
      .highlight()
      .should('be.visible');
  }

  getLanguageSwitcherButton() {
    return cy.get(PlatinumlistLocators.languageSwitcherLocator)
      .highlight()
      .should('be.visible');
  }

  getCurrencySwitcherButton() {
    return cy.get(PlatinumlistLocators.currencySwitcherLocator)
      .highlight()
      .should('be.visible');
  }

  getNextButton() {
    return cy.contains(PlatinumlistLocators.nextButtonLocator)
      .should('not.exist');
  }

  getCalendar() {
    cy.get(PlatinumlistLocators.calendarLocator);
    return cy.selectRandomAvailableDate(PlatinumlistLocators.availableDayLocator);
  }

  selectRandomTime() {
    const timeSlots = [
      PlatinumlistLocators.timeSlotOneLocator,
      PlatinumlistLocators.timeSlotTwoLocator
    ];
    const randomIndex = Math.floor(Math.random() * timeSlots.length);
    return cy.get(timeSlots[randomIndex]).highlight().click();
  }

  getSelectButton() {
    return cy.get(PlatinumlistLocators.selectButtonLoactor)
      .highlight()
      .click({force: true});
  }

  getSelectSilver() {
    return cy.get(PlatinumlistLocators.silverSeatLocator)
      .highlight()
      .click();
  }

  getSection() {
    return cy.get(PlatinumlistLocators.sectionLocator)
      .highlight()
      .click();
  }

  getDisplayedDate() {
    return cy.get(PlatinumlistLocators.dateDisplayLocator).invoke('text')
      .then(displayedDate => {
        cy.log('Displayed Date: ', displayedDate);
        cy.get(PlatinumlistLocators.dateDisplayLocator)
          .highlight()
          .should('be.visible')
          .and('contain', displayedDate);
      });
  }

  getSelectRandomSeat() {
    return cy.get(PlatinumlistLocators.randomSeatLocator).then($seats => {
      const randomIndex = Math.floor(Math.random() * $seats.length);
      return cy.wrap($seats[randomIndex]).click({ force: true });
    });
  }

  getAddDinnerOption() {
    return cy.get(PlatinumlistLocators.seatDinnerLocator)
      .highlight()
      .click();
  }

  getAddCheckbox() {
    return cy.get(PlatinumlistLocators.chechboxLocator)
      .highlight()
      .click();
  }

  getSubmit() {
    return cy.get(PlatinumlistLocators.submitLocator)
      .highlight()
      .click();
  }

  getSelectedSeatAndVerifyColor() {
    return cy.get(PlatinumlistLocators.selectedSeatLocator)
      .scrollIntoView()
      .highlight()
      .then(($el) => {
        const fillColor = window.getComputedStyle($el[0]).fill;
        expect(fillColor).to.equal('rgb(55, 167, 248)'); 
      });
  }

  getNext() {
    return cy.get(PlatinumlistLocators.nextButtonLocator).highlight().click();
  }

  getEmail(email) {
    return cy.get(PlatinumlistLocators.emailLocator).highlight().clear().type(email);
  }

  getName(name) {
    return cy.get(PlatinumlistLocators.nameLocator).highlight().clear().type(name);
  }

  getCodeCountry(Country) {
    cy.get(PlatinumlistLocators.codeDropdownLocator).highlight().click().type(Country);
    return cy.contains('span', Country).click();
  }

  getPhone(phone) {
    return cy.get(PlatinumlistLocators.phoneLocator).highlight().clear().type(phone);
  }

  getCountry() {
    cy.get(PlatinumlistLocators.countryDropdownLocator).click();
    return cy.get(PlatinumlistLocators.countryListLocator)
      .should('be.visible')
      .then($options => {
        const randomIndex = Math.floor(Math.random() * $options.length);
        return cy.wrap($options[randomIndex]).click();
      });
  }

  getChechboxSecond() {
    return cy.contains(PlatinumlistLocators.getChechboxSecond, 'I agree').highlight().click();
  }

  verifyEventSummary(expectedText) {
    return cy.get(PlatinumlistLocators.eventSummeryLocator).invoke('text').then(displayedText => {
      cy.log('Displayed Event Summary: ', displayedText);
      return cy.get(PlatinumlistLocators.eventSummeryLocator)
        .highlight()
        .should('be.visible')
        .and('contain', displayedText);
    });
  }

  verifyItemList() {
    return cy.get(PlatinumlistLocators.seatDetailsLocator).invoke('text').then(displayedText => {
      cy.log('Displayed Item List: ', displayedText);
      return cy.get(PlatinumlistLocators.seatDetailsLocator)
        .highlight()
        .should('be.visible')
        .and('contain', displayedText);
    });
  }

  verifyTicketDelivery(expectedEmail) {
    return cy.get(PlatinumlistLocators.tiketDeliverLocator)
      .highlight()
      .should('be.visible')
      .and('contain', expectedEmail);
  }
}

export default Platinumlist;
