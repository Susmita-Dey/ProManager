import { databases } from '@/appwrite/appwrite';
import { Query } from 'appwrite';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import TailwindToaster from './TailwindToaster';

const ProductivityPercentage = (userId) => {
    const [todosCount, setTodosCount] = useState(0);
    const [productivityPercentage, setProductivityPercentage] = useState(0);
    const productivityGoal = 10; // Set your desired productivity goal here

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                // Make a request to the Appwrite API to fetch todos created today
                const todosResponse = await databases.listDocuments("646605464de2f5cb7435", "6466055dd831efd150ef", [
                    Query.equal("created_by", [userId.userId])]);

                console.log(todosResponse.total);
                // Ensure that todosResponse.data is an array before proceeding
                if (Array.isArray(todosResponse.documents)) {
                    const todos = todosResponse.documents;

                    // Filter todos created today based on the date property
                    const todosCreatedToday = todos.filter(todo => {
                        const createdDate = new Date(todo.$createdAt);
                        const today = new Date();
                        return (
                            createdDate.getDate() === today.getDate() &&
                            createdDate.getMonth() === today.getMonth() &&
                            createdDate.getFullYear() === today.getFullYear()
                        );
                    });

                    toast.success(`No of todos: ${todosCreatedToday.length}`)
                    // Update the todosCount state with the count of todos created today
                    setTodosCount(todosCreatedToday.length);
                } else {
                    // Handle the case when todosResponse.data is not an array
                    toast.error('Failed to fetch todos from Appwrite.')
                    console.error('Failed to fetch todos from Appwrite.');
                }
            } catch (error) {
                // Handle any API request or error handling errors
                toast.error(error.message)
                console.error('Error while fetching todos:', error);
            }
        };

        console.log(todosCount);
        fetchTodos();
    }, []);

    useEffect(() => {
        // Calculate the productivity percentage
        const percentage = (todosCount / productivityGoal) * 100;

        // Update the productivityPercentage state
        setProductivityPercentage(percentage);
    }, [todosCount]);

    return (
        <div>
            <p className='font-bold text-base md:text-xl text-cyan-500'>Productivity Percentage: {productivityPercentage.toFixed(2)}%</p>
            <TailwindToaster />
        </div>
    );
};

export default ProductivityPercentage;