import { Link } from "react-router-dom";
import { Calculator, Globe, Leaf, HelpCircle, Heart, TrendingUp, Thermometer, Factory, Trees } from "lucide-react";

const stats = [
  { icon: Thermometer, value: "1.1°C", label: "Global temp rise since pre-industrial era", color: "bg-destructive/10 text-destructive" },
  { icon: Factory, value: "36.8 Bt", label: "CO₂ emitted globally in 2023", color: "bg-secondary/10 text-secondary" },
  { icon: TrendingUp, value: "16%", label: "Transport share of global emissions", color: "bg-primary/10 text-primary" },
  { icon: Trees, value: "3.04T", label: "Trees on Earth (we need more!)", color: "bg-accent text-accent-foreground" },
];

const quickLinks = [
  { to: "/calculator", label: "Calculator", icon: Calculator, desc: "Calculate your vehicle CO₂" },
  { to: "/awareness", label: "Awareness", icon: Globe, desc: "Learn about climate crisis" },
  { to: "/eco-tips", label: "Eco Tips", icon: Leaf, desc: "Reduce your footprint" },
  { to: "/quiz", label: "Quiz", icon: HelpCircle, desc: "Test your knowledge" },
  { to: "/pledge", label: "Take Pledge", icon: Heart, desc: "Commit to green habits" },
];

const Index = () => (
  <div className="max-w-6xl mx-auto px-4 py-12">
    {/* Hero */}
    <section className="text-center mb-16">
      <div className="inline-block gradient-hero text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
        🌱 EVS College Project
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground leading-tight">
        Vehicle CO₂ Emission<br />
        <span className="text-primary">Tracker</span>
      </h1>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
        Understand your carbon footprint from daily transport. Calculate emissions, learn about climate change, and pledge for a greener future.
      </p>
      <div className="flex justify-center gap-3">
        <Link to="/calculator" className="gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold shadow-elevated hover:opacity-90 transition">
          Start Calculating →
        </Link>
        <Link to="/awareness" className="bg-card border px-6 py-3 rounded-xl font-semibold text-foreground shadow-card hover:bg-muted transition">
          Learn More
        </Link>
      </div>
    </section>

    {/* Stats */}
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
      {stats.map((s) => (
        <div key={s.label} className="bg-card rounded-2xl p-5 shadow-card border text-center">
          <div className={`inline-flex p-2.5 rounded-xl mb-3 ${s.color}`}>
            <s.icon className="w-5 h-5" />
          </div>
          <div className="text-2xl font-extrabold text-foreground">{s.value}</div>
          <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
        </div>
      ))}
    </section>

    {/* Quick Access */}
    <section>
      <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Explore</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {quickLinks.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="bg-card border rounded-2xl p-6 shadow-card hover:shadow-elevated transition group"
          >
            <div className="bg-primary/10 text-primary p-2.5 rounded-xl inline-flex mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition">
              <l.icon className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-foreground mb-1">{l.label}</h3>
            <p className="text-sm text-muted-foreground">{l.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  </div>
);

export default Index;
