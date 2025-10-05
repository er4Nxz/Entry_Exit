import { AiOutlineClear } from "react-icons/ai";

const Delete = ({ user, records, setRecords, saveAllRecords }) => {
  const ClearData = () => {
    const saveData = records.filter((record) => record.User !== user);
    setRecords(saveData);
    saveAllRecords(saveData);
  };
  return (
    <>
      <button className="m-4 btn btn-danger" onClick={ClearData}>
        <span className="flex items-center justify-center gap-2">
          پاک کردن ساعات <span>"{user}"</span>
          <AiOutlineClear />
        </span>
      </button>
    </>
  );
};

export default Delete;
