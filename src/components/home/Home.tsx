import React from 'react';
import { HomeHero } from './HomeHero';
import { HomeFeatures } from './HomeFeatures';
import { EarlyAccess } from '../EarlyAccess';
import { Contact } from '../Contact';

export const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeFeatures />
      <EarlyAccess />
      <Contact />
    </>
  );
};