const Table = ({records,user}) => {
  
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-striped w-full">
          <thead className="bg-indigo-100">
            <tr>
              <th className="px-4 py-2 text-right">تاریخ</th>
              <th className="px-4 py-2 text-right">ساعت ورود</th>
              <th className="px-4 py-2 text-right">ساعت خروج</th>
            </tr>
          </thead>
          <tbody>
            {records
              ?.filter((item) => {
                return item.User === user;
              })
              .map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{item.date}</td>
                  <td className="px-4 py-2 border-b">{item.entry}</td>
                  <td className="px-4 py-2 border-b">{item.exit}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
