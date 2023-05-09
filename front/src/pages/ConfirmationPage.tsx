import React from 'react'
import styled from 'styled-components'
import CheckIcon from '../resources/img/checked.png'
import Trophy from '../resources/img/trophy.png'
import Eyes from '../resources/img/eyes.png'

const Container = styled.div``
const PageContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        margin-top: 20vh;
    }
    span {
        position: relative;
    }
    p {
        margin: 0;
    }
`
const Emoji = styled.img`
    height: 20px;
    width: auto;
    margin-left: 5px;
    object-fit: fill;
    position: absolute;
    bottom: 0;
`

const CheckImg = styled.img`
    width: 10rem;
    margin-top: 30px;
`

const StartExamPage: React.FC = () => {
    return (
        <Container>
            <PageContent>
                <h2>Exam completed</h2>
                <p>
                    Were you the fastest ?{' '}
                    <span>
                        <Emoji src={Eyes} alt=""></Emoji>
                    </span>
                </p>
                <p>
                    The winner will be announced in a few minutes{' '}
                    <span>
                        <Emoji src={Trophy} alt=""></Emoji>
                    </span>
                </p>
                <CheckImg src={CheckIcon} alt=""></CheckImg>
            </PageContent>
        </Container>
    )
}

export default StartExamPage
