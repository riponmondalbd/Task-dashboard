const Table = () => {
  return (
    <div>
      <table className="w-full">
        <thead className="bg-[#0F172B80] border border-[#2B7FFF33]">
          <tr>
            <th> Client Name</th>
            <th> Client Phone</th>
            <th> Client mail</th>
            <th> Device</th>
            <th> Repair Type</th>
            <th> Date</th>
            <th> Slot no</th>
            <th> Start Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jane.D</td>
            <td>01960685765</td>
            <td>admin@gmail.com</td>
            <td>Apple / iPhone 13 Pro</td>
            <td>Screen</td>
            <td>02/06/2026</td>
            <td>1</td>
            <td>09:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
