import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import correct from './img/iconos-02.png'
import incorrect from './img/iconos-03.png'
export const CorrectModal = (description)=>
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
        timer: 2000,
      });
}
export const IncorrectModal = (description)=>
{
    Swal.fire({
        html: `<div style="display:flex;flex-direction:column;align-items:center;"><img style="width:100px" src=${incorrect}><br><span style="font-size:15px;font-weight:bold;color:black;">${description}</span></div>`,
        showCloseButton: false,
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        focusConfirm: false,
        backdrop: 'rgba(0,0,0,0.4)',
        timer: 2000,
      });
}