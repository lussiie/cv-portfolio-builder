"use client";

import { useEffect } from "react";

type Props = {
  photo: string;
  setPhoto: React.Dispatch<React.SetStateAction<string>>;
};

export default function PhotoUpload({
  photo,
  setPhoto,
}: Props) {


  useEffect(() => {

    const savedPhoto = sessionStorage.getItem("cv-photo");

    if (savedPhoto) {
      setPhoto(savedPhoto);
    }

  }, [setPhoto]);



  function handleUpload(
    event: React.ChangeEvent<HTMLInputElement>
  ) {

    const file = event.target.files?.[0];

    if (!file) return;


    const reader = new FileReader();


    reader.onload = () => {

      const image = reader.result as string;

      setPhoto(image);

      sessionStorage.setItem(
        "cv-photo",
        image
      );

    };


    reader.readAsDataURL(file);

  }



  return (
    <div className="rounded-2xl border border-[#E0E6EB] bg-white p-6">

      <h2 className="mb-4 text-base font-semibold text-[#0A2540]">
        CV photo
      </h2>

      <div className="flex items-center gap-5">

        {photo ? (

          <img
            src={photo}
            alt="profile"
            className="h-20 w-20 rounded-full object-cover ring-2 ring-[#E6F0FA]"
          />

        ) : (

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#F3F6F8] text-xs text-[#5E6C77]">
            No photo
          </div>

        )}


        <label className="cursor-pointer rounded-lg bg-[#0A66C2] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#004182]">

          Upload CV photo

          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleUpload}
          />

        </label>


      </div>

    </div>
  );
}