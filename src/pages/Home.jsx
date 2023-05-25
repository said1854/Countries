import { useContext, useEffect, useState } from 'react';
import SiteContext from '../context/SiteContext';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import CountryCard from '../components/CountryCard';
import Header from '../components/Header';

const Home = () => {
  const { isLoaded, shownCountries } = useContext(SiteContext);

  return (
    <div
      className={
        isLoaded
          ? 'min-h-screen justify-between dark:bg-darker'
          : 'flex flex-col min-h-screen justify-between'
      }
    >
      <Header />
      <Topbar />
      <div className="w-5/6 mx-auto p-6 container flex flex-wrap bg-dark dark:bg-darker my-8 rounded-xl dark:border">
        {isLoaded && shownCountries ? (
          shownCountries.map((country, index) => {
            return <CountryCard country={country} index={index} key={index} />;
          })
        ) : (
          <p className="text-light mx-auto">Loading...</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
