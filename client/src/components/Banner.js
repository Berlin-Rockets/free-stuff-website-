import React from 'react';
import LazyHero from 'react-lazy-hero';
import './Banner.css';
import Searchbar from './Searchbar/Searchbar';
import Categories from './Categories/Categories';

function Banner() {
  return (
    <div>
      <LazyHero imageSrc="https://images.unsplash.com/photo-1501685532562-aa6846b14a0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80">
        <div className="intro">
          <p>
            Wanna get rid of those pants you've bought but never wear? Tired of
            reading the same book and wish to trade it?
          </p>
        </div>
        <Searchbar />
        <Categories />
      </LazyHero>

      {/* ... */}
    </div>
  );
}

export default Banner;
