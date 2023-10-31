import React from "react";

import { getBands } from "../services/bands-service";
import Card from "../components/Card";
import { NavLink, useLoaderData } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import PageContent from "../layouts/PageContent";
import Seo from "../components/Seo";

export async function loader() {
  const bands = await getBands();

  return { bands };
}

const Home = () => {
  const { bands } = useLoaderData();

  return (
    <PageContent>
      <Seo
        title="Upcoming Shows"
        description="Purchase concert tickets for upcoming shows"
      />
      <section>
        <PageTitle title="Upcoming Shows" />
        <div className="flex flex-row flex-wrap justify-center items-stretch gap-4">
          {bands.map((band) => (
            <NavLink key={band.id} className="flex" to={`/bands/${band.id}`}>
              <Card band={band} />
            </NavLink>
          ))}
        </div>
      </section>
    </PageContent>
  );
};

export default Home;
