import React from "react";
//import React, { useEffect, useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import Pdfs from "../../../assets/PDF/RICEDUT-ENERO-2021.pdf";

// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const ContainerPDF = ({ mostrar }) => {
  const PDF = "/" + mostrar + ".pdf";

  const renderToolbar = (Toolbar) => (
    <Toolbar>
      {(slots) => {
        const {
          CurrentPageInput,
          Download,
          EnterFullScreen,
          GoToNextPage,
          GoToPreviousPage,
          NumberOfPages,
          //ShowSearchPopover,
          Zoom,
          ZoomIn,
          ZoomOut,
        } = slots;
        return (
          <div className="flex items-center w-full">
            {/* <div style={{ padding: "0px 2px" }}>
              <ShowSearchPopover />
            </div> */}
            <div style={{ padding: "0px 2px" }}>
              <ZoomOut />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <Zoom />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <ZoomIn />
            </div>
            <div style={{ padding: "0px 2px", marginLeft: "auto" }}>
              <GoToPreviousPage />
            </div>
            <div
              style={{
                padding: "0px 2px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <CurrentPageInput /> / <NumberOfPages />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <GoToNextPage />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <Download />
            </div>
            <div style={{ padding: "0px 2px", marginLeft: "auto" }}>
              <EnterFullScreen />
            </div>
          </div>
        );
      }}
    </Toolbar>
  );

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: (defaultTabs) => [],
    renderToolbar,
  });

  return (
    <div className="m-auto md:w-1000 h-screen mt-14 md:mt-1">
      {/* <div className="m-auto md:w-1000 mt-14 md:mt-1"> */}
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
        {/* //Aqui en Viewer no acepta caracteres especiales, por ejemplo [".", ","] */}
        <Viewer plugins={[defaultLayoutPluginInstance]} fileUrl={Pdfs} />
      </Worker>
    </div>
  );
};

export default ContainerPDF;
