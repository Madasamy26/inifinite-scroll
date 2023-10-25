import { useCallback, useEffect, useState } from "react";

export default function ModalComponent({ data }) {
  useEffect(() => {
    console.log("modal", data);
  }, [data]);
  return (
    <div>
      <h3>product Details</h3>
      <div className="product-details">
        <span>{data.title}</span>
        <span>{data.description}</span>
      </div>
    </div>
  );
}
