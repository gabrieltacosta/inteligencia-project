"use client";

import { SetStateAction, useState } from "react";

const DejemForm = () => {
  const [valor, setValor] = useState("");

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setValor(event.target.value);
  };
  return (
    <>
      <div className="flex flex-col max-w-7xl w-full mx-auto items-start gap-1">
        <span className="text-xs text-zinc-400">ID da escala:</span>
        <input
          type="number"
          className="flex-1 bg-transparent border border-zinc-400 px-2 w-80"
          placeholder="Digite o id da escala..."
          required
          onChange={handleChange}
          autoFocus
        />
      </div>
      <div className="flex max-w-7xl w-full">
        {valor === "" ? null : (
          <iframe
            src={`https://sistemasadmin.intranet.policiamilitar.sp.gov.br/Escala/arrelpreesc.aspx?${valor}`}
            width="100%"
            height="800px"
          />
        )}
      </div>
    </>
  );
};

export default DejemForm;
