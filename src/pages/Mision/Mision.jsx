import React from "react";
import Banner from "../../assets/images/banner.png";
import { MisionVision } from "../../data/dummy";
import Grid from "../../components/atoms/Grid/Grid";
import Sidebar from "../../components/organisms/Sidebar/Sidebar";

const Mision = () => {
  return (
      <div className="dark:bg-gray-600 dark:text-white m-2 md:m-10 md:mt-32 p-2 md:p-10 bg-white rounded-3xl">
        <Grid>
          <MisionVision />
          <Sidebar/>
        </Grid>
      </div>
  );
};

export default Mision;
