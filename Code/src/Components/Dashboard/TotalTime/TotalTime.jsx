const TotalTime = ({records,user}) => {
  const timeToMinutes = (timeStr) => {
    if (!timeStr) return 0;
    const [h, m] = timeStr.split(":").map(Number);
    return h * 60 + m;
  };
  const totalWorkMinutes = records
    .filter((item) => item.User === user && item.entry && item.exit)
    .reduce((sum, item) => {
      const entryMin = timeToMinutes(item.entry);
      const exitMin = timeToMinutes(item.exit);
      return sum + (exitMin - entryMin);
    }, 0);
  const totalHours = Math.floor(totalWorkMinutes / 60);
  const totalMinutes = totalWorkMinutes % 60;
  return (
    <>
      <div>
        <div className="text-center">
          <h2 className="text-sm font-semibold">مجموع</h2>
          <p className="text-lg font-bold">
            {totalHours}:{totalMinutes.toString().padStart(2, "0")}
          </p>
        </div>
      </div>
    </>
  );
};

export default TotalTime;
