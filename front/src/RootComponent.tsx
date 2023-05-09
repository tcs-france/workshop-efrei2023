import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import WaitingPage from './pages/WaitingPage'
import StartExamPage from './pages/StartexamPage'
import QuestionPage from './pages/QuestionPage'
import ConfirmationPage from './pages/ConfirmationPage'
import NotFoundPage from './pages/NotFoundPage'
import { ROUTES } from './resources/routes-constants'
import './styles/main.sass'

const RootComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<Navigate to="/signup" replace />} />
                <Route path="/" element={<Navigate to="/signup" replace />} />
                <Route path={ROUTES.HOMEPAGE_ROUTE} element={<SignupPage />} />
                <Route path={ROUTES.SIGNUP_ROUTE} element={<SignupPage />} />
                <Route path={ROUTES.WAITING_ROUTE} element={<WaitingPage />} />
                <Route path={ROUTES.STARTEXAM_ROUTE} element={<StartExamPage />} />
                <Route path={ROUTES.QUESTION_ROUTE} element={<QuestionPage />} />
                <Route path={ROUTES.CONFIRMATION_ROUTE} element={<ConfirmationPage />} />
            </Routes>
        </Router>
    )
}

export default RootComponent
