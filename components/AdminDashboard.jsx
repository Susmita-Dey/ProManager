import { account } from '@/appwrite/appwrite';
import { Client } from 'appwrite';
import { useEffect, useState } from 'react';

const AdminDashboard = () => {
    // const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await account.list();
            setUsers(response.users);
            // setLoading(false);
        } catch (error) {
            console.error('Failed to fetch users:', error);
        }
    };

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Birthday</th>
                        <th>Designation</th>
                        {/* Add other columns as needed */}
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.$id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.birthday}</td>
                            <td>{user.designation}</td>
                            {/* Add other table cells as needed */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;
