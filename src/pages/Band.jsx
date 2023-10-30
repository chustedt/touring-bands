import React from "react";
import { getBandById } from "../services/bands-service";
import { useLoaderData } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import PageContent from "../layouts/PageContent";
import BackToHome from "../components/BackToHome";
import BandDetails from "../components/BandDetails";
import LazyImage from "../components/LazyImage";
import HtmlContent from "../components/HtmlContent";
import TicketPurchaseForm from "../components/TicketPurchaseForm";

export async function loader({ params }) {
  const band = await getBandById(params.bandId);
  return { band };
}

const Band = () => {
  const { band } = useLoaderData();

  return (
    <PageContent>
      <BackToHome />
      <section>
        <PageTitle title={band.name} />
        <BandDetails band={band} />
      </section>
      <section className="p-8 m-auto">
        <div className="flex flex-wrap lg:flex-nowrap gap-4">
          <div className="w-full sm:w-1/3 ">
            <LazyImage
              className="mb-4"
              src={band.imgUrl}
              alt={`Album cover for ${band.name}`}
              loading="lazy"
              height={600}
              width={600}
            />
            <HtmlContent htmlContent={band.description_blurb} />
          </div>
          <div className="bg-gray-200 p-8">
            <TicketPurchaseForm ticketTypes={band.ticketTypes} />
          </div>
        </div>
      </section>
    </PageContent>
  );
};

export default Band;
