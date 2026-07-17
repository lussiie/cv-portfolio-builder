"use client";

import { useState } from "react";

type Props = {
  skills: string[];
  setSkills: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function SkillsForm({
  skills,
  setSkills,
}: Props) {
  
  const [skillInput, setSkillInput] = useState("");


  function addSkill() {
    const value = skillInput.trim();

    if (!value) return;


    setSkills([
      ...skills,
      value,
    ]);


    setSkillInput("");
  }


  function removeSkill(index: number) {
    setSkills(
      skills.filter((_, i) => i !== index)
    );
  }


  return (
    <div className="space-y-5">

      <h2 className="text-2xl font-bold">
        Skills
      </h2>


      <div className="flex gap-3">

        <input
          className="flex-1 rounded border p-3"
          placeholder="React, Node.js, PostgreSQL..."
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
        />


        <button
          type="button"
          onClick={addSkill}
          className="rounded bg-green-600 px-5 py-2 text-white"
        >
          Add
        </button>

      </div>


      <div className="space-y-2">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded border p-3"
          >

            <span>
              {skill}
            </span>


            <button
              type="button"
              onClick={() => removeSkill(index)}
              className="text-red-600"
            >
              Remove
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}