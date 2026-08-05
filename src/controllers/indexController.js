import { getAllUsers, deleteMessageInDB } from '../db/queries.js';
import db from '../db/populatedb.js'

export const showAllUsers = async (req, res) => {
    const result = await getAllUsers()
    res.render('index', { messages: result })
}

export const deleteMessage = async (req, res) => {
    const id = req.params.id
    await deleteMessageInDB(id)
    res.redirect('/')
} 
