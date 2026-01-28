import TopNavbar from "../../common/TopNavbar";
import BookingLink from "./BookingLink";
import Cards from "./Cards";
import TableData from "./TableData";

const Appointment = () => {
  return (
    <div>
      <TopNavbar title={"Appointments"} />
      <div className="pl-6 py-6 pr-6 xl:pr-0 space-y-5.5">
        <Cards />
        <BookingLink />
        <TableData />
      </div>
    </div>
  );
};

export default Appointment;
