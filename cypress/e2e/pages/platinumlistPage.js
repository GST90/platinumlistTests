import PlatinumlistLocators from "../locators/platinumlistLocators";

class Platinumlist {
  
  visit() {
    cy.visit('https://laperle.platinumlist.net/');
  }

    getLogo() {
      cy.get(PlatinumlistLocators.logoLocator)
      .highlight()
      .should('be.visible')
    };

    getLanguageSwitcherButton() {
      cy.get(PlatinumlistLocators.languageSwitcherLocator)
      .highlight()
      .should('be.visible')
  };

    getCurrencySwitcherButton() {
      cy.get(PlatinumlistLocators.currencySwitcherLocator)
      .highlight()
      .should('be.visible')
    };

    getNextButton() {
      cy.contains(PlatinumlistLocators.nextButtonLocator)
      .should('not.exist')
    };

    getCalendar() {
      cy.get(PlatinumlistLocators.calendarLocator);
      cy.selectRandomAvailableDate(PlatinumlistLocators.availableDayLocator);
    }

    selectRandomTime() {
      const timeSlots = [
        PlatinumlistLocators.timeSlotOneLocator,
        PlatinumlistLocators.timeSlotTwoLocator
      ];
      const randomIndex = Math.floor(Math.random() * timeSlots.length);
      cy.get(timeSlots[randomIndex]).highlight().click();
    };

    getSelectButton() {
      cy.get(PlatinumlistLocators.selectButtonLoactor)
      .highlight()
      .click({force: true});
    };

    getSelectSilver() {
      cy.get(PlatinumlistLocators.silverSeatLocator)
      .highlight()
      .click();
    };

    getSection() {
      cy.get(PlatinumlistLocators.sectionLocator)
      .highlight()
      .click();
    };

    getDisplayedDate() {
      return cy.get(PlatinumlistLocators.dateDisplayLocator).invoke('text').
      then(displayedDate => {
        cy.log('Displayed Date: ', displayedDate);
        cy.get(PlatinumlistLocators.dateDisplayLocator)
          .highlight()
          .should('be.visible')
          .and('contain', displayedDate);
      });
    };

    getSelectRandomSeat() {
      cy.get(PlatinumlistLocators.randomSeatLocator).then($seats => {
        const randomIndex = Math.floor(Math.random() * $seats.length);
        cy.wrap($seats[randomIndex]).click({ force: true });
        
      });
    };

    getAddDinnerOption() {
      cy.get(PlatinumlistLocators.seatDinnerLocator)
      .highlight()
      .click();
    };

    getAddCheckbox() {
      cy.get(PlatinumlistLocators.chechboxLocator)
      .highlight()
      .click();
    };

    getSubmit() {
      cy.get(PlatinumlistLocators.submitLocator)
      .highlight()
      .click();
    };

  getSelectedSeatAndVerifyColor() {
    cy.get(PlatinumlistLocators.selectedSeatLocator)
    .scrollIntoView()
    .highlight()
    .then(($el) => {
      const fillColor = window.getComputedStyle($el[0]).fill;
      expect(fillColor).to.equal('rgb(55, 167, 248)'); 
  });
};

  getNext() {
    cy.get(PlatinumlistLocators.nextButtonLocator).highlight().click();
  };

  getEmail(email) {
    cy.get(PlatinumlistLocators.emailLocator).highlight().clear().type(email);
  };

  getName(name) {
    cy.get(PlatinumlistLocators.nameLocator).highlight().clear().type(name);
  };

  getCodeCountry (Country) {
    cy.get(PlatinumlistLocators.codeDropdownLocator).highlight().click().type(Country);
    cy.contains('span', Country).click();
  };

  getPhone(phone) {
    cy.get(PlatinumlistLocators.phoneLocator).highlight().clear().type(phone);
  };

  getCountry() {
    cy.get(PlatinumlistLocators.countryDropdownLocator).click();
    cy.get(PlatinumlistLocators.countryListLocator)
        .should('be.visible')
        .then($options => {
            const randomIndex = Math.floor(Math.random() * $options.length);
            cy.wrap($options[randomIndex]).click();
        });
};

  getChechboxSecond() {
    cy.contains(PlatinumlistLocators.getChechboxSecond, 'I agree').highlight().click()
  };

  verifyEventSummary(expectedText) {
    return cy.get(PlatinumlistLocators.eventSummeryLocator).invoke('text').then(displayedText => {
      cy.log('Displayed Event Summary: ', displayedText);
      cy.get(PlatinumlistLocators.eventSummeryLocator)
        .highlight()
        .should('be.visible')
        .and('contain', displayedText);
    });
  };

  verifyItemList() {
    return cy.get(PlatinumlistLocators.seatDetailsLocator).invoke('text').then(displayedText => {
      cy.log('Displayed Item List: ', displayedText);
      cy.get(PlatinumlistLocators.seatDetailsLocator)
        .highlight()
        .should('be.visible')
        .and('contain', displayedText);
    });
  };

  verifyTicketDelivery(expectedEmail) {
    cy.get(PlatinumlistLocators.tiketDeliverLocator)
        .highlight()
        .should('be.visible')
        .and('contain', expectedEmail);
  };
};

export default Platinumlist;
