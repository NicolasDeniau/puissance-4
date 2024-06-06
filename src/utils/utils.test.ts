import { MockInstance, afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import * as api from './api';
import { Score } from "../@types/Score";
import { compareScores, highScores } from "./utils";

const apiScores: Array<Score> = [
    {name: 'Pierre', ms: 5100 },
    {name: 'Paul', ms: 2200 },
    {name: 'Jack', ms: 1300 },
    {name: 'Piere', ms: 4500 },
    {name: 'Poll', ms: 500 },
    {name: 'Jaq', ms: 3400 },
];

describe('Highscores', () => {
    let mockGetScores: MockInstance<[], Promise<Score[]>>;

    beforeEach(() => {
        mockGetScores = vi.spyOn(api, 'getScores');
    })

    afterEach(() => {
        mockGetScores.mockRestore();
    })

    it('should return the top 3 scores', async () => {
        // Arrange
        mockGetScores.mockResolvedValue(apiScores);

        // Act
        const scores = await highScores();

        // Assert
        expect(mockGetScores).toHaveBeenCalled();
        expect(scores).toEqual([
            {name: 'Pierre', ms: 5100 },
            {name: 'Piere', ms: 4500 },
            {name: 'Jaq', ms: 3400 },
        ])
    })

    it('should return a fail message if not in the top 3', async () => {
        // Arrange
        mockGetScores.mockResolvedValue(apiScores);
        const newScore: Score = {name: 'John', ms: 600};

        // Act
        const scores = await highScores();
        const message = compareScores(scores, newScore);

        // Assert
        expect(message).toBe("Oups ! You didn't make it to the top 3 !");
    })

    it('should return a message "you are the first winner" if there are no scores', async () => {
        // Arrange
        mockGetScores.mockResolvedValue([]);
        const newScore: Score = {name: 'John', ms: 600};

        // Act
        const scores = await highScores();
        const message = compareScores(scores, newScore);

        // Assert
        expect(message).toBe("You are the first winner !");
    })

    it('should return a message in the top 3 if there are only one score', async () => {
        // Arrange
        mockGetScores.mockResolvedValue([
            {name: 'Pierre', ms: 3000}
        ]);
        const newScore: Score = {name: 'John', ms: 600};

        // Act
        const scores = await highScores();
        const message = compareScores(scores, newScore);

        // Assert
        expect(message).toBe("Bravo ! You're in the top 3 !");
    })

    it('should return a message in the top 3 if there are more scores', async () => {
        // Arrange
        mockGetScores.mockResolvedValue(apiScores);
        const newScore: Score = {name: 'John', ms: 3800};

        // Act
        const scores = await highScores();
        const message = compareScores(scores, newScore);

        // Assert
        expect(message).toBe("Bravo ! You're in the top 3 !");
    })

    it('should return a new record if it is first of top 3', async () => {
        // Arrange
        mockGetScores.mockResolvedValue(apiScores);
        const newScore: Score = {name: 'John', ms: 6000};

        // Act
        const scores = await highScores();
        const message = compareScores(scores, newScore);

        // Assert
        expect(message).toBe("New records !");
    })
})