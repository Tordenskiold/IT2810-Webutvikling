/* eslint-disable no-undef */
describe('Testing URL input', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3001');
  });
  it('empty input', () => {
    cy.get('[id=div1]').as('div');
    cy.get('@div')
      .children('[id=urldiv]')
      .as('urldiv');
    cy.get('@urldiv')
      .children('[class=submitButton]')
      .click();
    cy.get('[class=MuiModal-root-1]')
      .children('[class=paper]')
      .children('[class=buttonDiv]')
      .children('[class=modalButton]')
      .click();
  });

  it('invalid input', () => {
    cy.get('[id=div1]').as('div');
    cy.get('@div')
      .children('[id=urldiv]')
      .as('urldiv');
    cy.get('@urldiv')
      .children('[class=submitButton]')
      .click();
    cy.get('[class=MuiModal-root-1]').children('[class=paper]');
    cy.get('[class=MuiModal-root-1]')
      .children('[class=paper]')
      .children('[class=label]')
      .children('[class=modalInput]')
      .type('Hello World')
      .should('have.value', 'Hello World');
    cy.get('[class=MuiModal-root-1]')
      .children('[class=paper]')
      .children('[class=buttonDiv]')
      .children('[class=modalButton]')
      .click();
  });

  it('valid input', () => {
    cy.get('[id=div1]').as('div');
    cy.get('@div')
      .children('[id=urldiv]')
      .as('urldiv');
    cy.get('@urldiv')
      .children('[class=submitButton]')
      .click();
    cy.get('[class=MuiModal-root-1]').children('[class=paper]');
    cy.get('[class=MuiModal-root-1]')
      .children('[class=paper]')
      .children('[class=label]')
      .children('[class=modalInput]')
      .type(/* 'raw.githubusercontent.com/user/projectName/master/README.md' */ 'test')
      .should('have.value', 'test');
    cy.get('[class=MuiModal-root-1]')
      .children('[class=paper]')
      .children('[class=buttonDiv]')
      .children('[class=modalButton]')
      .click();
  });
});

describe('Searching', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3001');
  });
  it('first search', () => {
    cy.get('[id=div1]').as('div');
    cy.get('@div')
      .children('[class=App]')
      .children('div')
      .children('div')
      .children('div')
      .children('[class=MainSearch]')
      .children('input')
      .type('yolo')
      .should('have.value', 'yolo');
    cy.get('@div')
      .children('[class=App]')
      .children('div')
      .children('button')
      .click({ multiple: true, force: true });
  });
  it('second search', () => {
    cy.get('[id=div1]').as('div');
    cy.get('@div')
      .children('[class=App]')
      .children('div')
      .children('div')
      .children('div')
      .children('[class=MainSearch]')
      .children('input')
      .type('yoloflip')
      .should('have.value', 'yoloflip');
    cy.get('@div')
      .children('[class=App]')
      .children('div')
      .children('button')
      .click({ multiple: true, force: true });
  });
  it('third search', () => {
    cy.get('[id=div1]').as('div');
    cy.get('@div')
      .children('[class=App]')
      .children('div')
      .children('div')
      .children('div')
      .children('[class=MainSearch]')
      .children('input')
      .type('Hva var det du sa forno?')
      .should('have.value', 'Hva var det du sa forno?');
    cy.get('@div')
      .children('[class=App]')
      .children('div')
      .children('button')
      .click({ multiple: true, force: true });
  });
  it('fourth search', () => {
    cy.get('[id=div1]').as('div');
    cy.get('@div')
      .children('[class=App]')
      .children('div')
      .children('div')
      .children('div')
      .children('[class=MainSearch]')
      .children('input')
      .type('dylan')
      .should('have.value', 'dylan');
    cy.get('@div')
      .children('[class=App]')
      .children('div')
      .children('button')
      .click({ multiple: true, force: true });
  });
});

