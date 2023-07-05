import React from 'react';
import { format } from 'date-fns';

const FechaFormateada = ({ fecha }) => {
  const fechaFormateada = format(new Date(fecha), "dd 'de' MMMM 'de' yyyy", { locale: es });

  return <span>{fechaFormateada}</span>;
};

export default FechaFormateada;
