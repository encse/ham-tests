import { render } from 'preact';

import { generateQuestion as generatePrefixQuestion } from './prefixes';
import { generateQuestion as generateQCodeQuestion } from './qcodes';
import { Question } from './questions';
import { pick } from './pick';
import { useCallback, useState } from 'preact/hooks';

const avgLimit = 0.6;

const QuestionWidget = (props: { question: Question, checkAnswer: (i: number) => void, correct: "good" | "bad" | "notAnswered", selectedOption: number | "notSelected" }) => {
    let q = props.question;
    let color = props.correct == "good" ? "green" : props.correct == "bad" ? "red" : "";

    return (<div className="option-container">
        <h2>{q.topic}</h2>
        <p>{q.text}</p>
        <button className={props.selectedOption == 0 ? color : ""} onClick={() => props.checkAnswer(0)}>{q.options[0]}</button>
        <button className={props.selectedOption == 1 ? color : ""} onClick={() => props.checkAnswer(1)}>{q.options[1]}</button>
        <button className={props.selectedOption == 2 ? color : ""} onClick={() => props.checkAnswer(2)}>{q.options[2]}</button>
        <button className={props.selectedOption == 3 ? color : ""} onClick={() => props.checkAnswer(3)}>{q.options[3]}</button>
        <div className="feedback">
            {props.correct == "good" && "That's right!"}
            {props.correct == "bad" && "Unfortunately not..."}
        </div>
        <div className="source">
            <a href={props.question.source}>source</a>
        </div>
    </div>)
}


function weight(question: Question): number {
    return (question.failures + 1) / (question.attempts + 1);
}

function reciteOldQuestion(questions: Question[]): number {
    console.log("recite old question");

    let correctedWeight = (q: Question): number => weight(q) < avgLimit ? 0 : weight(q);
    let totalWeight = sum(questions.map(correctedWeight));

    let r = Math.random() * totalWeight;
    let acc = 0;
    for (let i = 0; i < questions.length; i++) {
        acc += correctedWeight(questions[i])
        if (acc > r) {
            return i
        }
    }
    return questions.length - 1;
}

function generateNewQuestion(questions: Question[]): Question {
    console.log("generate new question");

    return pick([
        generatePrefixQuestion,
        generateQCodeQuestion
    ])();
}

function sum(ns: number[]): number {
    let s = 0;
    for (let n of ns) {
        s += n;
    }
    return s
}

function generateQuestion(state: State): State {
    const avgWeight = sum(state.questions.map(weight)) / state.questions.length;
    console.log(state.questions.length, avgWeight);
    if (state.questions.length < 4 || avgWeight < avgLimit) {
        const newQuestion = generateNewQuestion(state.questions)
        return {
            ...state,
            questions: [newQuestion, ...state.questions],
            currentQuestionIndex: 0,
            correct: "notAnswered",
            selectedOption: "notSelected",
        }
    } else {
        return {
            ...state,
            currentQuestionIndex: reciteOldQuestion(state.questions),
            correct: "notAnswered",
            selectedOption: "notSelected",
        }
    }
}

type State = {
    questions: Question[],
    currentQuestionIndex: number,
    correct: "good" | "bad" | "notAnswered"
    selectedOption: number | "notSelected"
}

const initialState =
    generateQuestion({
        questions: [],
        currentQuestionIndex: -1,
        correct: "notAnswered",
        selectedOption: "notSelected"
    });

const App = () => {
    const [state, setState] = useState(initialState);

    const checkAnswer = useCallback((selectedOption: number) => {
        if (state.correct == "good") {
            return
        }

        const question = state.questions[state.currentQuestionIndex];
        const ok = question.options[selectedOption] === question.correctAnswer;
        setState({
            ...state,
            questions: state.questions.map((q, i): Question => {
                if (i == state.currentQuestionIndex) {
                    return {
                        ...q,
                        attempts: q.attempts + 1,
                        failures: q.failures + (!ok ? 1 : 0)
                    }
                } else {
                    return q
                }
            }),
            selectedOption: selectedOption,
            correct: ok ? "good" : "bad"
        })

        if (ok) {
            setTimeout(() => {
                setState(generateQuestion)
            }, 500);
        } else {
            setTimeout(() => {
                setState(state => ({ ...state, correct: "notAnswered", selectedOption: "notSelected" }))
            }, 500);
        }
    }, [state]);

    return (
        <div>
            <QuestionWidget
                question={state.questions[state.currentQuestionIndex]}
                checkAnswer={checkAnswer}
                correct={state.correct}
                selectedOption={state.selectedOption}
            />
        </div>
    );
};

render(<App />, document.body);