// pages/Workbench.js
import React, { useState, useContext } from 'react';
import ScriptContext from '../contexts/ScriptContext';
import BellCurve from '../components/BellCurve';

const Workbench = () => {
  const { script, setScript } = useContext(ScriptContext);
  const percentile = 75;
  const tags = ['Emotional', 'Tragic', 'Aggressive'];
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    console.log(script);
    try {
      const response = await fetch('https://api.example.com/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ script }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }

    setIsLoading(false);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Your Script</h2>
            <textarea
              className="bg-gray-800 w-full h-96 p-2 rounded resize-none"
              value={script}
              onChange={(e) => setScript(e.target.value)}
            ></textarea>
            <div className="flex justify-center mt-4">
              <button
                className={`bg-highlight text-black font-semibold py-2 px-6 rounded ${
                  isLoading ? 'opacity-50' : ''
                }`}
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-5 w-5"></div>
                ) : (
                  'Analyze'
                )}
              </button>
            </div>
          </div>
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Overall Impact</h2>
              <p>Percentile Score: {percentile}%</p>
              <BellCurve percentile={percentile} />
            </div>
            <div>
              <div className="mb-4">
                <h2 className="text-xl font-bold">Content Properties</h2>
                <div className="flex space-x-2 mt-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-highlight text-black font-semibold py-1 px-2 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4">
                Improvement Suggestions
              </h2>
              <p>
                Here are some suggestions on how you can improve your content to
                increase its impact:
              </p>
              <ul className="list-disc pl-8 mt-4">
                <li>Enhance the storyline with more engaging plot twists.</li>
                <li>
                  Introduce a stronger emotional connection between characters.
                </li>
                <li>Add more descriptive language to create vivid imagery.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workbench;
