import { useEffect, useState } from "react";
import { data } from "react-router-dom";
import moment from "moment-jalaali";
const Table = () => {
  const Data = {};
  const username = localStorage.getItem("username");

  const [entry, setEntry] = useState(null);
  const [exit, setExit] = useState(null);
  const [date, setDate] = useState(null);

  const nowDate = moment().format("jYYYY/jMM/jDD");
  const nowHours = moment().format("HH:mm");

  return (
    <>
      <div className="h-[90.8vh] bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-5 w-full max-w-md">
          <table className="table table-striped ">
            <thead>
              <tr>
                <th>تاریخ</th>
                <th>ساعت ورود</th>
                <th>ساعت خروج</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{date}</td>
                <td>{entry}</td>
                <td>{exit}</td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-danger" onClick={() => setExit(nowHours)}>
            ساعت خروج
          </button>
          <button
            className="btn btn-success"
            onClick={(() => setEntry(nowHours), setDate(nowDate))}
          >
            ساعت ورود
          </button>
        </div>
      </div>
    </>
  );
};

export default Table;
