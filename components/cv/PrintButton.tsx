"use client";

export default function PrintButton() {

  function handlePrint() {
    window.print();
  }

  return (

    <button
      onClick={handlePrint}
      className="
        rounded-xl
        bg-black
        px-5
        py-2
        text-white
        hover:bg-gray-800
      "
    >
      Download PDF
    </button>

  );

}