import { useState } from "react";
import { Check, Heart } from "lucide-react";

const pledges = [
  "🚌 Use public transport at least 3x/week",
  "🚗 Carpool to work/college",
  "🔌 Switch to an EV for my next vehicle",
  "🚲 Cycle for trips under 5 km",
  "🛠️ Get vehicle serviced regularly",
  "🌳 Plant at least 1 tree this year",
  "♻️ Offset my carbon emissions monthly",
  "📴 Avoid unnecessary car trips",
];

const sdgs = [
  { num: 3, title: "Good Health & Well-Being", desc: "Reduced pollution means cleaner air and fewer respiratory diseases." },
  { num: 7, title: "Affordable & Clean Energy", desc: "Promoting EVs and clean fuels supports sustainable energy goals." },
  { num: 11, title: "Sustainable Cities", desc: "Public transport and cycling make cities more livable and less congested." },
  { num: 13, title: "Climate Action", desc: "Every gram of CO₂ reduced helps fight the climate crisis." },
];

const team = ["Sakshi Shewale", "Tejal Kadam", "Sourabh Jain", "Prashant Dandade"];

const PledgePage = () => {
  const [selected, setSelected] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    const next = new Set(selected);
    next.has(i) ? next.delete(i) : next.add(i);
    setSelected(next);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-foreground mb-2">Take the Green Pledge</h1>
      <p className="text-muted-foreground mb-8">Select habits you'll commit to for a greener future.</p>

      {/* Pledge buttons */}
      <div className="grid sm:grid-cols-2 gap-3 mb-6">
        {pledges.map((p, i) => (
          <button
            key={i}
            onClick={() => toggle(i)}
            className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border text-left text-sm font-medium transition ${
              selected.has(i)
                ? "border-primary bg-primary/10 text-primary"
                : "border-border bg-card text-foreground hover:bg-muted"
            }`}
          >
            <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 ${
              selected.has(i) ? "bg-primary text-primary-foreground" : "border bg-background"
            }`}>
              {selected.has(i) && <Check className="w-3.5 h-3.5" />}
            </div>
            {p}
          </button>
        ))}
      </div>

      {selected.size > 0 && (
        <div className="gradient-hero text-primary-foreground rounded-2xl p-6 text-center mb-12">
          <Heart className="w-8 h-8 mx-auto mb-2" />
          <p className="text-2xl font-extrabold">{selected.size} Pledge{selected.size > 1 ? "s" : ""} Taken!</p>
          <p className="opacity-80 text-sm mt-1">Thank you for committing to a greener planet 🌍</p>
        </div>
      )}

      {/* SDGs */}
      <h2 className="text-2xl font-bold text-foreground mb-5">Aligned with UN SDGs</h2>
      <div className="grid sm:grid-cols-2 gap-4 mb-12">
        {sdgs.map((sdg) => (
          <div key={sdg.num} className="bg-card border rounded-2xl p-5 shadow-card">
            <div className="gradient-secondary text-secondary-foreground w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-sm mb-3">
              {sdg.num}
            </div>
            <h3 className="font-bold text-foreground mb-1 text-sm">{sdg.title}</h3>
            <p className="text-xs text-muted-foreground">{sdg.desc}</p>
          </div>
        ))}
      </div>

      {/* Team */}
      <h2 className="text-2xl font-bold text-foreground mb-5">Team Credits</h2>
      <div className="bg-card border rounded-2xl p-6 shadow-card">
        <div className="flex flex-wrap gap-3">
          {team.map((name) => (
            <div key={name} className="bg-muted px-4 py-2 rounded-xl text-sm font-medium text-foreground">
              {name}
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-4">EVS Project · 2024-25 · PCMC College</p>
      </div>
    </div>
  );
};

export default PledgePage;
