import React from "react";

// * Types
interface Props {
  msg: string;
}

function InputError({ msg }: Props) {
  return (
    <div className="absolute right-0 -bottom-6 text-[12px] self-end text-red">
      {msg}
    </div>
  );
}

export default InputError;
