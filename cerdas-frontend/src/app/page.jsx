'use client';
import { useState } from 'react';
import Form from '../components/Form/Form';
import Footer from '../components/Footer/Footer';

export default function Home() {
  const [text, setText] = useState(''); // User input state
  const [sentiment, setSentiment] = useState(null); // Sentiment result state
  const [sentimentProbability, setSentimentProbability] = useState({}); // Sentiment probabilities state
  const [errorMessage, setErrorMessage] = useState(null); // Error message state
  const [isLoading, setIsLoading] = useState(false);  // Loading state

  const chartData = [
    { name: 'Negative', probability: sentimentProbability.negative },
    { name: 'Positive', probability: sentimentProbability.positive },
  ];
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text) {
      setErrorMessage('You need to input some text.');
      return;
    }

    // Clear the error message if the form is submitted successfully
    setErrorMessage(null);

    // Set loading state to true when start fetching
    setIsLoading(true); 

    // Making POST request to FastAPI backend with the text to be analyzed
    // await is used to wait for the response to come back before continuing
    const response = await fetch('http://0.0.0.0/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: text }),
    });

    const data = await response.json();

    // Rounding the probabilities to 2 decimal places (Original: 0.123456789 -> Rounded: 0.12)
    const roundedProbabilities = {
      positive: parseFloat(data.probabilities.positive).toFixed(2),
      negative: parseFloat(data.probabilities.negative).toFixed(2),
    };

    setSentiment(data.prediction);
    setSentimentProbability(roundedProbabilities);

    // Set loading state to false when finished fetching
    setIsLoading(false);  
  };

  return (
    <div className='flex flex-col min-h-screen bg-gray-900 text-white p-4 sm:p-0'>
      <main className='flex flex-col items-center justify-center flex-grow py-2 px-4 sm:px-0'>
        <h1 className='text-3xl sm:text-4xl font-bold mb-5'>
          Sentiment Analysis CeRDaS | Hilman Zafri
        </h1>
        <p className='mb-5 text-base sm:text-lg text-center'>
          Type in some text (e.g., tweets, movie review, etc.) and the ML model will
          predict the sentiment.
        </p>

        <Form
          setText={setText}
          text={text}
          handleSubmit={handleSubmit}
          errorMessage={errorMessage}
          sentiment={sentiment}
          chartData={chartData}
        />

        <div className='mt-4 text-lg'>
          {isLoading && <p>Loading...</p>} 
        </div>
      </main>

      <Footer />
    </div>
  );
}
