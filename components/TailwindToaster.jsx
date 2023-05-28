import { Transition } from "@headlessui/react";
import { Toaster, ToastIcon, resolveValue } from "react-hot-toast";

const TailwindToaster = () => {
    return (
        <Toaster position="top-right">
            {(t) => (
                <Transition
                    appear
                    show={t.visible}
                    className="transform p-4 flex bg-pink-900 text-white rounded shadow-lg"
                    enter="transition-all duration-150"
                    enterFrom="opacity-0 scale-50"
                    enterTo="opacity-100 scale-100"
                    leave="transition-all duration-150"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-75"
                >
                    <ToastIcon toast={t} />
                    <p className="px-2">{resolveValue(t.message)}</p>
                </Transition>
            )}
        </Toaster>
    );
};

export default TailwindToaster