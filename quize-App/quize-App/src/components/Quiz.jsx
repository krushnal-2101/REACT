import React,  {useState} from "react";
import QUESTION from "../../qns.js";
    

const Quiz = () => {

    const [userAnswer, setUserAnswer] = useState([])

    const [answerState, setAnswerState] = useState("")

  const qnsIndex =
    answerState === "" ? userAnswer.length : userAnswer.length - 1;

   const handleAnswer = useCallback((ans) => {
    setUserAnswer((prevAnswer) => [...prevAnswer, ans]);

    setAnswerState("selected");

    setTimeout(() => {
      if (ans === QUESTIONS[qnsIndex].option[0]) {
        setAnswerState("correct");
      } else {
        setAnswerState("wrong");
      }

      setTimeout(() => {
        setAnswerState("");
      }, 1000);
    }, 1000);
  }, []);


  console.log(answerState)

    const quizComplete = qnsIndex === QUESTION.length

    if (quizComplete) {
        return (
            <>
                <h1>QUIZ COMPLETE</h1>
            </>
        )
    }

    
    console.log("userAnswer", userAnswer)

    
    const shuffleOption = [...QUESTION[qnsIndex].option]

    shuffleOption.sort(() => Math.random() - 0.5)



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