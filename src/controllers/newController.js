import db from '../models/db.js'

export const newMessage = (req, res) => {
    res.render('new', { name: 'Luis' })
}

export const postMessage = (req, res) => {
    db.push({ text: req.body.messageText, user: req.body.user, added: new Date() });
    res.redirect('/')
}

