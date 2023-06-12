import { databases } from "@/appwrite/appwrite";
import getItemsCount from "@/context/getItemsCount";
import { Query } from "appwrite";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import TailwindToaster from "./TailwindToaster";

const ProductivityPercentage = ({ userId, textColor = "text-cyan-500" }) => {
  //   const [todosCount, setTodosCount] = useState(0);
  //   const [progressCount, setProgressCount] = useState(0);
  const [productivityPercentage, setProductivityPercentage] = useState(0);
  const productivityGoal = 40; // Set your desired productivity goal here
  const {
    todosCount,
    progressCount,
    kanbanCount,
    diaryCount,
    fetchDiary,
    fetchKanban,
    fetchProgress,
    fetchTodos,
  } = getItemsCount();

  useEffect(() => {
    // Calculate the productivity percentage
    const totalItems = todosCount + progressCount;
    const percentage = (totalItems / productivityGoal) * 100;

    // Update the productivityPercentage state
    setProductivityPercentage(percentage);
  }, [todosCount]);

  return (
    <div>
      <p className={`font-bold text-base md:text-xl ${textColor}`}>
        Productivity Level: {productivityPercentage.toFixed(2)}%
      </p>
      <TailwindToaster />
    </div>
  );
};

export default ProductivityPercentage;
