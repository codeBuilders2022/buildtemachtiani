import React, { useEffect, useState } from "react";

import "./LineTime.scss";
import { Header } from "../../../components";
import StepsLine from "../../../components/organisms/StepsLine/StepsLine";
import Back from "../../../components/atoms/Back/Back";
import { useParams } from "react-router-dom";
import { getDataLine } from "./api";

const LineTime = () => {
  const [data,setData]=useState()
  const [institucion,setInstitucion] = useState()
  const [institucionArray,setInstitucionArray] = useState()
  const {id,idUser} = useParams()
  useEffect(()=>
  {
    getDataLine(id,setData,setInstitucion)
  },[])
  useEffect(()=>
  {
    
    if(data?.stakingInputData)
    {
      let namesCpy = []
      data.stakingInputData.map((item,key)=>
      {
        namesCpy = [...namesCpy]
        namesCpy.push(item[`nameStaking${key}`].value +" "+item[`lastName${key}`].value)
      })
      setNames(namesCpy)
    }
  },[data])
  const [names,setNames] = useState([])


  //filtrado de institucion
  useEffect(()=>{
    let institucionArray = []
    let arrayFilter = []
    var palabrasUnicas = [];
    if(data?.stakingInputData)
    {
      institucionArray.push(institucion)
      data.stakingInputData.map((item,key)=>
      {
        institucionArray.push(item[`Institución${key}`].value)
        
      })
      
      

        // Recorremos el array original
        for (var i = 0; i < institucionArray.length; i++) {
          // Verificamos si la palabra actual no existe en el nuevo array
          if (palabrasUnicas.indexOf(institucionArray[i]) === -1) {
            // Agregamos la palabra al nuevo array
            palabrasUnicas.push(institucionArray[i]);
          }
        }
        setInstitucionArray(palabrasUnicas)
      
    }

  },[institucion])
  return (
    <div className="dark:bg-gray-600 bg-white dark:text-white LineTime">
    <Back className={"_back_"} url={`/user/dashboard/${idUser}`}/>
      <Header title={"Etapas de mi artículo"} />
      <div className="cnt_steps bg-slate-100 dark:bg-gray-500">
        <StepsLine estatus={data?.estatus}/>
      </div>
      <div className="description_s">
        <h1 className="title_descrip">
          {/* Atención al shock cardiogénico en centros con programa de código
          infarto sin cirugía cardiaca. */}
          {data?.name}
        </h1>
        <h2><span style={{fontSize:"18px",fontWeight:"bold"}}>Autor(es):</span> <span style={{fontSize:"18px"}}>{names?data?.autor+", ":data?.autor} {names?names.map((item,key)=>{return(<>{key == names.length-1 ?item:item+", "}</>)}):""}</span></h2>
        <h2><span style={{fontSize:"18px",fontWeight:"bold"}}>Institución:</span> <span style={{fontSize:"18px"}}> {institucionArray?institucionArray.map((item,key)=>{return(<>{key == institucionArray.length-1 ?item:item+", "}</>)}):""}</span></h2>
        <div className="block_descrip">
          <h2>Resumen</h2>
          
          {/* <p>
            {data?.resume}
          </p> */}
          <div dangerouslySetInnerHTML={{ __html: data?.resume }} />
        </div>
      </div>
    </div>
  );
};

export default LineTime;
