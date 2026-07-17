import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function CVHeader({ cv }: { cv: any }) {
  const profile = cv?.profile;

  const theme = cv?.themeColor || "blue";
  const template = cv?.template || "modern";

  const themes: any = {
    blue: {
      bg: "bg-blue-700",
      text: "text-blue-600",
    },
    green: {
      bg: "bg-emerald-700",
      text: "text-emerald-600",
    },
    purple: {
      bg: "bg-purple-700",
      text: "text-purple-600",
    },
    red: {
      bg: "bg-rose-700",
      text: "text-rose-600",
    },
  };

  const headerStyle =
    template === "minimal"
      ? "bg-white text-slate-900 border-b border-slate-200"
      : template === "creative"
      ? `bg-gradient-to-r ${themes[theme].bg} to-slate-900 text-white`
      : "bg-slate-900 text-white";

  return (
    <header
      className={`
        grid gap-8 p-10 md:grid-cols-[180px_1fr]
        ${headerStyle}
      `}
    >
      {/* PHOTO */}

      <div className="flex justify-center md:justify-start">
        {profile?.photo ? (
          <img
            src={profile.photo}
            alt="profile"
            className="h-40 w-40 rounded-full border-4 border-white object-cover"
          />
        ) : (
          <div
            className={`
              flex h-40 w-40 items-center justify-center
              rounded-full text-5xl font-bold
              ${
                template === "minimal"
                  ? "bg-slate-100 text-slate-700"
                  : "bg-slate-700 text-white"
              }
            `}
          >
            {profile?.fullName?.charAt(0) || "A"}
          </div>
        )}
      </div>

      {/* INFO */}

      <div>
        <h1
          className={`
            text-5xl font-bold
            ${template === "minimal" ? themes[theme].text : ""}
          `}
        >
          {profile?.fullName || "Your Name"}
        </h1>

        <p
          className={`
            mt-3 text-2xl
            ${
              template === "minimal"
                ? "text-slate-500"
                : "text-slate-300"
            }
          `}
        >
          {profile?.jobTitle || "Job Title"}
        </p>

        <div
          className={`
            mt-8 space-y-3 text-sm
            ${
              template === "minimal"
                ? "text-slate-600"
                : "text-slate-200"
            }
          `}
        >
          {profile?.email && (
            <div className="flex items-center gap-3">
              <Mail size={18} />
              <span>{profile.email}</span>
            </div>
          )}

          {profile?.phone && (
            <div className="flex items-center gap-3">
              <Phone size={18} />
              <span>{profile.phone}</span>
            </div>
          )}

          {profile?.location && (
            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <span>{profile.location}</span>
            </div>
          )}

          {profile?.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline"
            >
              LinkedIn: {profile.linkedin}
            </a>
          )}

          {profile?.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline"
            >
              GitHub: {profile.github}
            </a>
          )}
        </div>
      </div>
    </header>
  );
}