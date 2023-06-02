import { Client, Account, Databases, Functions, Storage } from "appwrite";

const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID

const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1').setProject(projectId);

const account = new Account(client)

// Database 
const databases = new Databases(client)

const functions = new Functions(client)

const storage = new Storage(client)

export { client, account, databases, functions, storage }