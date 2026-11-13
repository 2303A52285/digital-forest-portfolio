import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Brain, CheckCircle2, AlertCircle, Sparkles, Sliders, BarChart3, Activity } from 'lucide-react';

const LoanPredictorModal = ({ isOpen, onClose, project }) => {
  const [modelType, setModelType] = useState('XGBoost');
  const [creditScore, setCreditScore] = useState(720);
  const [income, setIncome] = useState(6500);
  const [coIncome, setCoIncome] = useState(2000);
  const [loanAmount, setLoanAmount] = useState(150000);
  const [term, setTerm] = useState(360);
  const [education, setEducation] = useState('Graduate');
  const [propertyArea, setPropertyArea] = useState('Semiurban');

  const [isPredicting, setIsPredicting] = useState(false);
  const [predictionResult, setPredictionResult] = useState(null);

  if (!isOpen) return null;

  const runPrediction = () => {
    setIsPredicting(true);

    setTimeout(() => {
      // Calculate realistic ML prediction based on features
      let score = 0;

      // Credit score has the highest feature importance (42%)
      if (creditScore >= 750) score += 42;
      else if (creditScore >= 680) score += 32;
      else if (creditScore >= 600) score += 18;
      else score += 5;

      // Total income vs loan amount ratio (30%)
      const totalIncome = income + coIncome;
      const loanToIncomeRatio = loanAmount / (totalIncome * 12);
      if (loanToIncomeRatio < 2.5) score += 28;
      else if (loanToIncomeRatio < 4.0) score += 18;
      else if (loanToIncomeRatio < 6.0) score += 10;
      else score += 2;

      // Education (12%)
      if (education === 'Graduate') score += 12;
      else score += 6;

      // Property Area (10%)
      if (propertyArea === 'Semiurban') score += 10;
      else if (propertyArea === 'Urban') score += 8;
      else score += 5;

      // Model fine-tuning variations
      if (modelType === 'XGBoost') {
        score = Math.min(99, Math.round(score * 1.05));
      } else if (modelType === 'Random Forest') {
        score = Math.min(98, Math.round(score * 1.02));
      } else {
        score = Math.min(95, Math.round(score * 0.95));
      }

      const approved = score >= 60;

      setPredictionResult({
        probability: score,
        isApproved: approved,
        riskTier: score >= 80 ? 'Low Risk' : score >= 60 ? 'Moderate Risk' : 'High Risk',
        model: modelType,
      });

      setIsPredicting(false);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto glass-panel rounded-3xl border border-[#00C878]/30 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,200,120,0.2)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#123524] border border-[#00C878]/30 text-gray-300 hover:text-white hover:border-[#00C878] transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-[#123524] border border-[#00C878]/40 text-[#00C878]">
            <Brain className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#00C878]/20 text-[#00C878] border border-[#00C878]/30 font-semibold">
                Machine Learning & AI Showcase
              </span>
              <span className="text-xs font-mono text-gray-400">Live Model Inference</span>
            </div>
            <h3 className="text-2xl font-bold font-display text-white mt-1">
              Loan Approval Prediction Simulator
            </h3>
          </div>
        </div>

        {/* Top Control: Model Selector */}
        <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[#080B09]/80 border border-[#00C878]/20 mb-6">
          <span className="text-xs font-mono text-gray-400 px-3">Classifier:</span>
          {['XGBoost', 'Random Forest', 'Logistic Regression'].map((m) => (
            <button
              key={m}
              onClick={() => setModelType(m)}
              className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all ${
                modelType === m
                  ? 'bg-[#00C878] text-[#080B09] font-bold shadow-[0_0_12px_rgba(0,200,120,0.4)]'
                  : 'text-gray-300 hover:text-white hover:bg-[#123524]/50'
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Interactive Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          {/* Form Sliders (7 Cols) */}
          <div className="lg:col-span-7 space-y-4 p-5 rounded-2xl bg-[#080B09]/60 border border-[#00C878]/15">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#00C878] flex items-center gap-2 mb-2">
              <Sliders className="w-3.5 h-3.5" />
              <span>Input Applicant Feature Parameters</span>
            </h4>

            {/* Credit Score Slider */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-300 font-medium">Credit Score (FICO)</span>
                <span className="font-mono text-[#00C878] font-bold">{creditScore}</span>
              </div>
              <input
                type="range"
                min="300"
                max="850"
                step="5"
                value={creditScore}
                onChange={(e) => setCreditScore(Number(e.target.value))}
                className="w-full accent-[#00C878] cursor-pointer"
              />
            </div>

            {/* Applicant Income Slider */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-300 font-medium">Applicant Monthly Income</span>
                <span className="font-mono text-[#00C878] font-bold">${income.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="1000"
                max="25000"
                step="500"
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                className="w-full accent-[#00C878] cursor-pointer"
              />
            </div>

            {/* Loan Amount Slider */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-300 font-medium">Loan Amount Requested</span>
                <span className="font-mono text-[#00C878] font-bold">${loanAmount.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="10000"
                max="500000"
                step="10000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full accent-[#00C878] cursor-pointer"
              />
            </div>

            {/* Categoricals (Education & Property Area) */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div>
                <label className="text-xs text-gray-300 block mb-1">Education Level</label>
                <select
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                  className="w-full bg-[#071B13] border border-[#00C878]/30 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-[#00C878]"
                >
                  <option value="Graduate">Graduate</option>
                  <option value="Not Graduate">Not Graduate</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-gray-300 block mb-1">Property Area</label>
                <select
                  value={propertyArea}
                  onChange={(e) => setPropertyArea(e.target.value)}
                  className="w-full bg-[#071B13] border border-[#00C878]/30 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-[#00C878]"
                >
                  <option value="Semiurban">Semi-Urban</option>
                  <option value="Urban">Urban</option>
                  <option value="Rural">Rural</option>
                </select>
              </div>
            </div>

            {/* Run Button */}
            <button
              onClick={runPrediction}
              disabled={isPredicting}
              className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-[#00C878] to-[#10f796] text-[#080B09] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,200,120,0.4)] hover:shadow-[0_0_30px_rgba(0,200,120,0.7)] transition-all active:scale-98"
            >
              <Activity className={`w-4 h-4 ${isPredicting ? 'animate-spin' : ''}`} />
              <span>{isPredicting ? 'Inferring Decision Boundary...' : `Predict with ${modelType}`}</span>
            </button>
          </div>

          {/* Results / Visual Matrix (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-[#080B09]/60 border border-[#00C878]/15">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#00C878] flex items-center gap-2 mb-4">
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Inference Output & Analytics</span>
              </h4>

              {predictionResult ? (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div
                    className={`p-4 rounded-xl border flex items-center gap-3 ${
                      predictionResult.isApproved
                        ? 'bg-[#123524]/80 border-[#00C878] text-[#00C878]'
                        : 'bg-red-950/40 border-red-500/50 text-red-400'
                    }`}
                  >
                    {predictionResult.isApproved ? (
                      <CheckCircle2 className="w-8 h-8 shrink-0 text-[#00C878]" />
                    ) : (
                      <AlertCircle className="w-8 h-8 shrink-0 text-red-400" />
                    )}
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider">
                        Prediction Status
                      </div>
                      <div className="text-lg font-bold font-display text-white">
                        {predictionResult.isApproved ? 'LOAN APPROVED' : 'APPLICATION REJECTED'}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-300">Approval Confidence Probability</span>
                      <span className="font-mono text-[#00C878] font-bold">
                        {predictionResult.probability}%
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-[#071B13] rounded-full overflow-hidden border border-[#00C878]/30">
                      <div
                        className="h-full bg-gradient-to-r from-[#123524] to-[#00C878] transition-all duration-500"
                        style={{ width: `${predictionResult.probability}%` }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-[#071B13] border border-[#00C878]/15">
                      <span className="text-[10px] font-mono text-gray-400 block">Risk Tier</span>
                      <span className="font-bold text-white">{predictionResult.riskTier}</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#071B13] border border-[#00C878]/15">
                      <span className="text-[10px] font-mono text-gray-400 block">Inference Engine</span>
                      <span className="font-bold text-[#00C878]">{predictionResult.model}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="py-12 text-center">
                  <div className="p-3.5 rounded-full bg-[#123524]/60 border border-[#00C878]/25 text-[#00C878] inline-block mb-3">
                    <Brain className="w-6 h-6 animate-pulse" />
                  </div>
                  <p className="text-xs text-gray-400">
                    Adjust applicant attributes on the left and click "Predict" to see real-time machine learning classification.
                  </p>
                </div>
              )}
            </div>

            {/* Feature Weights Guide */}
            <div className="pt-4 border-t border-[#00C878]/15 text-[11px] text-gray-400 space-y-1">
              <span className="font-mono text-[#00C878] block text-[10px] uppercase">
                Model Feature Importance:
              </span>
              <div className="flex justify-between">
                <span>Credit History Weight:</span>
                <span className="font-mono text-white">42%</span>
              </div>
              <div className="flex justify-between">
                <span>Debt-to-Income Ratio:</span>
                <span className="font-mono text-white">28%</span>
              </div>
              <div className="flex justify-between">
                <span>Applicant Income:</span>
                <span className="font-mono text-white">18%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Technical Highlights */}
        <div className="p-5 rounded-2xl bg-[#080B09]/60 border border-[#00C878]/15">
          <h4 className="font-display font-semibold text-white text-sm mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#00C878]" />
            <span>Key Project Highlights & Methodology</span>
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-gray-300">
            {project.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00C878] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoanPredictorModal;
