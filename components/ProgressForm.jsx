import React from 'react'

function ProgressForm() {
    // console.log(userId.userId);
    const [progressItem, setProgressItem] = useState("")
    const data = { todoitem: todoItem, created_by: userId.userId };
    console.log(data);


    const handleSubmit = (e) => {
        e.preventDefault()
        const promise = databases.createDocument(
            "646605464de2f5cb7435",
            "64660b181c0af1741d29",
            uuidv4(),
            data,
        )

        console.log(promise);
        promise.then(
            function (response) {
                console.log(response);
                window.location.reload()
            },
            function (error) {
                console.log(error);
                // window.location.reload()
            },
        );
        e.target.reset()
    }


    return (
        <div className="max-w-7xl mx-auto mt-10 text-white">
            <form
                action=""
                onSubmit={handleSubmit}
                className="flex justify-center mb-10"
            >
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter Todo"
                    className="border p-2 w-2/3 rounded-md text-black placeholder-gray-600"
                    onChange={(e) => {
                        setTodoItem(e.target.value)
                    }}
                />
                <button
                    className="bg-pink-600 hover:bg-pink-700 p-2 text-white ml-2 rounded-md"
                    type="submit"
                >
                    Add Todo
                </button>
            </form>
        </div>
    )
}

export default ProgressForm