describe('Using calendar', () => {
  it('calendar number one', () => {
    cy.get('[id=div1]').as('div');
    cy.get('@div')
      .children('[class=App]')
      .children('[class=Row]')
      .children('[class=firstDiv]')
      .children('[class=react-datepicker-wrapper]')
      .children('[class=react-datepicker__input-container]')
      .children('button')
      .click();
    cy.get('@div')
      .children('[class=App]')
      .children('[class=Row]')
      .children('[class=firstDiv]')
      .children('[class=react-datepicker-popper]')
      .children('[class=react-datepicker]')
      .children('[class=react-datepicker__month-container]')
      .children('[class=react-datepicker__month]')
      .children('[class=react-datepicker__week]')
      .children('[aria-label=day-4]')
      .click();
    cy.get('[id=div1]').as('div');
    cy.get('@div')
      .children('[class=App]')
      .children('[class=Row]')
      .children('[class=firstDiv]')
      .children('[class=react-datepicker-wrapper]')
      .children('[class=react-datepicker__input-container]')
      .children('button')
      .click();
    cy.get('@div')
      .children('[class=App]')
      .children('[class=Row]')
      .children('[class=firstDiv]')
      .children('[class=react-datepicker-popper]')
      .children('[class=react-datepicker]')
      .children('[class=react-datepicker__month-container]')
      .children('[class=react-datepicker__month]')
      .children('[class=react-datepicker__week]')
      .children('[aria-label=day-6]')
      .click();
  });
  it('calendar number two', () => {
    cy.get('[id=div1]').as('div');
    cy.get('@div')
      .children('[class=App]')
      .children('[class=Row]')
      .children('[class=myDiv]')
      .children('[class=react-datepicker-wrapper]')
      .children('[class=react-datepicker__input-container]')
      .children('button')
      .click();
    cy.get('@div')
      .children('[class=App]')
      .children('[class=Row]')
      .children('[class=myDiv]')
      .children('[class=react-datepicker-popper]')
      .children('[class=react-datepicker]')
      .children('[class=react-datepicker__month-container]')
      .children('[class=react-datepicker__month]')
      .children('[class=react-datepicker__week]')
      .children('[aria-label=day-24]')
      .click();
    cy.get('[id=div1]').as('div');
    cy.get('@div')
      .children('[class=App]')
      .children('[class=Row]')
      .children('[class=myDiv]')
      .children('[class=react-datepicker-wrapper]')
      .children('[class=react-datepicker__input-container]')
      .children('button')
      .click();
    cy.get('@div')
      .children('[class=App]')
      .children('[class=Row]')
      .children('[class=myDiv]')
      .children('[class=react-datepicker-popper]')
      .children('[class=react-datepicker]')
      .children('[class=react-datepicker__month-container]')
      .children('[class=react-datepicker__month]')
      .children('[class=react-datepicker__week]')
      .children('[aria-label=day-21]')
      .click();
  });
});

describe('Scrolling/Pagination', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3001');
  });
  it('scrolls', () => {
    cy.get('[id=div1]').as('div');
    cy.get('@div').should('contain', 8);
    cy.get('@div')
      .children('[id=next]')
      .click();
    cy.get('@div')
      .children('[id=next]')
      .click();
    cy.get('@div').children('[id=next]');
    cy.get('@div').children('[id=p]');
    cy.get('@div')
      .children('[id=urldiv]')
      .as('urldiv');
  });
});

describe('Filters', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3001');
  });
  it('user input', () => {
    cy.get('[id=div1]').as('div');
    cy.get('@div')
      .children('[class=App]')
      .children('[class=Row]')
      .children('[id=dropdown1]')
      .children('[class=css-10nd86i]')
      .children('[class=css-vj8t7z]')
      .children('[class=css-1wy0on6]')
      .children('[class=css-d8oujb]')
      .click({ force: true });
    cy.get('@div')
      .children('[class=App]')
      .children('[class=Row]')
      .children('[id=dropdown1]')
      .children('[class=css-10nd86i]')
      .children('[class=css-15k3avv]')
      .children('[class=css-11unzgr]')
      .children('[id=react-select-2-option-2]')
      .click();
  });
  it('sort by', () => {
    cy.get('[id=div1]').as('div');
    cy.get('@div')
      .children('[class=App]')
      .children('[class=Row]')
      .children('[id=dropdown2]')
      .children('[class=css-10nd86i]')
      .children('[class=css-vj8t7z]')
      .children('[class=css-1wy0on6]')
      .children('[class=css-d8oujb]')
      .click({ force: true });
    cy.get('@div')
      .children('[class=App]')
      .children('[class=Row]')
      .children('[id=dropdown2]')
      .children('[class=css-10nd86i]')
      .children('[class=css-15k3avv]')
      .children('[class=css-11unzgr]')
      .children('[id=react-select-3-option-2]')
      .click();
  });
});
