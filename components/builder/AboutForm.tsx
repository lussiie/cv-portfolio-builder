"use client";

type Props = {
  about: string;
  setAbout: React.Dispatch<React.SetStateAction<string>>;
};


export default function AboutForm({
  about,
  setAbout,
}: Props) {

  return (
    <div className="space-y-4">

      <h2 className="text-2xl font-bold">
        About Me
      </h2>


      <textarea
        rows={7}
        className="w-full rounded border p-3"
        placeholder="Write something about yourself..."
        value={about}
        onChange={(e) => setAbout(e.target.value)}
      />

    </div>
  );
}