import message from '../models/db.js';

const greeting = (req, res) => {
    res.render('index', { messages: message })
}

export default greeting