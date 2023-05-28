import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import correct from '../../../assets/images/iconos-02.png'
import incorrect from '../../../assets/images/iconos-03.png'
import question from '../../../assets/images/iconos-01.png'
import Almiracion from '../../../assets/images/almiracion.png'
// import { second } from "./img/almiracion.png"
import "./Modals.scss"

export const CorrectModal = (description, timer = 3000)=>
{
    Swal.fire({
        html: `<div style="display:flex;flex-direction:column;align-items:center;"><img style="width:150px" src=${correct}><br><span style="font-size:15px;font-weight:bold;color:black;">${description}</span></div>`,
        showCloseButton: false,
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        focusConfirm: false,
        customClass: {
          popup: 'my-swal_error',
        },
        backdrop: 'rgba(0,0,0,0.4)',
        timer: timer,
      });
}
export const IncorrectModal = (description, btn_close = false, timer = 3000)=>
{
    Swal.fire({
        html: `<div style="display:flex;flex-direction:column;align-items:center;"><img style="width:150px" src=${incorrect}><br><span style="font-size:15px;font-weight:bold;color:black;">${description}</span></div>`,
        showCloseButton: false,
        showConfirmButton: btn_close,
        confirmButtonClass: 'my-swal-confirm-button',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        focusConfirm: false,
        customClass: {
          popup: 'my-swal_error',
        },
        backdrop: 'rgba(0,0,0,0.4)',
         timer: btn_close ? null : timer,
      });
}

export const RegistroModal = (description, message, timer = 4500)=>{
  return Swal.fire({
      html: `<div style="display:flex;flex-direction:column;align-items:center; gap:20px;">
                  <img style="width:150px" src=${correct}>
                  <div style="display:flex; flex-direction:column; gap:5px;">
                      <span style="font-size:16px;font-weight:bold;color:black;">
                          ${description}
                      </span>
                      <label style="font-size:14px;">${message}</label>
                  </div>
             </div>`,
      showCloseButton: false,
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      focusConfirm: false,
      customClass: {
        popup: 'my-swal_error',
      },
      backdrop: 'rgba(0,0,0,0.4)',
      timer: timer
    });
}


export const InfoModal = (description, message)=>{
  return Swal.fire({
      html: `<div style="display:flex;flex-direction:column;align-items:center; gap:20px;">
                  <img style="width:150px" src=${Almiracion}>
                  <div style="display:flex; flex-direction:column; gap:5px;">
                      <span style="font-size:16px;font-weight:bold;color:black;">
                          ${description}
                      </span>
                      <label style="font-size:14px;">${message}</label>
                  </div>
             </div>`,
      showCloseButton: false,
      showConfirmButton: true,
      confirmButtonClass: 'my-swal-confirm-button',
      showCancelButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      focusConfirm: false,
      customClass: {
        popup: 'my-swal_error',
      },
      backdrop: 'rgba(0,0,0,0.4)',
    });
}