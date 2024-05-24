import { pick, pickN } from "./pick";

export type Question = {
    readonly topic: string;
    readonly text: string;
    readonly correctAnswer: string;
    readonly options: readonly string[];
    readonly source: string;
    readonly attempts: number;
    readonly failures: number;
};

function makeOptions(items: string[]): string[] {
    items = [...items];
    items.sort(_ => Math.random() - 0.5);
    return items
}

export type Pairs = Array<[string, string]>
export type QuestionText = (option: string) => string;

export function generateForward(topic: string, source: string, questionText: QuestionText, pairs: Pairs): Question {
    let pair = pick(pairs);

    const wrongAnswers = pickN(pairs.filter(p => p[0] != pair[0]).map(p => p[1]), 3);

    return {
        topic: topic,
        text: questionText(pair[0]),
        correctAnswer: pair[1],
        options: makeOptions([pair[1], ...wrongAnswers]),
        source: source,
        attempts: 0,
        failures: 0,
    }
}

export function generateBackward(topic: string,  source: string, questionText: QuestionText, pairs: Pairs): Question {
    return generateForward(topic, source, questionText, pairs.map(p => [p[1], p[0]]));
}

export function generateGoodPair(topic: string,  source: string, pairs: Pairs): Question {
    let items = pickN(pairs, 4);
    const correctAnswer = format(items[0])
    const wrongAnswers = items.slice(1).map(x => makeItWrong(x, pairs)).map(format);
    return {
        topic: topic,
        text: `Select the correct one.`,
        correctAnswer: correctAnswer,
        options: makeOptions([correctAnswer, ...wrongAnswers]),
        source: source,
        attempts: 0,
        failures: 0
    }
}


export function generateBadPair(topic: string, source: string, pairs: Pairs): Question {
    let items = pickN(pairs, 4);
    const correctAnswer = format(makeItWrong(items[0], pairs)),
    const wrongAnswers = items.slice(1).map(format),
    return {
        topic: topic,
        text: `Select the wrong one.`,
        correctAnswer: correctAnswer,
        options: makeOptions([correctAnswer, ...wrongAnswers]),
        source: source,
        attempts: 0,
        failures: 0,
    }
}

function makeItWrong(item: [string, string], pairs: [string, string][]): [string, string] {
    let badChoices = pairs.filter(x => x[0] != item[0]).map(x => x[1]);
    return [item[0], pick(badChoices)];
}

function format(pair: [string, string]): string {
    return `${pair[0]} - ${pair[1]}`;
}
