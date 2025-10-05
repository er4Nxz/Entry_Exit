import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

const Button = ({user, records, nowDate, nowTime, saveAllRecords, setRecords }) => {
  const handleEntry = () => {
    const hasOpenEntry = records.some((record) => record.exit === null);
    if (hasOpenEntry) {
      alert("ابتدا ساعت خروج را بزنید!");
    } else {
      const updatedRecords = [
        ...records,
        { User: user, date: nowDate, entry: nowTime, exit: null },
      ];
      setRecords(updatedRecords);
      saveAllRecords(updatedRecords);
    }
  };

  const handleExit = () => {
    const lastRecordIndex = records.findLastIndex(
      (record) => record.exit === null
    );
    if (lastRecordIndex !== -1) {
      const updatedRecords = [...records];
      updatedRecords[lastRecordIndex].exit = nowTime;
      setRecords(updatedRecords);
      saveAllRecords(updatedRecords);
    } else {
      alert("ابتدا ساعت ورود را بزنید!");
    }
  };
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
        <button
          className="flex items-center text-lg gap-2 px-4 py-3 border rounded-lg transition-colors hover:text-indigo-600 hover:bg-indigo-100 text-indigo-700"
          style={{ borderRadius: "14px" }}
          onClick={handleEntry}
        >
          <FaSignInAlt />
          ساعت ورود
        </button>
        <button
          className="flex items-center text-lg gap-2 px-4 py-3 border rounded-lg transition-colors hover:text-indigo-600 hover:bg-indigo-100 text-indigo-700 "
          style={{ borderRadius: "14px" }}
          onClick={handleExit}
        >
          <FaSignOutAlt />
          ساعت خروج
        </button>
      </div>
    </>
  );
};

export default Button;
