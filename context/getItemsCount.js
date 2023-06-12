import { databases } from "@/appwrite/appwrite";
import { Query } from "appwrite";
import { useState } from "react";
import toast from "react-hot-toast";

const getItemsCount = () => {
  const [todosCount, setTodosCount] = useState(0);
  const [progressCount, setProgressCount] = useState(0);
  const [kanbanCount, setKanbanCount] = useState(0);
  const [diaryCount, setDiaryCount] = useState(0);

  const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
  const todoCollectionId =
    process.env.NEXT_PUBLIC_APPWRITE_TASKLIST_COLLECTION_ID;
  const progressCollectionId =
    process.env.NEXT_PUBLIC_APPWRITE_PROGRESS_TRACK_COLLECTION_ID;
  const kanbanCollectionId =
    process.env.NEXT_PUBLIC_APPWRITE_KANBAN_BOARD_COLLECTION_ID;
  const diaryCollectionId =
    process.env.NEXT_PUBLIC_APPWRITE_DIARY_COLLECTION_ID;

  const fetchTodos = async () => {
    try {
      // Make a request to the Appwrite API to fetch todos created today
      const todosResponse = await databases.listDocuments(
        databaseId,
        todoCollectionId,
        [Query.equal("created_by", [userId.userId])]
      );

      console.log(todosResponse.total);
      // Ensure that todosResponse.data is an array before proceeding
      if (Array.isArray(todosResponse.documents)) {
        const todos = todosResponse.documents;

        // Filter todos created today based on the date property
        const todosCreatedToday = todos.filter((todo) => {
          const createdDate = new Date(todo.$createdAt);
          const today = new Date();
          return (
            createdDate.getDate() === today.getDate() &&
            createdDate.getMonth() === today.getMonth() &&
            createdDate.getFullYear() === today.getFullYear()
          );
        });

        toast.success(`No of todos: ${todosCreatedToday.length}`);

        // Update the todosCount state with the count of todos created today
        setTodosCount(todosCreatedToday.length);
      } else {
        // Handle the case when todosResponse.data is not an array
        toast.error("Failed to fetch todos from Appwrite.");
        console.error("Failed to fetch todos from Appwrite.");
      }
    } catch (error) {
      // Handle any API request or error handling errors
      toast.error(error.message);
      console.error("Error while fetching todos:", error);
    }
  };

  const fetchProgress = async () => {
    try {
      // Make a request to the Appwrite API to fetch progress created today
      const progressResponse = await databases.listDocuments(
        databaseId,
        progressCollectionId,
        [Query.equal("created_by", [userId.userId])]
      );

      console.log(progressResponse.total);
      // Ensure that progressResponse.data is an array before proceeding
      if (Array.isArray(progressResponse.documents)) {
        const progress = progressResponse.documents;

        // Filter progress created today based on the date property
        const progressCreatedToday = progress.filter((progress) => {
          const createdDate = new Date(progress.$createdAt);
          const today = new Date();
          return (
            createdDate.getDate() === today.getDate() &&
            createdDate.getMonth() === today.getMonth() &&
            createdDate.getFullYear() === today.getFullYear()
          );
        });

        toast.success(`No of progress: ${progressCreatedToday.length}`);

        // Update the progressCount state with the count of progress created today
        setProgressCount(progressCreatedToday.length);
      } else {
        // Handle the case when progressResponse.data is not an array
        toast.error("Failed to fetch progress from Appwrite.");
        console.error("Failed to fetch progress from Appwrite.");
      }
    } catch (error) {
      // Handle any API request or error handling errors
      toast.error(error.message);
      console.error("Error while fetching progress:", error);
    }
  };

  const fetchKanban = async () => {
    try {
      // Make a request to the Appwrite API to fetch kanban created today
      const kanbanResponse = await databases.listDocuments(
        databaseId,
        kanbanCollectionId,
        [Query.equal("created_by", [userId.userId])]
      );

      console.log(kanbanResponse.total);
      // Ensure that kanbanResponse.data is an array before proceeding
      if (Array.isArray(kanbanResponse.documents)) {
        const kanban = kanbanResponse.documents;

        // Filter kanban created today based on the date property
        const kanbanCreatedToday = kanban.filter((kanban) => {
          const createdDate = new Date(kanban.$createdAt);
          const today = new Date();
          return (
            createdDate.getDate() === today.getDate() &&
            createdDate.getMonth() === today.getMonth() &&
            createdDate.getFullYear() === today.getFullYear()
          );
        });

        toast.success(`No of kanban: ${kanbanCreatedToday.length}`);

        // Update the kanbanCount state with the count of kanban created today
        setKanbanCount(kanbanCreatedToday.length);
      } else {
        // Handle the case when kanbanResponse.data is not an array
        toast.error("Failed to fetch kanban from Appwrite.");
        console.error("Failed to fetch kanban from Appwrite.");
      }
    } catch (error) {
      // Handle any API request or error handling errors
      toast.error(error.message);
      console.error("Error while fetching kanban:", error);
    }
  };

  const fetchDiary = async () => {
    try {
      // Make a request to the Appwrite API to fetch diary created today
      const diaryResponse = await databases.listDocuments(
        databaseId,
        diaryCollectionId,
        [Query.equal("created_by", [userId.userId])]
      );

      console.log(diaryResponse.total);
      // Ensure that diaryResponse.data is an array before proceeding
      if (Array.isArray(diaryResponse.documents)) {
        const diary = diaryResponse.documents;

        // Filter diary created today based on the date property
        const diaryCreatedToday = diary.filter((diary) => {
          const createdDate = new Date(diary.$createdAt);
          const today = new Date();
          return (
            createdDate.getDate() === today.getDate() &&
            createdDate.getMonth() === today.getMonth() &&
            createdDate.getFullYear() === today.getFullYear()
          );
        });

        toast.success(`No of diary: ${diaryCreatedToday.length}`);

        // Update the diaryCount state with the count of diary created today
        setDiaryCount(diaryCreatedToday.length);
      } else {
        // Handle the case when diaryResponse.data is not an array
        toast.error("Failed to fetch diary from Appwrite.");
        console.error("Failed to fetch diary from Appwrite.");
      }
    } catch (error) {
      // Handle any API request or error handling errors
      toast.error(error.message);
      console.error("Error while fetching diary:", error);
    }
  };

  console.log(todosCount);
  // fetchTodos();
  // fetchProgress();
  return { todosCount, progressCount, kanbanCount, diaryCount, fetchDiary, fetchKanban, fetchProgress, fetchTodos }
};

export default getItemsCount;
