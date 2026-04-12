import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";

const questions = [
  {
    q: "Which mode of transport has the lowest CO₂ emissions per passenger-km?",
    options: ["Car (Petrol)", "Bus", "Train", "Bike"],
    correct: 2,
  },
  {
    q: "What percentage of global CO₂ emissions comes from the transport sector?",
    options: ["5%", "16%", "30%", "50%"],
    correct: 1,
  },
  {
    q: "How much CO₂ does one tree absorb per year approximately?",
    options: ["5 kg", "21 kg", "100 kg", "500 kg"],
    correct: 1,
  },
  {
    q: "Which fuel type produces the least CO₂ among fossil fuels for cars?",
    options: ["Petrol", "Diesel", "CNG", "All the same"],
    correct: 2,
  },
  {
    q: "What is the current atmospheric CO₂ concentration?",
    options: ["280 ppm", "350 ppm", "421 ppm", "600 ppm"],
    correct: 2,
  },
];

const QuizPage = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (idx: number) => {
    if (submitted) return;
    const newAnswers = [...answers];
    newAnswers[current] = idx;
    setAnswers(newAnswers);
  };

  const score = answers.reduce<number>((s, a, i) => s + (a === questions[i].correct ? 1 : 0), 0);

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-foreground mb-2">Climate Quiz</h1>
      <p className="text-muted-foreground mb-8">Test your knowledge about CO₂ emissions and climate change.</p>

      {/* Progress */}
      <div className="flex gap-1.5 mb-8">
        {questions.map((_, i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full transition-colors ${
              i === current ? "gradient-primary" : answers[i] !== null ? "bg-primary/40" : "bg-muted"
            }`}
          />
        ))}
      </div>

      {!submitted ? (
        <div className="bg-card border rounded-2xl p-6 shadow-card">
          <p className="text-xs text-muted-foreground mb-2">Question {current + 1} of {questions.length}</p>
          <h2 className="text-lg font-bold text-foreground mb-5">{questions[current].q}</h2>
          <div className="space-y-2.5">
            {questions[current].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition ${
                  answers[current] === i
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:bg-muted text-foreground"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
          <div className="flex justify-between mt-6">
            <button
              disabled={current === 0}
              onClick={() => setCurrent(current - 1)}
              className="px-4 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:bg-muted disabled:opacity-30"
            >
              ← Previous
            </button>
            {current < questions.length - 1 ? (
              <button
                disabled={answers[current] === null}
                onClick={() => setCurrent(current + 1)}
                className="gradient-primary text-primary-foreground px-5 py-2 rounded-xl text-sm font-semibold disabled:opacity-30"
              >
                Next →
              </button>
            ) : (
              <button
                disabled={answers.some((a) => a === null)}
                onClick={() => setSubmitted(true)}
                className="gradient-secondary text-secondary-foreground px-5 py-2 rounded-xl text-sm font-semibold disabled:opacity-30"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      ) : (
        <div>
          {/* Score */}
          <div className="bg-card border rounded-2xl p-6 shadow-card text-center mb-8">
            <p className="text-muted-foreground text-sm mb-1">Your Score</p>
            <p className="text-5xl font-extrabold text-primary">{score}/{questions.length}</p>
            <div className="w-full bg-muted rounded-full h-3 mt-4">
              <div className="gradient-primary h-full rounded-full" style={{ width: `${(score / questions.length) * 100}%` }} />
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              {score === 5 ? "🎉 Perfect!" : score >= 3 ? "👍 Good job!" : "📚 Keep learning!"}
            </p>
          </div>

          {/* Review */}
          <div className="space-y-3">
            {questions.map((q, i) => {
              const correct = answers[i] === q.correct;
              return (
                <div key={i} className="bg-card border rounded-2xl p-5 shadow-card">
                  <div className="flex items-start gap-2">
                    {correct ? (
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="text-sm font-medium text-foreground">{q.q}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Your answer: <strong>{q.options[answers[i]!]}</strong>
                        {!correct && <> · Correct: <strong className="text-primary">{q.options[q.correct]}</strong></>}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => { setSubmitted(false); setCurrent(0); setAnswers(Array(questions.length).fill(null)); }}
            className="mt-6 gradient-primary text-primary-foreground px-6 py-2.5 rounded-xl font-semibold"
          >
            Retake Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
