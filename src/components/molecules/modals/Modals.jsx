import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import check from './img/check.png'
export const CorrectModal = (description)=>
{
    Swal.fire({
        html: `<div style="display:flex;flex-direction:column;align-items:center;"><img src=${check}><br><span style="font-size:15px;font-weight:bold;color:black;">${description}</span></div>`,
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