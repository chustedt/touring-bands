import React from "react";
import LazyImage from "../LazyImage";
import { CalendarDays, MapPin } from "lucide-react";
import { formatDate } from "../../utils/date-formatter";
import BandDetails from "../BandDetails";

const Card = ({ band }) => {
  return (
    <div className="flex flex-col border max-w-sm">
      <LazyImage
        className="object-cover object-center h-48 w-96"
        src={band.imgUrl}
        alt={`Album cover for ${band.name}`}
        heigth={600}
        width={600}
      />
      <div className="flex flex-col p-4 flex-grow">
        <h2 className="text-xl font-bold mb-2">{band.name}</h2>
        <BandDetails band={band} />
      </div>
    </div>
  );
};

export default Card;
