import { RenderResult, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, expect } from "vitest";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { describe, it } from "vitest";
import userEvent from '@testing-library/user-event';
import App from "./App";

describe('router', () => {
    let renderApp: RenderResult;

    beforeEach(() => {
        renderApp = render(
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        );
    })

    afterEach(() => {
        renderApp.unmount();
    })

    it('should be to the home page at the start', () => {
        expect(screen.queryByText('Accueil', { selector: 'h2' })).not.toBeNull();
    })

    it('should navigate to the scores page when the scores link is clicked', async () => {
        await userEvent.click(screen.getByText('Scores', { selector: 'a' }));

        expect(screen.queryByText('Scores', { selector: 'h2' })).not.toBeNull();
    })

    it('should navigate to the play page when the play link is clicked', async () => {
        await userEvent.click(screen.getByText('Jouer', { selector: 'a' }));

        expect(screen.queryByText('Jouer', { selector: 'h2' })).not.toBeNull();
    })

    it('should navigate to the home page when the home link is clicked', async () => {
        await userEvent.click(screen.getByText('Accueil', { selector: 'a' }));

        expect(screen.queryByText('Accueil', { selector: 'h2' })).not.toBeNull();
    })

    it('should navigate to the not found page when link not exist', () => {
        render(
            <MemoryRouter initialEntries={['/fake-route']}>
                <App />
            </MemoryRouter>
        )

        expect(screen.queryByText('404 - Page non trouvé', { selector: 'h2' })).not.toBeNull();
    })

})