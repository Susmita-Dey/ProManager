import { account, databases, functions } from "@/appwrite/appwrite";
import { useRouter } from "next/router";
import { Dialog, Transition } from "@headlessui/react";
import React, { useEffect, useState, Fragment } from "react";
import { MdDeleteForever, MdEmail, MdLocationPin } from "react-icons/md";
import toast from "react-hot-toast";
import { BsBriefcaseFill } from "react-icons/bs";

function ProfilePage() {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState();
  const [todoCount, setTodoCount] = useState(0);
  const [verifySuccess, setVerifySuccess] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
  const collectionId = process.env.NEXT_PUBLIC_APPWRITE_TASKLIST_COLLECTION_ID;
  const functionId =
    process.env.NEXT_PUBLIC_APPWRITE_ACCOUNT_DELETE_FUNCTION_ID;

  useEffect(() => {
    const getData = account.get();
    getData.then(
      function (response) {
        setUserDetails(response);
        // console.log(userDetails);
      },
      function (error) {
        console.log(error);
      }
    );
  });

  const handleVerify = async () => {
    try {
      await account.createVerification(
        `${window.location.origin}/verify-email`
      );
      setVerifySuccess(true);
      toast.success("Check your email!");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const deleteUser = (id) => {
    console.log(id);
    if (id === undefined) {
      return;
    }
    const promise = functions.createExecution(functionId, id);
    promise.then(
      function (response) {
        setUserDetails(response);
        console.log(response);
        router.push("/");
        window.location.reload();
      },
      function (error) {
        console.log(error);
        // window.location.reload();
      }
    );
  };
  const getCount = () => {
    const list = databases.listDocuments(databaseId, collectionId);
    console.log(list);
    const stats = list?.total;
    console.log(stats);
    // return stats;
    setTodoCount(stats);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const isEmailVerified = userDetails?.emailVerification === true;

  // alert(isEmailVerified);

  return (
    <>
      {userDetails && (
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-8">
            <div className="relative flex flex-col justify-center min-w-0 break-words bg-gray-300 w-full mb-4 shadow-xl rounded-lg -mt-96 lg:-mt-64 md:-mt-64">
              <div className="px-4">
                <div className="w-full px-8 flex justify-center text-center rounded-full">
                  <div className="px-4 mb-10">
                    {/* <div className="font-bold text-gray-700 rounded-full bg-pink-500 flex items-center justify-center font-mono" style={{ height: "500px", width: "500px", fontSize: "170px" }}> */}
                    <h2
                      className="shadow-xl rounded-full h-auto text-center align-middle border-none  -m-16  text-6xl bg-pink-600 p-12"
                      style={{ height: "10rem", width: "10rem" }}
                    >
                      {userDetails?.name?.substring(0, 1)}
                    </h2>
                    {/* </div> */}
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800">
                    {userDetails?.name}
                  </h3>
                  <div className="flex flex-row">
                    <span className="flex text-lg leading-normal mt-0 mb-2 text-gray-900 font-bold">
                      <MdEmail className="mr-2 mt-1 text-lg text-gray-900" />{" "}
                      {userDetails?.email}
                    </span>
                  </div>
                  <div className="flex lg:flex-row flex-col mb-2 text-gray-700 mt-10">
                    <div className="flex">
                      <BsBriefcaseFill className="mr-2 mt-1 text-lg text-amber-900" />
                      Account Registration:
                    </div>{" "}
                    <code>{userDetails?.registration}</code>
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-4">
                    {/* <div className='text-gray-500'>
                                            <p>No of Todo items: {todoCount}</p>
                                        </div> */}
                    <button
                      className="flex flex-row gap-1 px-4 py-2 bg-pink-600 hover:bg-pink-800 text-white disabled:cursor-not-allowed disabled:bg-slate-600"
                      type="button"
                      onClick={handleVerify}
                      disabled={isEmailVerified}
                    >
                      {isEmailVerified ? "Verified✅" : "Verify Account"}
                    </button>
                    <button
                      className="flex flex-row gap-1 px-4 py-2 bg-red-600 hover:bg-red-800 text-white"
                      type="button"
                      onClick={openModal}
                    >
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {verifySuccess && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                <div className="bg-white text-gray-900 p-6 rounded-md shadow-lg">
                  <h2 className="text-2xl font-medium mb-4">
                    Check Your Email
                  </h2>
                  <p className="text-lg">
                    Hi there! 👋 Kindly close this window and check your email
                    for a verification link. Click the link to verify your email
                    address.
                  </p>
                  <div className="flex justify-end mt-4">
                    <button
                      className="px-4 py-2 text-lg rounded-md bg-pink-600 text-white hover:bg-pink-700"
                      onClick={() => {
                        setVerifySuccess(false);
                        window.close();
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-300 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Delete Account
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure that you wanna delete your account
                      permanently?
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      className="flex flex-row gap-1 px-4 py-2 bg-red-600 hover:bg-red-800 text-white"
                      onClick={() => {
                        deleteUser(userDetails.$id);
                      }}
                    >
                      <MdDeleteForever className="text-lg mt-1" /> Delete
                      Account
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
export default ProfilePage;
