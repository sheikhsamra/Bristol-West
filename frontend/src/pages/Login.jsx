import React, { useState } from 'react';

const StandaloneLoginForm = () => {
  const [username, setUsername] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { username, rememberMe });
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-8xl">
      

      {/* Main Content View */}
      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-xl shadow-md overflow-hidden">
          
          {/* Left Column: Input Form */}
          <div className="flex-1 p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-100">
            <h2 className="text-2xl font-bold text-[#00a98f] mb-2">Log in</h2>
            <p className="text-sm text-slate-500 mb-8">
              or <a href="/Register" className="text-[#00a98f] font-medium hover:underline">Create an account</a>
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="user-field" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                  Username or email*
                </label>
                <input
                  type="text"
                  id="user-field"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:border-[#00a98f] focus:ring-1 focus:ring-[#00a98f] transition text-base text-slate-8xl"
                  required
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember-flag"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-[#00a98f] border-slate-300 rounded focus:ring-[#00a98f]"
                />
                <label htmlFor="remember-flag" className="ml-2 text-sm text-slate-600 select-none">
                  Save username
                </label>
              </div>

              <div>
                <a href="#reset" className="text-sm text-[#00a98f] hover:underline inline-block">
                  Forgot username?
                </a>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#ff5100] hover:bg-[#ba3c01] text-white font-semibold rounded-full transition duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                Continue
              </button>
            </form>
          </div>

          {/* Right Column: Alternative/Quick Actions */}
          <div className="flex-1 p-8 md:p-12 bg-slate-50/50 flex flex-col justify-center">
            <h3 className="text-lg font-bold text-[#00a98f] mb-2">Skip the login</h3>
            <p className="text-sm text-slate-500 mb-6">
              Access utility options and general features directly:
            </p>

            <ul className="space-y-4">
              <li>
                <a href="/MakePayment" className="flex items-center gap-3 text-sm font-semibold text-[#00a98f] hover:text-[#008f79] transition group">
                  <span className="text-lg">💳</span> 
                  <span className="group-hover:underline">Make a fast payment &rarr;</span>
                </a>
              </li>
              <li>
                <a href="/Claims" className="flex items-center gap-3 text-sm font-semibold text-[#00a98f] hover:text-[#008f79] transition group">
                  <span className="text-lg">📄</span> 
                  <span className="group-hover:underline">Download digital ID card &rarr;</span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </main>



    </div>
  );
};

export default StandaloneLoginForm;