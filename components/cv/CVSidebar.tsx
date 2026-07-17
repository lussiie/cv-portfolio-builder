export default function CVSidebar({ cv }: { cv: any }) {
  return (
    <aside className="border-l border-[#E0E6EB] bg-[#F8FAFC] p-8">
      {/* Skills */}
      <section className="mb-10">
        <h2 className="mb-5 border-b-2 border-[#0A66C2] pb-2 text-xl font-bold text-[#0A2540]">
          Skills
        </h2>
        <div className="flex flex-wrap gap-3">
          {cv.skills?.map((skill: any, index: number) => (
            <span
              key={index}
              className="rounded-lg bg-[#E6F0FA] px-4 py-2 text-sm font-medium text-[#0A66C2]"
            >
              {typeof skill === "string" ? skill : skill.name}
              {typeof skill !== "string" && skill.level && (
                <span className="ml-1 text-[#4FA3E3]">
                  ({skill.level})
                </span>
              )}
            </span>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section className="mb-10">
        <h2 className="mb-5 border-b-2 border-[#0A66C2] pb-2 text-xl font-bold text-[#0A2540]">
          Languages
        </h2>
        <div className="space-y-4">
          {cv.languages?.map((lang: any, index: number) => (
            <div
              key={index}
              className="rounded-lg border border-[#E0E6EB] bg-white p-3"
            >
              <p className="font-semibold text-[#0A2540]">
                {typeof lang === "string" ? lang : lang.name}
              </p>
              {typeof lang !== "string" && lang.level && (
                <p className="text-sm text-[#5E6C77]">
                  {lang.level}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Interests */}
      <section>
        <h2 className="mb-5 border-b-2 border-[#0A66C2] pb-2 text-xl font-bold text-[#0A2540]">
          Interests
        </h2>
        <div className="space-y-3">
          {cv.interests?.map((item: any, index: number) => (
            <div
              key={index}
              className="flex items-center gap-2 text-[#334155]"
            >
              <span className="text-[#0A66C2]">•</span>
              {typeof item === "string" ? item : item.name}
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}