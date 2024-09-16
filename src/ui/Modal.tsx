import { useEffect } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import { CloseButton } from "../icons/Icon";

interface ModalType {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
  logo: string;
  width?: string;
}

const Modal: React.FC<ModalType> = ({
  open,
  children,
  onClose,
  logo,
  width = "w-[calc(100vw-2rem)] md:max-w-lg rounded-lg",
}) => {
  const modalref = useOutsideClick(onClose);
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  return (
    open && (
      <div className="fixed backdrop-blur-sm top-0 left-0 right-0 bottom-0 w-screen h-screen bg-black bg-opacity-30 modal z-50">
        <div
          ref={modalref}
          className="fixed top-1/2 left-1/2 bg-secondary-100 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-secondery-0 p-4 shadow-lg transition-all duration-500 ease-out w-[calc(100vw-2rem)]  md:max-w-lg max-h-[calc(100vh-2rem)]  overflow-y-auto "
        >
          <div className="relative flex flex-col items-center">
            <div className="flex justify-center w-full mb-4 ">
              <div className="font-bold text-lg">{logo}</div>
              <button onClick={onClose} className="absolute top-1 left-3">
                <CloseButton />
              </button>
            </div>
            <div className="w-full flex h-full justify-center">{children}</div>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
