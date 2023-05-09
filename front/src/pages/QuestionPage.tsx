import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import QuestionBox from '../components/QuestionBox'
import { Api } from '../resources/api/api-constants'
import { Navigate } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    font-family: 'Poppins', sans-serif;
`
const PageContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20vh;
`
const SubmitButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`
const SubmitButton = styled.button<{ answered?: boolean }>`
    margin-top: 20px;
    color: white;
    font-size: 16px;
    border: none;
    width: 10rem;
    border-radius: 20px;
    padding: 10px 0px;
    background: ${(props) =>
        props.answered
            ? 'linear-gradient(106.26deg, #FDC810 4.44%, #F70303 49.6%, #A357E4 103.91%, #A357E4 104.46%)'
            : 'linear-gradient(106.26deg, rgba(253, 200, 16, 0.5) 4.44%, rgba(247, 3, 3, 0.5) 49.6%, rgba(163, 87, 228, 0.5) 103.91%, rgba(163, 87, 228, 0.5) 104.46%)'};
`

const QuestionPage: React.FC = () => {
    interface IQuestion {
        id: string
        question: string
        options: string[]
    }
    const [answer, setAnswer] = useState('')
    const [question, setQuestion] = useState<IQuestion>({ id: '', question: '', options: [] })
    const [nextQuestion, setNextQuestion] = useState(null)

    const handleAnswers = (event: any) => {
        setAnswer(event.target.id)
    }
    const handleSubmitAnswer = async (id: string) => {
        const nextQuestionExist = await Api.sendAnswer(id, answer)
        setNextQuestion(currnextQuestion => currnextQuestion = nextQuestionExist.isQuestionRemaining)
        if(nextQuestionExist.isQuestionRemaining == true) {
            questionRequest()
        }
    }
    const questionRequest = () => {
        Api.getQuestion().then((question) => {
            question != null ? setQuestion({ id: question.id, question: question.question, options: question.options }) : console.log('No question')
        })
    }

    useEffect(() => {
        questionRequest()
    }, [])
    return (
        <Container>
            <PageContent>
                <p>{nextQuestion}</p>
                {nextQuestion == false && <Navigate to="/confirmation" replace />}

                {question && <QuestionBox handleChange={handleAnswers} question={question.question} options={question.options} key={question.id} />}
                <p>{nextQuestion}</p>
                <SubmitButtonContainer>
                    {question && (
                        <SubmitButton answered={answer != ''} onClick={() => handleSubmitAnswer(question.id)}>
                            Submit answer
                        </SubmitButton>
                    )}
                </SubmitButtonContainer>
            </PageContent>
        </Container>
    )
}

export default QuestionPage
