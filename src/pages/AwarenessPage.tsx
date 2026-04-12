import { Thermometer, Wind, Snowflake, Waves } from "lucide-react";

const impacts = [
  { icon: Thermometer, title: "Global Warming", desc: "Earth's avg temperature has risen 1.1°C since 1880. Transport is a top contributor through fossil fuel combustion.", color: "bg-destructive/10 text-destructive" },
  { icon: Wind, title: "Air Pollution", desc: "Vehicle exhaust releases NOx, PM2.5, and CO which cause respiratory diseases and smog in cities.", color: "bg-secondary/10 text-secondary" },
  { icon: Snowflake, title: "Melting Ice Caps", desc: "Arctic sea ice is declining ~13% per decade. Rising seas threaten 680M people in coastal zones.", color: "bg-primary/10 text-primary" },
  { icon: Waves, title: "Ocean Acidification", desc: "Oceans absorb ~30% of CO₂, making water acidic. Coral reefs and marine ecosystems face collapse.", color: "bg-accent text-accent-foreground" },
];

const indiaData = [
  { sector: "Road Transport", pct: 87 },
  { sector: "Railways", pct: 4 },
  { sector: "Aviation", pct: 6 },
  { sector: "Shipping", pct: 3 },
];

const AwarenessPage = () => (
  <div className="max-w-6xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-extrabold text-foreground mb-2">Environmental Awareness</h1>
    <p className="text-muted-foreground mb-10">Understanding the climate crisis and how transport impacts our planet.</p>

    {/* Climate stats banner */}
    <div className="gradient-hero text-primary-foreground rounded-2xl p-8 mb-10">
      <h2 className="text-2xl font-bold mb-3">The Climate Crisis in Numbers</h2>
      <div className="grid sm:grid-cols-3 gap-6 text-sm">
        <div>
          <div className="text-3xl font-extrabold">421 ppm</div>
          <p className="opacity-80">Current atmospheric CO₂ level — highest in 800,000 years</p>
        </div>
        <div>
          <div className="text-3xl font-extrabold">2050</div>
          <p className="opacity-80">Deadline for net-zero to limit warming to 1.5°C</p>
        </div>
        <div>
          <div className="text-3xl font-extrabold">3.6B</div>
          <p className="opacity-80">People living in areas highly vulnerable to climate change</p>
        </div>
      </div>
    </div>

    {/* Impact cards */}
    <h2 className="text-2xl font-bold text-foreground mb-5">How Transport Harms the Environment</h2>
    <div className="grid sm:grid-cols-2 gap-4 mb-12">
      {impacts.map((item) => (
        <div key={item.title} className="bg-card border rounded-2xl p-6 shadow-card">
          <div className={`inline-flex p-2.5 rounded-xl mb-3 ${item.color}`}>
            <item.icon className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
          <p className="text-sm text-muted-foreground">{item.desc}</p>
        </div>
      ))}
    </div>

    {/* India transport emissions */}
    <h2 className="text-2xl font-bold text-foreground mb-5">India's Transport Emission Breakdown</h2>
    <div className="bg-card border rounded-2xl p-6 shadow-card mb-12">
      <div className="space-y-3">
        {indiaData.map((d) => (
          <div key={d.sector} className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground w-32 shrink-0">{d.sector}</span>
            <div className="flex-1 bg-muted rounded-full h-6 overflow-hidden">
              <div
                className="h-full gradient-primary rounded-full flex items-center justify-end pr-2"
                style={{ width: `${d.pct}%` }}
              >
                <span className="text-xs font-bold text-primary-foreground">{d.pct}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Alandi local context */}
    <h2 className="text-2xl font-bold text-foreground mb-5">Local Context: Alandi, Pune</h2>
    <div className="bg-card border rounded-2xl p-6 shadow-card">
      <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
        <li>Alandi is a major pilgrimage town on the banks of the <strong className="text-foreground">Indrayani River</strong>, attracting lakhs of devotees annually.</li>
        <li>The Bhosari–Alandi road witnesses <strong className="text-foreground">heavy vehicle congestion</strong> daily, contributing to high emissions.</li>
        <li>Alandi faces a <strong className="text-foreground">dual pollution crisis</strong> — air pollution from traffic & garbage fires, and water pollution with toxic foam on the Indrayani.</li>
        <li>The town's AQI frequently crosses <strong className="text-foreground">150+ (Unhealthy)</strong> during winter and festival seasons.</li>
        <li>MPCB has proposed an <strong className="text-foreground">Environmental Improvement Action Plan</strong> specifically for Alandi to tackle pollution.</li>
        <li>Two-wheelers and auto-rickshaws dominate local transport, with <strong className="text-foreground">limited public transit</strong> options for residents.</li>
        <li>During the annual <strong className="text-foreground">Alandi Wari</strong> pilgrimage, vehicular emissions spike significantly due to massive crowds and bus traffic.</li>
        <li>Pune Metro's planned expansion could help reduce road congestion on the <strong className="text-foreground">Pune–Alandi corridor</strong> in the future.</li>
      </ul>
    </div>
  </div>
);

export default AwarenessPage;
