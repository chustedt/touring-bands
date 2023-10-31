import { CalendarDays, MapPin } from "lucide-react";
import React from "react";
import { formatDate } from "../../utils/date-formatter";

const BandDetails = ({ band }) => {
  return (
    <>
      <div className="flex gap-4 mb-2">
        <CalendarDays aria-hidden role="presentation" tabIndex="-1" />
        <time>{formatDate(band.date)}</time>
      </div>
      <div className="flex gap-4 mb-2">
        <MapPin aria-hidden role="presentation" tabIndex="-1" />
        <address>{band.location}</address>
      </div>
    </>
  );
};

export default BandDetails;
