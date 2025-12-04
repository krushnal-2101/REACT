import React,  {useState} from "react";
import QUESTION from "../../qns.js";
    

const Quiz = () => {

    const [userAnswer, setUserAnswer] = useState([])

    const qnsIndex = userAnswer.length

    const handleAnswer = (ans) => {
        setUserAnswer((prevAnswer) => [...prevAnswer, ans])
    }

    const quizComplete = qnsIndex === QUESTION.length

    if (quizComplete) {
        return (
            <>
                <h1>QUIZ COMPLETE</h1>
            </>
        )
    }

    const shuffleOption = [...QUESTION[qnsIndex].option]

    shuffleOption.sort(() => Math.random() - 0.5)

    console.log("userAnswer", userAnswer)


    return (
        <>
            <h1>{QUESTION[qnsIndex].qns}</h1>

            <ul>
                {shuffleOption.map((ans) => (
                    <li key={ans}>
                        <button onClick={() => handleAnswer(ans)}>{ans}</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Quiz;