import React from 'react';

const Speaknom = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      {/* Left Section */}
      <div className="w-full max-w-4xl mx-auto px-4 py-8 flex justify-between">
        <div className="space-y-8">
          <h1 className="text-5xl font-bold">
            Speaking at <br /> TEDx Miami
          </h1>
          <p className="text-lg">
            If you know someone who belongs on our roster, or if you belong there yourself, 
            we want to hear from you! Please use our <a href="#" className="text-blue-400 underline">speaker nomination form</a>, 
            and tell us why this person would be well-matched to the TED stage.
          </p>
          <p className="italic">
            Multiple nominations for the same person won't influence the speaker selection 
            team in any way. We review every nomination that comes in, and it only takes one.
          </p>
        </div>
        {/* Right Section */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <a 
            href="/speakernomination" 
            className="bg-transparent border border-blue-400 text-blue-400 px-6 py-3 flex items-center space-x-2 hover:bg-blue-400 hover:text-black transition">
            <span>NOMINATION FORM</span>
            <img 
              src="https://assets.website-files.com/640f47772aaf7f8ee06f7d33_sky-arrow.svg" 
              alt="Arrow" 
              className="w-4 h-4"
            />
          </a>
        </div>
      </div>

      {/* Microphone Image */}
      <div className="mt-12">
        <img 
          src="https://assets.website-files.com/640f47772aaf7f0a026f7d69_Microphone.svg" 
          alt="Microphone" 
          className="w-40 h-40"
        />
      </div>
    </div>
  );
};

export default Speaknom;
