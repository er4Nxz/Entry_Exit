import { useEffect, useState } from "react";
import moment from "moment-jalaali";
import { FaRegClock } from "react-icons/fa";
import TotalTime from "./TotalTime/TotalTime";
import Table from "./Table/Table";
import Button from "./Button/Button";
import Delete from "./Delete/Delete";

const Dashboard = () => {
  const nowDate = moment().format("jYYYY/jMM/jDD");
  const nowTime = moment().format("HH:mm");

  const OldData = JSON.parse(localStorage.getItem("records")) || [];
  const user = localStorage.getItem("user");

  const saveAllRecords = (data) => {
    localStorage.setItem("records", JSON.stringify(data));
  };

  const [records, setRecords] = useState([]);
  useEffect(() => {
    setRecords(OldData);
  }, []);
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4 relative">
        <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-4xl">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <div className="flex justify-center items-center gap-3">
              <h1 className="text-2xl font-bold text-gray-800">ساعت کاری</h1>
              <FaRegClock className="text-4xl text-indigo-600" />
            </div>
            <TotalTime records={records} user={user} />
          </div>
          <Table records={records} user={user} />
          <Button
            user={user}
            records={records}
            nowDate={nowDate}
            nowTime={nowTime}
            setRecords={setRecords}
            saveAllRecords={saveAllRecords}
          />
          <Delete
            user={user}
            records={records}
            setRecords={setRecords}
            saveAllRecords={saveAllRecords}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
