import TopNavbar from "../../common/TopNavbar";
import BookingLink from "./BookingLink";
import Cards from "./Cards";
import Pagination from "./Pagination";
import TableData from "./TableData";

const Appointment = () => {
  return (
    <div>
      <title>Appointment | Task</title>
      <TopNavbar title={"Appointments"} />
      <div className="pl-6 py-6 pr-6 xl:pr-0 space-y-5.5">
        <Cards />
        <BookingLink />
        <TableData />
        <Pagination />
      </div>
    </div>
  );
};

export default Appointment;
