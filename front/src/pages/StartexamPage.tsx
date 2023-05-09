import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../resources/img/tatalogo_vertical.png'
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
`

const StartExamModal = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 22px rgba(183, 189, 187, 0.25);
    padding: 20px 30px 30px 30px;
    border-radius: 20px;
`
const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

const MainLogo = styled.img`
    width: 5rem;
`

const StartExamButton = styled.button`
    margin-top: 20px;
    color: white;
    border: 1px solid transparent;
    font-weight: bold;
    font-size: 18px;
    width: 15rem;
    border-radius: 30px;
    padding: 15px 20px;
    background: linear-gradient(106.26deg, #FDC810 4.44%, #F70303 49.6%, #A357E4 103.91%, #A357E4 104.46%)

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
const StartExamPage: React.FC = () => {
    const [startTest, setStartTest] = useState(false)
    const handleStartTest = () => {
        setStartTest(true)
    }
    return (
        <Container>
            {startTest && <Navigate to="/question" replace />}
            <PageContent>
                <Title>
                    Welcome to your <span> Cloud and Microservices </span> workshop
                </Title>
                <StartExamModal >
                    <LogoContainer>
                        <MainLogo src={logo} alt="" />
                    </LogoContainer>
                    <StartExamButton onClick={handleStartTest}>Lancer le test</StartExamButton>
                </StartExamModal>
            </PageContent>
        </Container>
    )
}

export default StartExamPage
