import React from 'react';

const IntegrationsSection = () => {
  return (
    <section className="bg-gray-200 py-10">
      <div className="container mx-auto">
        <div className="row">
          {/* Begin col-md-12 */}
          <div className="col-md-12 mb-5 mt-10 text-center">
            <h2 className="text-2xl font-semibold">Integrations</h2>
            <p className="text-lg text-gray-700 mt-2">
              Lucid integrates with leading companies in sports technology to make travel part of what you already do.
            </p>
          </div>
          {/* End col-md-12 */}

          <div className="col-md-10 mx-auto px-5 pb-28">
  {/* Begin partners-mentions */}
  <div className="flex flex-wrap justify-center gap-5">
    {/* First Row */}
    <div className="flex flex-wrap justify-center gap-5">
      <div className="flex justify-center">
        <img className="max-h-16" src="https://cdn1.sportngin.com/attachments/photo/0878-129970318/logo.svg" alt="GotSoccer" />
      </div>
      <div className="flex justify-center">
        <img className="max-h-14" src="https://s3.amazonaws.com/www.lucidtravel.com/assets/img/LeagueApps-Logo-Black.png" alt="LeagueApps" />
      </div>
      <div className="flex justify-center">
        <img className="max-h-15" src="https://questproductions.dancecompgenie.com/Dance-Competition/images/templete/inchollogo.png" alt="DanceComp Genie" />
      </div>
      <div className="flex justify-center">
        <img className="max-h-20" src="https://s3.amazonaws.com/www.lucidtravel.com/assets/img/NewExposureTopDown-01.png" alt="Exposure Events" />
      </div>
    </div>

    {/* Second Row */}
    <div className="flex flex-wrap justify-center gap-5">
      <div className="flex justify-center">
        <img className="max-h-16" src="https://s3.amazonaws.com/www.lucidtravel.com/assets/img/nbcsportsnext.png" alt="NBC Sports Next" />
      </div>
      <div className="flex justify-center">
        <img className="max-h-14" src="https://www.tourneymachine.com/img/global/header/tm-logo-website.png" alt="Tourney Machine" />
      </div>
      <div className="flex justify-center">
        <img className="max-h-12" src="https://s3.amazonaws.com/www.lucidtravel.com/assets/img/aes-logo.png" alt="AES" />
      </div>
      <div className="flex justify-center">
        <img className="max-h-12" src="https://s3.amazonaws.com/www.lucidtravel.com/assets/img/sport80.png" alt="Sport 80" />
      </div>
    </div>
  </div>
  {/* End partners-mentions */}
</div>

        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
