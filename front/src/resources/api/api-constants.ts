import { ApiPaths } from './api-paths'

export const Api = {
    async getQuestion() {
        const data = fetch(process.env.REACT_APP_EXAM_API_URL + ApiPaths.GetQuestion)
            .then((response) => response.json())
            .then((json) => {
                return json.data
            })
            .catch((error) => {
                console.log(error)
                return null
            })
        return await data
    },
    async sendAnswer(questionId: string, answer: string) {
        const data = fetch(process.env.REACT_APP_EXAM_API_URL + ApiPaths.PostAnswer, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                questionId: questionId,
                answer: answer
            })
        })
            .then((response) => response.json())
            .then((json) => {
                return json.data
            })
            .catch((error) => {
                console.log(error)
                return false
            })
        return await data
    },
    async examProgress() {
        const data = fetch(process.env.REACT_APP_EXAM_API_URL + ApiPaths.GetProgress)
            .then((response) => response.json())
            .then((json) => {
                return json.data
            })
            .catch((error) => {
                console.log(error)
                return false
            })
        return await data
    },
    async userExists() {
        const data = fetch(process.env.REACT_APP_EXAM_API_URL + ApiPaths.CheckExists)
            .then((response) => response.json())
            .then((json) => {
                return json.data
            })
            .catch((error) => {
                console.log(error)
                return false
            })
        return await data
    },

    //Auth API
    async signup(firstName: string, lastName: string, email: string) {
       const data = await fetch(process.env.REACT_APP_AUTH_API_URL + ApiPaths.SignUp, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email: email
            })
        })
        return data
    }
}
