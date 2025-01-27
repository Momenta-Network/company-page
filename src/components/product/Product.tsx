import React from 'react';
import { ProductHero } from './ProductHero';
import { ProtectionSuite } from './ProtectionSuite';
import { ProductRoadmap } from './ProductRoadmap';
import { ProductCTA } from './ProductCTA';

export const Product = () => {
  return (
    <div className="bg-white">
      <ProductHero />
      <ProtectionSuite />
      <ProductRoadmap />
      <ProductCTA />
    </div>
  );
};