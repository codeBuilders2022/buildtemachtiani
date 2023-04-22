import React, { useState } from "react";
import "./VerificationCodeInput.scss";
// import logo from '../../../img/register/logo.png';
import ReactCodeInput from "react-verification-code-input";
// import Button from "../../../globalComponents/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import moment from "]moment";
import Cookies from "universal-cookie";
import Button from "../Button/Button";
var timers
const VerificationCodeInput = ({ children }) => {
  const navigate = useNavigate();
  const [code, setCode] = useState();
  const [isCliked, setIsCliked] = useState(0);
  const [timeTotal, setTimeTotal] = useState(false);
  const [stopInterval,setStopInterval] = useState(false);
  const timeCookie = new Cookies();
  function timer(start,response) {
    var sec = start;
    timers = setInterval(function () {
      if(document.getElementById("safeTimerDisplay"))
      {
        document.getElementById("safeTimerDisplay").innerHTML = "00:" + sec;
      }
      // console.log("sec",sec);
      setTimeTotal(sec);
      timeCookie.set("time", sec, { path: "/verification-code" });
      sec--;
      if (sec < 0) {
        clearInterval(timers);
        if(document.getElementById("safeTimerDisplay"))
        {
          document.getElementById("safeTimerDisplay").innerHTML = "Reenviar código";
        }
        
        
      }
      if(stopInterval == -2)
      {
        clearInterval(timers);
      }
    }, 1000);
  }
  useEffect(() => {
    const infoCokie = timeCookie.get("time");
    if (infoCokie) {
      timer(infoCokie);
    } else {
      timer(0);
    }
  }, []);
  

const correct = ()=>
{
  // setStopInterval(true)
  clearInterval(timers);
  navigate("/new-password")
}
  return (
    <>
      {isCliked ? (
        <>
          {code === "12345" ? 
              correct()            
          : (
            <>
              <div className="code-box-red">
                <div className="code-border-red">
                  <ReactCodeInput
                    fields={5}
                    fieldWidth={50}
                    fieldHeight={80}
                    className="input-code"
                    onComplete={(e) => setCode(e)}
                  ></ReactCodeInput>
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <div className="code-box">
            <div className="code-border">
              <ReactCodeInput
                fields={5}
                fieldWidth={50}
                fieldHeight={80}
                className="input-code"
                onComplete={(e) => setCode(e)}
              ></ReactCodeInput>
            </div>
          </div>
        </>
      )}
      <div className="buttonContainer-code">
        <Button
          className={"btn_cancel"}
          title={"Cancelar"}
          onCLick={() => navigate("/#")}
        ></Button>
        <Button
          className={"btn_primary"}
          title={"Enviar código"}
          onCLick={() => setIsCliked(1)}
        ></Button>
      </div>

      <div className="bottom-link" onClick={() => {}}>
        <Link
          to="#"
          id="safeTimerDisplay"
          onClick={() => {
            timeTotal == 0 ? timer(60) : "";
          }}
        ></Link>
      </div>
    </>
  );
};
export default VerificationCodeInput;