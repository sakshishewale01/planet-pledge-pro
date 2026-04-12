import { Bus, Users, Fuel, Bike, Wrench, TreePine } from "lucide-react";

const tips = [
  {
    icon: Bus,
    title: "Use Public Transport",
    points: [
      "Buses emit ~45g CO₂/km per person vs 170g for a petrol car",
      "Trains are the cleanest at just 14g CO₂/km",
      "Metro & local trains avoid road congestion entirely",
    ],
  },
  {
    icon: Users,
    title: "Carpool & Ride-Share",
    points: [
      "Sharing a car with 3 people cuts per-person emissions by 75%",
      "Use apps like Quick Ride or BlaBlaCar for daily commutes",
      "Office carpooling programs save money and reduce parking stress",
    ],
  },
  {
    icon: Fuel,
    title: "Switch to Cleaner Fuels",
    points: [
      "CNG emits 30% less CO₂ than petrol",
      "EVs produce only 30g CO₂/km (including grid emissions)",
      "Hydrogen fuel cells are emerging as a zero-emission option",
    ],
  },
  {
    icon: Bike,
    title: "Cycle & Walk",
    points: [
      "Zero emissions for trips under 5 km",
      "Health benefits: burns 400-600 cal/hr cycling",
      "Many cities are adding dedicated cycling lanes",
    ],
  },
  {
    icon: Wrench,
    title: "Maintain Your Vehicle",
    points: [
      "Proper tire pressure improves fuel efficiency by 3%",
      "Regular servicing reduces emissions by up to 10%",
      "Clean air filters can save 10% fuel consumption",
    ],
  },
  {
    icon: TreePine,
    title: "Offset Your Carbon",
    points: [
      "Plant trees — one tree absorbs ~21 kg CO₂/year",
      "Support verified carbon offset programs",
      "Choose airlines/companies with carbon-neutral options",
    ],
  },
];

const EcoTipsPage = () => (
  <div className="max-w-6xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-extrabold text-foreground mb-2">Eco-Friendly Tips</h1>
    <p className="text-muted-foreground mb-10">Practical ways to reduce your transport carbon footprint.</p>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {tips.map((tip) => (
        <div key={tip.title} className="bg-card border rounded-2xl p-6 shadow-card hover:shadow-elevated transition">
          <div className="bg-primary/10 text-primary p-2.5 rounded-xl inline-flex mb-3">
            <tip.icon className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-foreground mb-3">{tip.title}</h3>
          <ul className="space-y-2">
            {tip.points.map((pt) => (
              <li key={pt} className="text-sm text-muted-foreground flex gap-2">
                <span className="text-primary mt-0.5">•</span>
                {pt}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default EcoTipsPage;
