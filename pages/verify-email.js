import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { account } from '@/appwrite/appwrite';
import toast from 'react-hot-toast';
import Loader from '@/components/Loader';


function VerifyEmail() {
    const router = useRouter();

    useEffect(() => {
        // Get the verification token from the query parameters
        const { token } = router.query;

        // Verify the email using the token
        if (token) {
            account.updateVerification(token, 'success') // Assuming your Appwrite SDK supports updating verification status
                .then(() => {
                    toast.success('Email verification successful!');
                    router.push('/login'); // Redirect to the login page after successful verification
                })
                .catch((error) => {
                    console.error(error);
                    toast.error('Email verification failed. Please try again.');
                    router.push('/'); // Redirect to the home page or another appropriate page
                });
        } else {
            toast.error('Invalid verification token.');
            router.push('/'); // Redirect to the home page or another appropriate page
        }
    }, [router.query]);

    return (
        <div>
            <p>Verifying your email...</p>
            {/* You can add a loading spinner or other visual indication here */}
            <Loader />
        </div>
    );
}

export default VerifyEmail