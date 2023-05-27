// import { databases } from "@/appwrite/appwrite";

// export const getKanbanItemsGroupedByColumn = async () => {
//   const data = await databases.listDocuments(
//     "646605464de2f5cb7435",
//     "6466067e1863a7ff50de"
//   );

//   //   console.log(data);

//   const kanbanItems = data.documents;

//   const columns = kanbanItems.reduce((acc, kanbanItem) => {
//     if (!acc.get(kanbanItem.status)) {
//       acc.set(kanbanItem.status, {
//         id: kanbanItem.status,
//         kanban: [],
//       });
//     }

//     acc.get(kanbanItem.status).kanban.push({
//       $id: kanbanItem.$id,
//       $createdAt: kanbanItem.$createdAt,
//       title: kanbanItem.boardtitle,
//       status: kanbanItem.status,
//       // get the image if exists on the kanban
//       ...(kanbanItem.image && { image: JSON.parse(kanbanItem.image) }),
//     });

//     return acc;
//   }, new Map < TypedColumn, Column > ());

//   //   console.log(columns);

//   //   If the columns doesn't have inprogrss, todo and done, add them with empty todos
//   const columnTypes = ["todo", "inprogress", "done"];

//   for (const columnType of columnTypes) {
//     columns.set(columnType, {
//       id: columnType,
//       kanban: [],
//     });
//   }

//   //   sort colums by columnTypes
//   const sortedColumns = new Map(
//     Array.from(columns.entries()).sort(
//       (a, b) => columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0])
//     )
//   );

//   const board = {
//     columns: sortedColumns,
//   };
//   console.log(board);

//   return board;
// };
