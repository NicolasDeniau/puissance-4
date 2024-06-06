import { RenderResult, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import Column from "./Column";
import { getEmptyMatrix } from "../utils/matrix";
import userEvent from "@testing-library/user-event";

describe('Column', () => {
    let renderApp: RenderResult;
    const matrix = getEmptyMatrix();

    beforeEach(() => {
        renderApp = render(
            <Column index={1} matrix={matrix} />
        )
    })

    afterEach(() => {
        renderApp.unmount();
    })

    it('should have 6 rows', () => {
        expect(renderApp.container.querySelectorAll('.cell').length).toBe(matrix[0].length);
    })

    it('should add a token on click', async () => {
        await userEvent.click(renderApp.container.firstChild as HTMLDivElement);

        const cells = renderApp.container.querySelectorAll('.cell-red, .cell-yellow');
        expect(cells).toHaveLength(1);
    })

    it('should add 6 tokens on click', async () => {
        for (let index = 0; index < 5; index++) {
            await userEvent.click(renderApp.container.firstChild as HTMLDivElement);
        }

        const cells = renderApp.container.querySelectorAll('.cell-red, .cell-yellow');
        expect(cells).toHaveLength(6);
    })

    it('should unactive column when full', async () => {
        for (let index = 0; index < 10; index++) {
            await userEvent.click(renderApp.container.firstChild as HTMLDivElement);
        }

        const cells = renderApp.container.querySelectorAll('.cell-red, .cell-yellow');
        expect(cells).toHaveLength(6);
    })

})