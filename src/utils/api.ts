export const getScores = async () => {
    try {
        const response = await fetch('https://fakedomain.com/api/scores');

        if (!response.ok) return [];

        return await response.json();

    } catch (error) {
        return [];
    }
}