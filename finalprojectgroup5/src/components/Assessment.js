import { useState } from 'react';
import react, { Component } from 'react';

function Assessment() {

  const questions = [
        {
            questionText: 'Do you have any of these life-threatening symptoms? Pale, gray, or blue-colored skin, lips, or nail beds, depending on skin tone. Severe and constant pain or pressure in the chest. Extreme difficulty breathing (such as gasping for air, being unable to talk without catching your breath, severe wheezing, nostrils flaring). New disorientation (acting confused). Unconscious or very difficult to wake up. Slurred speech or difficulty speaking (new or worsening). New or worsening seizures. Signs of low blood pressure (too weak to stand, dizziness, lightheaded, feeling cold, pale, clammy skin). Dehydration (dry lips and mouth, not urinating much, sunken eyes).',
            answerOptions: [
                { answerText: 'Yes', isCorrect: true },
                { answerText: 'No', isCorrect: false },
            ],
        },
        {
            questionText: 'Are you feeling sick?',
            answerOptions: [
                { answerText: 'Yes', isCorrect: true },
                { answerText: 'No', isCorrect: false },
            ],
        },
        {
            questionText: 'In the last two weeks, have you been in close contact with someone who has COVID-19? —excluding people who have had COVID-19 within the past 3 months.',
            answerOptions: [
                { answerText: 'Yes', isCorrect: true },
                { answerText: 'No', isCorrect: false },,
            ],
        },
    ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };



  return (
    <div>
          {showScore && score >= 1 ? (
                <div className='score-section'>
          'Call a medical provider. Sorry you are not feeling well. Your symptoms may be related to COVID-19.'
                </div>
            ) : ((
                showScore && score == 0 ? (
                <div className='score-section'>
                    'No COVID-19 testing needed at this time.  Based on the answers given, you do not need to get tested unless recommended or required by your healthcare provider, employer, or public health official.'
                </div>

             ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
                    </div>
                </>
            )))}
    
    </div>
  );
}


export default Assessment;

    
