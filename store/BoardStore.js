import { getKanbanItemsGroupedByColumn } from "@/lib/getKanbanItemsGroupedByColumn";
import { create } from "zustand";

const useBoardStore = create((set) => ({
  board: {
    columns: new Map(),
  },
  getBoard: async () => {
    const board = await getKanbanItemsGroupedByColumn();
    // set({ board });
  },
}));

export default useBoardStore;
