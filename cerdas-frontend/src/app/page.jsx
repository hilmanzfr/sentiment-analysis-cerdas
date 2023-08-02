"use client";
import { useState } from 'react';
import Form from '../components/Form/Form';
import Footer from '../components/Footer/Footer';

export default function Home() {
  const [text, setText] = useState('');  // User input state
  const [sentiment, setSentiment] = useState(null); // Sentiment result state
  const [sentimentProbability, setSentimentProbability] = useState({}); // Sentiment probabilities state
  const [errorMessage, setErrorMessage] = useState(null); // Error message state

  const chartData = [
    {name: 'Negative', probability: sentimentProbability.negative},
    {name: 'Positive', probability: sentimentProbability.positive}
  ]

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text) {
      setErrorMessage('You need to input some text.');
      return;
    }

    setErrorMessage(null); // Clear the error message if the form is submitted successfully

    // Here you'll make a POST request to your FastAPI backend
    // with the text to be analyzed.
    const response = await fetch('http://0.0.0.0/predict', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: text })
    });

    const data = await response.json();

    const roundedProbabilities = {
      positive: parseFloat(data.probabilities.positive).toFixed(2),
      negative: parseFloat(data.probabilities.negative).toFixed(2),
    };

    setSentiment(data.prediction);
    setSentimentProbability(roundedProbabilities);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <main className="flex flex-col items-center justify-center flex-grow py-2">
        <h1 className="text-4xl font-bold mb-5">
          Sentiment Analysis CeRDaS | Hilman Zafri
        </h1>
        <p className="mb-5 text-lg text-center">
          Type in some text (e.g., a review, tweet, etc.) and we'll predict the sentiment.
        </p>

        <Form
          setText={setText}
          text={text}
          handleSubmit={handleSubmit}
          errorMessage={errorMessage}
          sentiment={sentiment}
          chartData={chartData}
        />
      </main>

      <Footer />
    </div>
  );
}
