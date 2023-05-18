import { account, users } from '@/pages/api/appwrite';
import Router, { useRouter } from 'next/router';
import React from 'react'

function Profile() {
    const router = useRouter()

    const deleteUser = (id) => {
        const promise = account.delete(id);
        promise.then(
            function (response) {
                console.log(response);
                Router.push("/")
            },
            function (error) {
                console.log(error);
                window.location.reload()
            }
        )
    }
    return (
        <div>Profile</div>
    )
}

export default Profile