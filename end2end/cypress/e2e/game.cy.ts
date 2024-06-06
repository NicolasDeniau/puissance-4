import { describe, it } from "mocha";

describe('Game', () => {
    it('should play begin a game', () => {
        cy.visit('/');
        cy.get('a[href="/jouer"]').click();

        const column = cy.get('.column[data-index="0"]');
        console.log(column);
        column.click();

        column.get('.cell').should('have.class', 'cell-red');
    })
})