import React from "react";
import { Header } from "../../components";

import {
  InstruccionesAutores,
  Convocatoria,
  Modalidades,
  InfoPuntos,
  Evaluacion,
  field,
  tableConvocatoria,
} from "../../data/dummy";

const Instrucciones = () => {
  return (
    <div className="dark:bg-gray-600 dark:text-white m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl md:bg-fondo-b md:bg-cover md:bg-center">
      <div className="flex items-center">
        <Header
          category="Revista internacional de Ciencias de la Educación Temachtiani"
          title="LO QUE DEBES SABER"
        />
      </div>
      <div className="p-5 bg-slate-100 dark:bg-gray-500 rounded-2xl opacity-90 mb-10">
        <Convocatoria />
        <div className="flex justify-center items-center pb-10">
          <div className="md:w-4/5 text-black">
            <table className="bg-white rounded-lg border-collapse h-72 p-5 m-auto md:w-full">
              <thead>
                {field.map((i, index) => {
                  return (
                    <tr key={index}>
                      <th className="text-gray-500 bg-gray-900 border-b-2 border-r w-1/3">
                        {i.volumen}
                      </th>
                      <th className="text-gray-500 bg-gray-900 border-b-2 border-r">
                        {i.Meses}
                      </th>
                      <th className="text-gray-500 bg-gray-900 border-b-2 p-2">
                        {i.Fecha}
                      </th>
                    </tr>
                  );
                })}
              </thead>
              <tbody>
                {tableConvocatoria.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="border-t-1 border-solid border-gray text-center">
                        {item.Volumenes}
                      </td>
                      <td className="border-t-1 border-solid border-gray text-center">
                        {item.FechasMeses}
                      </td>
                      <td className="border-t-1 border-solid border-gray text-center">
                        {item.FechaLimite}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <span className="dark:text-white">
              <strong>NOTA: Todo el año se reciben contribuciones.</strong>
            </span>
          </div>
        </div>
      </div>
      <div className="p-5 bg-slate-100 dark:bg-gray-500 rounded-2xl opacity-90 mb-8">
        <Modalidades />
        <div className="flex justify-center">
          <div className="w-3/4 flex items-center justify-center flex-wrap gap-4">
            {InfoPuntos.map((inf) => (
              <div
                key={inf.info}
                className="flex flex-col m-2 p-3 text-center justify-center border-solid border-2 border-slate-500 
              rounded-lg w-60 h-40 dark:border-white"
              >
                <p>{inf.info}</p>
              </div>
            ))}
          </div>
        </div>
        <Evaluacion />
      </div>

      <InstruccionesAutores />
    </div>
  );
};

export default Instrucciones;
