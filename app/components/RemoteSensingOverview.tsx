"use client"

import React from 'react';
import { Camera, Satellite, Map } from 'lucide-react';

const RemoteSensingOverview: React.FC = () => {
  return (
    <div className="p-6 bg-gray-50 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-800 mb-6 flex items-center">
        <Satellite className="mr-4 text-blue-600" size={40} />
        Remote Sensing and Geo-informatics
      </h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">What is Remote Sensing?</h2>
        <div className="flex items-center">
          <img 
            src="/images/Remote-Sensing.png" 
            alt="Remote Sensing Satellite" 
            className="w-1/3 mr-6 rounded-lg shadow-md"
          />
          <p className="text-gray-700 leading-relaxed">
            Remote sensing is the process of detecting and monitoring physical characteristics of an area by measuring its reflected and emitted radiation at a distance, typically using satellites or aircraft. It enables comprehensive environmental and geographical data collection without direct physical contact.
          </p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Key Technologies</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Camera className="text-blue-600 mb-2" size={36} />
            <h3 className="font-semibold mb-2">Optical Sensors</h3>
            <p className="text-sm text-gray-600">Capture visible and infrared wavelengths for surface imaging</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Satellite className="text-blue-600 mb-2" size={36} />
            <h3 className="font-semibold mb-2">Radar Imaging</h3>
            <p className="text-sm text-gray-600">Uses radio waves to create detailed terrain maps</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Map className="text-blue-600 mb-2" size={36} />
            <h3 className="font-semibold mb-2">GIS Integration</h3>
            <p className="text-sm text-gray-600">Combines spatial data for comprehensive analysis</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Applications</h2>
        
        <ul className="list-disc pl-6 text-gray-700">
          <li>Environmental monitoring and climate change research</li>
          <li>Urban planning and infrastructure development</li>
          <li>Agricultural yield prediction</li>
          <li>Disaster management and response</li>
          <li>Natural resource exploration</li>
        </ul>
      </section>
    </div>
  );
};

export default RemoteSensingOverview;