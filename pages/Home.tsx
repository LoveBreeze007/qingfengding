import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Left Column: Info */}
        <div className="flex-1 space-y-6">
          <ul className="space-y-4 text-base md:text-lg leading-relaxed text-gray-800 list-disc pl-5 marker:text-gray-400">
            <li>
              <span className="font-bold text-black">Ph.D. Candidate in Applied Economics</span>, Central South University (2021–2026 expected)
            </li>
            <li>
              Research Interests: <span className="italic">Behavioral Finance, Corporate Finance, Digital Economy, Environmental Economics, Household Finance, Artificial Intelligence</span>
            </li>
            <li>
              Email: <a href="mailto:qingfeng.ding@163.com" className="text-academic-red hover:underline">qingfeng.ding@163.com</a>
            </li>
            <li>
              Phone: +86 195-2266-0007
            </li>
            <li>
              ORCID: <a href="https://orcid.org/0009-0002-0703-7765" target="_blank" rel="noreferrer" className="text-academic-red hover:underline">0009-0002-0703-7765</a>
            </li>
          </ul>

          <div className="pt-6">
            <h3 className="text-xl font-bold mb-3 border-b border-gray-200 pb-2">Recent Highlights</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-academic-red">Can digital financial inclusion alleviate energy poverty?</h4>
                <p className="text-sm text-gray-600 mt-1">Evidence from China. Published in <i>Energy</i>, 2025.</p>
              </div>
              <div>
                <h4 className="font-bold text-academic-red">NSFC Project Participation</h4>
                <p className="text-sm text-gray-600 mt-1">Participating in the impact of Generative AI on financial markets (2025-2028).</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Photo */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <div className="relative">
             {/* Using a placeholder as requested by the prompt instructions for images */}
            <img 
              src="https://picsum.photos/300/400" 
              alt="Qingfeng Ding" 
              className="shadow-lg object-cover w-[250px] h-[320px] bg-gray-100"
            />
            <div className="mt-2 text-center text-sm text-gray-500 font-sans">
              Qingfeng Ding (丁庆锋)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
