import { describe, expect, it, vi } from "vitest";
import { Score } from "../@types/Score";
import { getScores } from "./api";

const apiScores: Array<Score> = [
    {name: 'Pierre', ms: 5100 },
    {name: 'Paul', ms: 2200 },
    {name: 'Jack', ms: 1300 },
    {name: 'Piere', ms: 4500 },
    {name: 'Poll', ms: 500 },
    {name: 'Jaq', ms: 3400 },
];

describe('API get scores', () => {

    it('should return a list of scores', async () => {
        // Arrange
        const fetchMock = vi.spyOn(globalThis, 'fetch');
        fetchMock.mockResolvedValue(new Response(JSON.stringify(apiScores)));

        // Act
        const scores = await getScores();

        // Assert
        expect(scores).toEqual(apiScores);

        fetchMock.mockRestore();
    })

    it('should handle API error response by returning an empty array', async () => {
        // Arrange
        const fetchMock = vi.spyOn(globalThis, 'fetch');
        fetchMock.mockResolvedValue(new Response(null, {status: 404}));

        // Act
        const scores = await getScores();

        // Assert
        expect(scores).toEqual([]);

        fetchMock.mockRestore();
    })

    it('should handle uncaught error by returning an empty array', async () => {
        // Arrange
        const fetchMock = vi.spyOn(globalThis, 'fetch');
        fetchMock.mockRejectedValue(new Error('API error'));

        // Act
        const scores = await getScores();

        // Assert
        expect(scores).toEqual([]);

        fetchMock.mockRestore();
    })
})