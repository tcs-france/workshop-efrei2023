import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../resources/img/tatalogo_vertical.png'
import { Api } from '../resources/api/api-constants'
import { Navigate, useNavigate } from 'react-router-dom'
import { ROUTES } from '../resources/routes-constants'

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
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 22px rgba(183, 189, 187, 0.25);
    padding: 20px 30px 30px 30px;
    border-radius: 20px;
    max-width: 25rem;
    input {
        padding: 10px 15px;
        border-radius: 10px;
        border: 0.5px solid rgba(201, 201, 201, 0.5);
    }
    label {
        margin-top: 10px;
        font-size: 12px;
        font-style: italic;
        font-weight: bold;
    }
`
const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

const MainLogo = styled.img`
    width: 5rem;
`

const SubmitButton = styled.button<{ valid?: boolean }>`
    margin-top: 20px;
    color: white;
    border: none;
    font-weight: bold;
    width: 100%;
    border-radius: 20px;
    padding: 10px 0px;
    background: ${(props) =>
        props.valid
            ? 'linear-gradient(106.26deg, #FDC810 4.44%, #F70303 49.6%, #A357E4 103.91%, #A357E4 104.46%)'
            : 'linear-gradient(106.26deg, rgba(253, 200, 16, 0.5) 4.44%, rgba(247, 3, 3, 0.5) 49.6%, rgba(163, 87, 228, 0.5) 103.91%, rgba(163, 87, 228, 0.5) 104.46%)'};
`
const Title = styled.h2`
    max-width: 20rem;
    margin-top: 30px;
    font-size: 22px;
    text-align: center;
    span {
        color: #046bc9;
    }
`
const SignupPage: React.FC = () => {
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')


    const submitValue = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        const response = await Api.signup(first_name, last_name, email)
        if (response) {
            redirectToProgressPage()
        }
    }
    // Relevant redirections
    const checkExists = async () => {
        const data = await Api.userExists()
        return data.exist
    }
    const checkProgress = async () => {
        const data = await Api.examProgress()
        return data.status
    }
    const redirectionsOnLoad = async () => {
        const doesExist = await checkExists()
        console.log('exists')
        console.log(doesExist)
        if (doesExist == true) {
            const status = await checkProgress()
            switch (status) {
                case 'NOT STARTED':
                    redirectToStartExamPage()
                    break
                case 'IN PROGRESS':
                    redirectToQuestionPage()
                    break
                case 'FINISHED':
                    redirectToEndPage()
                    break
            }
        }
    }
    const [sendExam, setSendExam] = useState(false)
    const [sendQuestion, setSendQuestion] = useState(false)
    const [sendEnd, setSendEnd] = useState(false)
    const [sendProgress, setSendProgress] = useState(false)

    const redirectToStartExamPage = () => {
        setSendExam(true)
    }
    const redirectToQuestionPage = () => {
        setSendQuestion(true)
    }
    const redirectToEndPage = () => {
        setSendEnd(true)
    }
    const redirectToProgressPage = () => {
        setSendProgress(true)
    }
    const periodicalCheckExists = async () => {
        const exists = await checkExists()
        if (exists == true) {
            clearInterval(checkperiodically)
            setSendProgress(true)
        }
    }

    redirectionsOnLoad()
    const checkperiodically = setInterval(periodicalCheckExists, 5000)
    return (
        <Container>
            <PageContent>
                {sendExam && <Navigate to="/start-exam" replace />}
                {sendQuestion && <Navigate to="/question" replace />}
                {sendEnd && <Navigate to="/confirmation" replace />}
                {sendProgress && <Navigate to="/processing" replace />}

                <Title>
                    Welcome to your <span> Cloud and Microservices </span> workshop
                </Title>
                <Form>
                    <LogoContainer>
                        <MainLogo src={logo} alt="" />
                    </LogoContainer>
                    <label htmlFor="name">Prénom</label>
                    <input type="text" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
                    <label htmlFor="last_name">Nom</label>
                    <input type="text" value={last_name} onChange={(e) => setLastName(e.target.value)} />
                    <label htmlFor="email">E-mail (Efrei)</label>
                    <input type="email" placeholder="john.doe@efrei.net" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <SubmitButton
                        onClick={(e) => {
                            submitValue(e)
                        }}
                        valid={first_name != '' && last_name != '' && email != ''}
                    >
                        Je m&rsquo;inscris
                    </SubmitButton>
                </Form>
            </PageContent>
        </Container>
    )
}

export default SignupPage
