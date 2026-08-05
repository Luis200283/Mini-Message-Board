import { sql } from "./pool.js";

export async function getAllUsers() {
    return await sql`SELECT * FROM messages`
}

export async function getUser(query) {
    return await sql`SELECT * FROM messages WHERE username LIKE '${query}%'`
}

export async function postMessage(username, message) {
    await sql`INSERT INTO messages (username, message) VALUES (${username}, ${message})`;
}

export async function deleteMessageInDB(id) {
    await sql`DELETE FROM messages WHERE id = ${id}`
}
