"use client";

import { AiOutlineMinusCircle } from "react-icons/ai";

const RemoveButton = ({ id }: { id: string }) => {
  async function removeItem() {
    await fetch(`/api/db/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    });
  }

  return (
    <button title="Remove 1 from cart" onClick={removeItem}>
      <AiOutlineMinusCircle
        size={35}
        className="m-2 rounded-full transition-colors duration-200 hover:text-slate-400"
      />
    </button>
  );
};

export default RemoveButton;
