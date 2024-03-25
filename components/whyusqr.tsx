// components/PartnershipBenefits.js
import React from 'react';

const PartnershipBenefits = () => {
  return (
    <section className="py-16" style={{ backgroundColor: '#020617' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-8">
          <h2 className="text-3xl font-bold mb-4">The benefits of this partnership extend across the ecosystem:</h2>
        </div>

        {/* Partnership benefits */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 lg:gap-12">
          {/* Manufacturers Benefit */}
          <div className="bg-cyan-400 p-6 md:p-8 rounded-3xl shadow-md">
            <h3 className="text-xl  text-slate-200 font-semibold mb-4">Manufacturers</h3>
            <p className="text-slate-200">
              Gain an opportunity to secure a continuous, monthly income based on transactional activities processed through the QR codes, in addition to potentially increasing their signage sales.
            </p>
          </div>

          {/* End Buyers Benefit */}
          <div className="bg-cyan-400 p-6 md:p-8 rounded-3xl shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-slate-200">End Buyers</h3>
            <p className="text-slate-200">
              Are afforded a complimentary, state-of-the-art payment processing solution, potentially saving thousands in software development costs. Furthermore, they will benefit from complimentary monthly insights into payment data analytics, enhancing their business decision-making process.
            </p>
          </div>
        </div>

        {/* Initiative Statement */}
        <div className="max-w-3xl mx-auto text-center mt-12">
          <p className="text-lg text-slate-500">
            This initiative underscores Crabroom's commitment to fostering innovative partnerships that not only enhance product offerings but also create sustainable, value-added revenue streams for our partners.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnershipBenefits;

