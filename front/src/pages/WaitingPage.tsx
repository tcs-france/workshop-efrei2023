import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Api } from '../resources/api/api-constants'
import { Navigate, useNavigate } from 'react-router-dom'
import { ROUTES } from '../resources/routes-constants'

const Loading = keyframes`
0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`
const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
`
const PageContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Loader = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    margin-top: 30vh;
    div {
        position: absolute;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #0e7dc1;
        animation: ${Loading} 1.2s linear infinite;
    }
    div:nth-child(1) {
        top: 8px;
        left: 8px;
        animation-delay: 0s;
    }
    div:nth-child(2) {
        top: 8px;
        left: 32px;
        animation-delay: -0.4s;
    }
    div:nth-child(3) {
        top: 8px;
        left: 56px;
        animation-delay: -0.8s;
    }
    div:nth-child(4) {
        top: 32px;
        left: 8px;
        animation-delay: -0.4s;
    }
    div:nth-child(5) {
        top: 32px;
        left: 32px;
        animation-delay: -0.8s;
    }
    div:nth-child(6) {
        top: 32px;
        left: 56px;
        animation-delay: -1.2s;
    }
    div:nth-child(7) {
        top: 56px;
        left: 8px;
        animation-delay: -0.8s;
    }
    div:nth-child(8) {
        top: 56px;
        left: 32px;
        animation-delay: -1.2s;
    }
    div:nth-child(9) {
        top: 56px;
        left: 56px;
        animation-delay: -1.6s;
    }
`

const WaitingPage: React.FC = () => {
    const navigate = useNavigate()
    const [exists, setExists] = useState(false)

    useEffect(() => {
        const redirectToStartExame = () => {
            navigate(ROUTES.STARTEXAM_ROUTE)
        }
        const checkExists = async () => {
            const data = await Api.userExists()
            setExists(data)
            if (exists == true) {
                clearInterval(checkperiodically)
                redirectToStartExame()
            }
        }
        const checkperiodically = setInterval(checkExists, 5000)
    }, [])
    return (
        <Container>
            {exists && <Navigate to="/start-exam" replace />}
            <PageContent>
                <Loader>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </Loader>
                <p>Ton inscription est confirmée.</p>
                <p>Tu pourras bientôt commencer le test !</p>
            </PageContent>
        </Container>
    )
}

export default WaitingPage
