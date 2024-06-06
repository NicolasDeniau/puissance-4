import { RenderResult, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import Game from "./Game";

describe('Game', () => {
    let renderApp: RenderResult;

    beforeEach(() => {
        renderApp = render(
            <Game />
        );
    })

    afterEach(() => {
        renderApp.unmount();
    })

    it('should have a red player', () => {
        expect(screen.queryByText('Joueur rouge', { selector: 'h3' })).not.toBeNull();
    })

    it('should have a yellow player', () => {
        expect(screen.queryByText('Joueur jaune', { selector: 'h3' })).not.toBeNull();
    })

    it('should have a board', () => {
        expect(renderApp.container.querySelector('.board')).not.toBeNull();
    })

})