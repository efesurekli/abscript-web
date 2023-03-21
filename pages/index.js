import React, { useContext, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PricingSection from '../components/PricingSection';
import LightNavBar from '../components/LightNavBar';
import ScriptContext from '../contexts/ScriptContext';
import FileUpload from '../components/FileUpload';
import { useRouter } from 'next/router';

const Features = () => {
  return (
    <section id="features" className="grid grid-cols-3 gap-24 my-32">
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
          Optimize your content with data-driven insights and make your movies,
          YouTube videos, and Netflix shows stand out.
        </p>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="relative">
      <h2 className="text-2xl font-bold mb-8">Testimonials</h2>
      <div className="testimonials-container">
        <div className="testimonial-card">
          <p>
            "aboutblank.ai helped me to create a script that became my most
            successful YouTube video ever. Highly recommended!"
          </p>
          <p className="mt-4 font-semibold">- John Doe, YouTuber</p>
        </div>
        <div className="testimonial-card">
          <p>
            "The insights provided by aboutblank.ai allowed me to fine-tune my
            screenplay and secure a great deal with a major studio."
          </p>
          <p className="mt-4 font-semibold">- Jane Smith, Screenwriter</p>
        </div>
        <div className="testimonial-card">
          <p>
            "I never knew the power of data-driven content until I started using
            aboutblank.ai. It's been a game changer for my Netflix show."
          </p>
          <p className="mt-4 font-semibold">- Michael Brown, Showrunner</p>
        </div>
        <div className="testimonial-card">
          <p>
            "Using aboutblank.ai, I was able to improve the engagement and
            retention of my podcast listeners. Thank you for the great tool!"
          </p>
          <p className="mt-4 font-semibold">- Sarah Johnson, Podcaster</p>
        </div>

        <div className="testimonial-card">
          <p>
            "As a content creator, I'm always looking for ways to improve my
            writing. aboutblank.ai has been instrumental in helping me to craft
            compelling stories and scripts."
          </p>
          <p className="mt-4 font-semibold">- David Lee, Writer</p>
        </div>

        <div className="testimonial-card">
          <p>
            "aboutblank.ai has saved me so much time and effort in the content
            creation process. It's like having a personal writing coach in my
            pocket!"
          </p>
          <p className="mt-4 font-semibold">- Lisa Chen, Content Creator</p>
        </div>

        <div className="testimonial-card">
          <p>
            "The predictive analysis provided by aboutblank.ai has helped me to
            create more engaging and entertaining videos for my social media
            followers."
          </p>
          <p className="mt-4 font-semibold">
            - Tyler Johnson, Social Media Influencer
          </p>
        </div>

        <div className="testimonial-card">
          <p>
            "I was skeptical at first, but after using aboutblank.ai, I'm
            convinced that data-driven content is the future. Thank you for
            showing me the way!"
          </p>
          <p className="mt-4 font-semibold">
            - Sarah Williams, Digital Marketer
          </p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
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
  );
};

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleLaunchApp = () => {
    router.push('/workbench');
  };
  const { script, setScript } = useContext(ScriptContext);

  const handleClick = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="bg-black">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>aboutblank.ai</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css"
        />
      </Head>
      <LightNavBar />
      <div className="bg-black text-white mt-0">
        <div className="container mx-auto px-4">
          <section className="flex items-start justify-between space-x-24 my-16">
            <div className="w-1/2">
              <h1 className="text-6xl font-bold leading-normal">
                Unlock Your Content's Full Potential
              </h1>
              <p className="mt-4">
                Predict your content's performance, maximize engagement.
              </p>
            </div>
            <div className="w-1/2">
              <textarea
                className="bg-gray-800 w-full h-48 p-4 rounded mb-2 resize-none"
                placeholder="Paste your script here..."
                value={script}
                onChange={(e) => setScript(e.target.value)}
              ></textarea>
              <button
                className="bg-highlight text-black font-semibold py-2 px-6 rounded inline-flex items-center justify-center hover:bg-opacity-80"
                style={{ minWidth: '120px', minHeight: '40px' }}
                onClick={handleLaunchApp}
              >
                <a>Try It!</a>
              </button>
              <p className="mt-4"> or upload your script:</p>
              <FileUpload />
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
