import { Fragment, useContext, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Context } from "../../utils/store";
import TipTap from "../TipTap";

function Notepad() {
  const [state, dispatch] = useContext(Context);
  const cancelButtonRef = useRef(null);

  const handleClose = () => {
    dispatch({
      type: "SET_NOTEPAD",
      payload: false,
    });
  };

  return (
    <Transition.Root show={state.notepad} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-slate-700 text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-2xl">
                <div className="bg-slate-700 px-4 pt-5 pb-4 sm:p-2 sm:pb-4">
                  <div className="">
                    <div className="mt-3 text-center sm:mt-0 sm:mx-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-white flex justify-between items-center">
                        Notepad
                        <button
                          type="button"
                          className="mt-3 inline-flex w-auto justify-center rounded-md bg-green-500 px-4 py-2 text-base text-white font-bold shadow-sm hover:bg-green-600 focus:outline-none sm:mt-0 sm:ml-3 sm:text-sm transition-all ease-linear duration-200 border-none outline-none">
                          Save
                        </button>
                      </Dialog.Title>
                      <div className="mt-2 min-w-full">
                        <TipTap />
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Notepad;
