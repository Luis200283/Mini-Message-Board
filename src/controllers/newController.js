import { postMessage } from '../db/queries.js'

export const newMessage = (req, res) => {
    res.render('new', { name: 'Luis' })
}

export const postNewMessage = async (req, res) => {
    await postMessage(String(req.body.user), String(req.body.messageText))
    res.redirect('/')
}

