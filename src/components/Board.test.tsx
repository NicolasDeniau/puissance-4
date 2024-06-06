import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Board from "./Board";
import { getEmptyMatrix } from "../utils/matrix";

describe('Board', () => {
    it('should have 7 columns', () => {
        const matrix = getEmptyMatrix();
        const {container} = render(
            <Board matrix={matrix} />
        )

        expect(container.querySelectorAll('.column').length).toBe(matrix.length);
    })
})