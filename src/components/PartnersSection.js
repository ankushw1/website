import React from 'react';

const PartnersSection = () => {
  return (
    <section className="mt-12 bg-gray-100 py-10">
      <div className="container mx-auto">

        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold">Our Partners</h2>
          <p className="text-lg text-gray-600">Lucid powers 5,000+ teams, 1000+ events, and 150+ universities &amp; organizations.</p>
        </div>

<div className="px-5 lg:px-20">
  <div className="flex flex-wrap justify-center gap-5">
    {/* First Row */}
    <div className="flex flex-wrap justify-center gap-5">
      <div className="flex justify-center">
        <img
          className="max-h-[105px]"
          src="https://s3.amazonaws.com/www.lucidtravel.com/assets/img/bu-logo.png"
          alt="Boston University"
        />
      </div>
      <div className="flex justify-center">
        <img
          className="max-h-[65px]"
          src="https://s3.amazonaws.com/www.lucidtravel.com/assets/img/unc-rec.png"
          alt="UNC Chapel Hill"
        />
      </div>
      <div className="flex justify-center">
        <img
          className="max-h-[115px]"
          src="https://s3.amazonaws.com/www.lucidtravel.com/assets/img/calberkeley.png"
          alt="Cal Berkeley"
        />
      </div>
      <div className="flex justify-center">
        <img
          className="max-h-[135px]"
          src="https://s3.amazonaws.com/www.lucidtravel.com/assets/img/syracuse.png"
          alt="UNC Chapel Hill"
        />
      </div>
    </div>
    {/* Second Row */}
    <div className="flex flex-wrap justify-center gap-5">
      <div className="flex justify-center">
        <img
          className="max-h-[125px]"
          src="https://s3.amazonaws.com/www.lucidtravel.com/assets/img/wyoming.png"
          alt="UMN"
        />
      </div>
      <div className="flex justify-center">
        <img
          className="max-h-[65px]"
          src="https://s3.amazonaws.com/www.lucidtravel.com/assets/img/purdue.png"
          alt="Purdue"
        />
      </div>
      <div className="flex justify-center">
        <img
          className="max-h-[75px]"
          src="https://s3.amazonaws.com/www.lucidtravel.com/assets/img/university_mn_logo.png"
          alt="UMN"
        />
      </div>
      <div className="flex justify-center">
        <img
          className="max-h-[95px]"
          src="https://s3.amazonaws.com/www.lucidtravel.com/assets/img/vanderbilt.png"
          alt="Northeastern University"
        />
      </div>
    </div>
  </div>
</div>


<div className="text-center mt-10">
  <a
    href="https://www.lucidtravel.com/user/registration-step-1"
    className="inline-block py-2 px-4 text-xl border-2 border-black text-black rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 micro-header scrool"
    style={{ textAlign: 'center', paddingTop: '10px' }}
  >
    Sign up for FREE today!
  </a>
</div>


      </div>
    </section>
  );
};

export default PartnersSection;
