import { Client, Account, Databases } from "appwrite";

const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('646603e71af4ea9f598a');

export const account = new Account(client)

// Database 
export const databases = new Databases(client)

// Users
// export const users = new sdk.Users(client);