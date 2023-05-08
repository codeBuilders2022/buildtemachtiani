import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import correct from './img/iconos-02.png'
import incorrect from './img/iconos-03.png'
import "./Modals.scss"

export const CorrectModal = (description, timer = 3000)=>
{
    Swal.fire({
        html: `<div style="display:flex;flex-direction:column;align-items:center;"><img style="width:100px" src=${correct}><br><span style="font-size:15px;font-weight:bold;color:black;">${description}</span></div>`,
        showCloseButton: false,
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        focusConfirm: false,
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