import { Client, Account, Databases, Functions, Storage } from "appwrite";

const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('646603e71af4ea9f598a');

export const account = new Account(client)

// Database 
export const databases = new Databases(client)

export const functions = new Functions(client)

export const storage = new Storage(client)