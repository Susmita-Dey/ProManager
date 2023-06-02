# ProManager

ProManager is a powerful productivity tool designed to help developers, students, and individuals track their tasks, todos, and boost their productivity levels. It offers a user-friendly interface with features like task management, productivity tips, and ideas.

This repository contains the source code for ProManager. Feel free to explore and contribute to the project!

## Tech Stack

The ProManager application is built using the following technologies:

- Next.js: A React framework for building server-side rendered and statically generated web applications.
- React.js: A JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.
- Appwrite: An open-source, self-hosted backend server for building web and mobile applications.

## Getting Started

To get started with the ProManager project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/Susmita-Dey/ProManager.git
```
2. Navigate to the project directory:
```bash
cd ProManager
```

3. Install the dependencies:
```bash
npm install
```

3. Configure Appwrite:
- Set up an instance of Appwrite backend server.
- Create a new project and note down the API endpoint and project ID.
- Update the **.env.local** file with your Appwrite endpoint and project ID:

```bash
NEXT_PUBLIC_MAILCHIMP_API_KEY='YOUR_API_KEY'
NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID='YOUR_AUDIENCE_ID'
NEXT_PUBLIC_APPWRITE_PROJECT_ID='YOUR_PROJECT_ID'
NEXT_PUBLIC_APPWRITE_DATABASE_ID='YOUR_DATABASE_ID'
NEXT_PUBLIC_APPWRITE_PROGRESS_TRACK_COLLECTION_ID='YOUR_PROGRESS_COLLECTION_ID'
NEXT_PUBLIC_APPWRITE_IDEALIST_COLLECTION_ID='YOUR_IDEALIST_COLLECTION_ID'
NEXT_PUBLIC_APPWRITE_TASKLIST_COLLECTION_ID='YOUR_TASKLIST_COLLECTION_ID'
NEXT_PUBLIC_APPWRITE_DIARY_COLLECTION_ID='YOUR_DIARY_COLLECTION_ID'
NEXT_PUBLIC_APPWRITE_KANBAN_BOARD_COLLECTION_ID='YOUR_KANBAN_COLLECTION_ID'
NEXT_PUBLIC_APPWRITE_PROTIPS_COLLECTION_ID='YOUR_PROTIPS_COLLECTION_ID'
NEXT_PUBLIC_APPWRITE_BUCKET_ID='YOUR_BUCKET_ID'
NEXT_PUBLIC_APPWRITE_ACCOUNT_DELETE_FUNCTION_ID='YOUR_FUNCTION_ID'
```

4. Run the development server:
```bash
npm run dev
```
5. Open your browser and navigate to `http://localhost:3000` to see ProManager in action.

## Contributing

Contributions to ProManager are welcome! If you find any issues or have suggestions for improvement, please feel free to open an issue or submit a pull request. Make sure to follow the project's code of conduct.

- Fork the repository.
- Create your branch: `git checkout -b my-feature-branch`.
- Make your changes and commit them: `git commit -am 'Add new feature'`.
- Push to the branch: `git push origin my-feature-branch`.
- Open a pull request.

## License

The ProManager project is available under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the license terms.

## Acknowledgements

- ProManager uses open-source libraries and frameworks that have greatly contributed to the development of this project. Special thanks to the Appwrite community for their valuable contributions to help me whenever I got stuck.
