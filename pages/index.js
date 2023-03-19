import React from 'react';
import Head from 'next/head';

const Index = () => {
  return (
    <div className="bg-black">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-250px * 3));
          }
        }
        .testimonials-container {
          display: flex;
          overflow: hidden;
          animation: scroll 20s linear infinite;
        }
        .testimonials-container:hover {
          animation-play-state: paused;
        }
      `}</style>
      <Head>
        {/* <meta charset="UTF-8"> */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"> */}
        <title>aboutblank.ai</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css"
        />
      </Head>
      <nav className="bg-black text-white py-4 px-8 flex justify-between items-center">
        <div className="font-mono text-lg font-semibold">
          about<span className="text-highlight">:blank</span>
        </div>
        <div className="flex space-x-8">
          <a href="#" className="hover:text-highlight">
            Pricing
          </a>
          <a href="#" className="hover:text-highlight">
            Features
          </a>
          <a href="#" className="hover:text-highlight">
            Contact
          </a>
        </div>
        <button className="bg-highlight text-black font-semibold py-2 px-4 rounded hover:bg-opacity-90">
          CTA
        </button>
      </nav>
      <div className="bg-black text-white mt-0">
        <div className="container mx-auto px-4">
          <section className="flex items-center justify-between my-16">
            <div className="w-1/2">
              <h1 className="text-4xl font-bold">
                Unlock Your Content's Full Potential
              </h1>
              <p className="mt-4">
                Predict your content's performance with AboutBlank.ai
              </p>
            </div>
            <div className="w-1/2">
              <textarea
                className="bg-gray-800 w-full h-32 p-2 rounded mb-2 resize-none"
                placeholder="Paste your script here..."
              ></textarea>
              <button className="bg-highlight text-black font-semibold py-2 px-4 rounded">
                Try It
              </button>
            </div>
          </section>

          <section className="grid grid-cols-3 gap-8 my-16">
            <div>
              <h2 className="text-2xl font-bold">Smart Analysis</h2>
              <p>
                Our LLM is fine-tuned on millions of scripts to provide you with
                in-depth analysis and performance predictions.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Save Time</h2>
              <p>
                Get instant feedback on your scripts, eliminating the need for
                multiple revisions and saving you valuable time.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Improve Your Content</h2>
              <p>
                Optimize your content with data-driven insights and make your
                movies, YouTube videos, and Netflix shows stand out.
              </p>
            </div>
          </section>
          <section className="relative">
            <h2 className="text-2xl font-bold mb-8">Our Happy Users</h2>
            <div className="testimonials-container">
              <div className="inline-block bg-gray-800 p-6 rounded-xl mx-4">
                <p>
                  "aboutblank.ai helped me to create a script that became my
                  most successful YouTube video ever. Highly recommended!"
                </p>
                <p className="mt-4 font-semibold">- John Doe, YouTuber</p>
              </div>
              <div className="inline-block bg-gray-800 p-6 rounded-xl mx-4">
                <p>
                  "The insights provided by aboutblank.ai allowed me to
                  fine-tune my screenplay and secure a great deal with a major
                  studio."
                </p>
                <p className="mt-4 font-semibold">- Jane Smith, Screenwriter</p>
              </div>
              <div className="inline-block bg-gray-800 p-6 rounded-xl mx-4">
                <p>
                  "I never knew the power of data-driven content until I started
                  using aboutblank.ai. It's been a game changer for my Netflix
                  show."
                </p>
                <p className="mt-4 font-semibold">
                  - Michael Brown, Showrunner
                </p>
              </div>
            </div>
          </section>
          <footer className="mt-16 py-8 border-t border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold">aboutblank.ai</h3>
                <p className="mt-2">Predict Content Performance</p>
              </div>
              <div className="space-x-4">
                <a href="#" className="text-#CCFF00">
                  Home
                </a>
                <a href="#" className="text-#CCFF00">
                  Features
                </a>
                <a href="#" className="text-#CCFF00">
                  Pricing
                </a>
                <a href="#" className="text-#CCFF00">
                  Contact
                </a>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-2xl">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-2xl">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-2xl">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="text-2xl">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <p className="text-center mt-8">
              &copy; 2023 aboutblank.ai. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
