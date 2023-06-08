import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { account } from '@/appwrite/appwrite';
import toast from 'react-hot-toast';
import Loader from '@/components/Loader';

function VerifyEmail() {
    const router = useRouter()

    // Get the verification token from the query parameters
    const { secret, userId } = router.query;

    useEffect(() => {
        // Verify the email using the token
        account.updateVerification(userId, secret) // Assuming your Appwrite SDK supports updating verification status
            .then(() => {
                toast.success('Email verification successful!');
                router.push('/'); // Redirect to the dashboard page after successful verification
            })
            .catch((error) => {
                console.error(error);
                toast.error('Email verification failed. Please try again.');
                router.push('/'); // Redirect to the home page or another appropriate page
            });
    }, [router.query]);

    return (
        <div className='container mx-auto flex flex-col justify-center items-center'>
            <p className='text-xl font-bold'>Verifying your email...</p>
            <Loader />
        </div>
    );
}

export default VerifyEmail