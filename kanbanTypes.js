module.exports = {
    TypedColumn: "todo" | "inprogress" | "done",
    Column: {
        id: TypedColumn,
        kanban: KanbanItem['']
    },
    KanbanItem: {
        $id: string,
        $createdAt: string,
        title: string,
        status: TypedColumn,
        image: string
    },
    Image: {
        bucketId: string,
        fileId: string
    }
};
