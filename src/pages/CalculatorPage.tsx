import { useState } from "react";

const vehicles: Record<string, { label: string; factor: number }> = {
  "car-petrol": { label: "Car (Petrol)", factor: 170 },
  "car-diesel": { label: "Car (Diesel)", factor: 155 },
  "car-cng": { label: "Car (CNG)", factor: 117 },
  "suv-petrol": { label: "SUV (Petrol)", factor: 210 },
  "suv-diesel": { label: "SUV (Diesel)", factor: 185 },
  bike: { label: "Bike", factor: 80 },
  ev: { label: "Electric Vehicle", factor: 30 },
  bus: { label: "Bus", factor: 45 },
  auto: { label: "Auto Rickshaw", factor: 90 },
  train: { label: "Train", factor: 14 },
};

const equivalents = (grams: number) => [
  { emoji: "🌳", label: "Trees needed to absorb (1 yr)", value: (grams / 21000).toFixed(2) },
  { emoji: "📱", label: "Phone charges", value: Math.round(grams / 8.22).toLocaleString() },
  { emoji: "🚿", label: "Hot showers", value: (grams / 3500).toFixed(1) },
  { emoji: "💡", label: "LED bulb hours", value: Math.round(grams / 6).toLocaleString() },
];

const CalculatorPage = () => {
  const [vehicle, setVehicle] = useState("car-petrol");
  const [distance, setDistance] = useState(10);
  const [passengers, setPassengers] = useState(1);
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const factor = vehicles[vehicle].factor;
    setResult((factor * distance) / passengers);
  };

  const allModes = Object.entries(vehicles).map(([k, v]) => ({
    key: k,
    label: v.label,
    co2: (v.factor * distance) / passengers,
  }));
  const maxCo2 = Math.max(...allModes.map((m) => m.co2));

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-foreground mb-2">CO₂ Calculator</h1>
      <p className="text-muted-foreground mb-8">Calculate per-person emissions for your trip.</p>

      <div className="bg-card border rounded-2xl p-6 shadow-card mb-8">
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Vehicle Type</label>
            <select
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
              className="w-full rounded-xl border bg-background px-3 py-2.5 text-sm"
            >
              {Object.entries(vehicles).map(([k, v]) => (
                <option key={k} value={k}>{v.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Distance (km)</label>
            <input
              type="number"
              min={1}
              value={distance}
              onChange={(e) => setDistance(Math.max(1, +e.target.value))}
              className="w-full rounded-xl border bg-background px-3 py-2.5 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Passengers</label>
            <input
              type="number"
              min={1}
              value={passengers}
              onChange={(e) => setPassengers(Math.max(1, +e.target.value))}
              className="w-full rounded-xl border bg-background px-3 py-2.5 text-sm"
            />
          </div>
        </div>
        <button
          onClick={calculate}
          className="gradient-primary text-primary-foreground px-6 py-2.5 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Calculate Emissions
        </button>
      </div>

      {result !== null && (
        <>
          <div className="bg-card border rounded-2xl p-6 shadow-card mb-8 text-center">
            <p className="text-muted-foreground text-sm mb-1">Your CO₂ emission</p>
            <p className="text-4xl font-extrabold text-primary">{result.toFixed(1)} g</p>
            <p className="text-muted-foreground text-xs mt-1">
              {vehicles[vehicle].label} · {distance} km · {passengers} passenger{passengers > 1 ? "s" : ""}
            </p>
          </div>

          {/* Bar chart */}
          <div className="bg-card border rounded-2xl p-6 shadow-card mb-8">
            <h2 className="font-bold text-foreground mb-4">Comparison Across Modes</h2>
            <div className="space-y-2.5">
              {allModes
                .sort((a, b) => a.co2 - b.co2)
                .map((m) => (
                  <div key={m.key} className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground w-28 shrink-0 text-right">{m.label}</span>
                    <div className="flex-1 bg-muted rounded-full h-5 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          m.key === vehicle ? "gradient-primary" : "bg-primary/30"
                        }`}
                        style={{ width: `${(m.co2 / maxCo2) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-foreground w-16">{m.co2.toFixed(0)} g</span>
                  </div>
                ))}
            </div>
          </div>

          {/* Fun equivalents */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {equivalents(result).map((eq) => (
              <div key={eq.label} className="bg-card border rounded-2xl p-5 shadow-card text-center">
                <div className="text-3xl mb-2">{eq.emoji}</div>
                <div className="text-xl font-extrabold text-foreground">{eq.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{eq.label}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CalculatorPage;
