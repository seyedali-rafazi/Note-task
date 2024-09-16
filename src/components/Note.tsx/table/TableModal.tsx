import Modal from "../../../ui/Modal";

interface TableModalType {
  setNoteOpen: (open: boolean) => void;
  noteOpen: boolean;
  title: string;
  description: string;
}

const TableModal: React.FC<TableModalType> = ({
  noteOpen,
  setNoteOpen,
  title,
  description,
}) => {
  return (
    <Modal
      logo="یادداشت شما"
      onClose={() => setNoteOpen(false)}
      open={noteOpen}
      width="w-full md:w-2/3 lg:w-1/2 "
    >
      <div className="flex items-center justify-center bg-white w-full md:max-h-[calc(100vw-40rem)] h-full p-6">
        <div className="flex flex-col gap-5 justify-center items-center font-normal text-sm w-full h-full">
          <div className="w-full">
            <span className="mb-2 block text-secondery-700 font-bold">
              عنوان یادداشت
            </span>
            <p>{title}</p>
          </div>
          <div className="w-full">
            <span className="mb-2 block text-secondery-700  font-bold">
              متن یادداشت
            </span>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TableModal;
