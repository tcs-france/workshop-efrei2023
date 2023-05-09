import React, { ChangeEventHandler, useEffect, useState } from 'react'
import styled from 'styled-components'

const QuestionContainer = styled.div`
    .question {
        font-weight: bold;
        font-size: 24px;
    }
    box-shadow: 0px 4px 22px rgba(183, 189, 187, 0.25);
    padding: 0px 20px 10px 20px;
    border-radius: 20px;
    width: 30rem;
`

const QuestionBlock = styled.div`
    input {
        margin-bottom: 20px;
    }
`

const QuestionBox: React.FC<{ question: any; options: string[]; handleChange: ChangeEventHandler<HTMLInputElement> }> = (question) => {
    const [answer, setAnswer] = useState('')

    return (
        <QuestionContainer>
            <h2>{question.question}</h2>
            <QuestionBlock>
                {question.options.map((option, index) => (
                    <div key={index} onChange={question.handleChange}>
                        <input type="radio" id={option} name="question_answer" />
                        <label htmlFor={option} id={option}>
                            {option}
                        </label>
                    </div>
                ))}
            </QuestionBlock>
        </QuestionContainer>
    )
}

export default QuestionBox
