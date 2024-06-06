import { Score } from "../@types/Score";
import { getScores } from "./api";

export const highScores = async (): Promise<Array<Score>> => {
    const scores = await getScores();
    scores.sort((a: Score, b: Score) => b.ms - a.ms);
    return scores.slice(0, 3);
}

export const compareScores = (scores: Array<Score>, newScore: Score) => {
    let message = "Oups ! You didn't make it to the top 3 !";
    const bestScore = scores[0];
    const worstScore = scores[2];

    if (scores.length === 0) {
        message = "You are the first winner !";
    }
    else if ( newScore.ms > bestScore.ms ) {
        message = "New records !";
    }
    else if ( !worstScore || newScore.ms > worstScore.ms ) {
        message = "Bravo ! You're in the top 3 !";
    }

    return message;
}