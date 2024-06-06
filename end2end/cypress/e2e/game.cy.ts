import { describe, it } from "mocha";

describe('Game', () => {
    it('should play begin a game', () => {
        cy.visit('/');
        cy.get('a[href="/jouer"]').click();

        const column = cy.get('.column[data-index="0"]');
        column.click();

        column.get('.cell').should('have.class', 'cell-red');
    })

    it('should alternate token player color', () => {
        cy.visit('/jouer');

        const column = cy.get('.column[data-index="0"]');
        column.click();
        column.click();

        column.get('.cell[data-index="1"]').should('have.class', 'cell-yellow');
    })

    it('should win the game', () => {
        cy.visit('/jouer');

        const columnOne = cy.get('.column[data-index="0"]');
        const columnTwo = cy.get('.column[data-index="1"]');
        columnOne.click();
        columnTwo.click();
        columnOne.click();
        columnTwo.click();
        columnOne.click();
        columnTwo.click();
        columnOne.click();

        cy.get('.game-status').should('have.text', 'Red win !');
    })
})