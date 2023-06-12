import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";
// import avatar5 from "../../data/avatar5.jpg";
// import avatar5 from "../../assets/images/avatar5.jpg";
import { About_description } from "../../data/dummy";
import Header from "../../components/molecules/Header/Header";
import Grid from "../../components/atoms/Grid/Grid";
import Sidebar from "../../components/organisms/Sidebar/Sidebar";

const About = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="dark:bg-gray-600 dark:text-white md:mt-32 m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Grid>
      <div className="w-full">
        <Header title="La Revista Internacional de Ciencias de la Educación Temachtiani" category={"Acerca de"}/>
        <About_description />
      </div>
      <Sidebar/>
      </Grid>
    </div>
  );
};

export default About;
