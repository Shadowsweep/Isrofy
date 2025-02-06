"use client"

import React, { useState } from 'react';
import { MapPin, Info, X } from 'lucide-react';
import Image from 'next/image';

interface ISROCenter {
  Name: string;
  Location: string;
  Description: string;
  "Image URL": string;
}

const IsroCenters: React.FC = () => {
  const [selectedCenter, setSelectedCenter] = useState<ISROCenter | null>(null);

  const isro_centers: ISROCenter[] = [
    {
      "Name": "Vikram Sarabhai Space Centre (VSSC)",
      "Location": "Thiruvananthapuram, Kerala",
      "Description": "The main center for the design and development of launch vehicles.",
      "Image URL": "/images/vssc.jpeg"
    },
    {
      "Name": "Liquid Propulsion Systems Centre (LPSC)",
      "Location": "Valiamala, Kerala",
      "Description": "Engaged in the development of liquid propulsion stages for launch vehicles and spacecraft.",
      "Image URL": "/images/lpsc.jpeg"
    },
    {
      "Name": "Satish Dhawan Space Centre (SDSC) SHAR",
      "Location": "Sriharikota, Andhra Pradesh",
      "Description": "The launch center for India's satellites and rockets.",
      "Image URL": "/images/sdsc.jpeg"
    },
    {
      "Name": "U R Rao Satellite Centre (URSC)",
      "Location": "Bengaluru, Karnataka",
      "Description": "Responsible for the design, development, and integration of satellite systems.",
      "Image URL": "/images/ur rao.jpeg"
    },
    {
      "Name": "Space Applications Centre (SAC)",
      "Location": "Ahmedabad, Gujarat",
      "Description": "Focuses on the development of payloads for communication, remote sensing, and meteorology.",
      "Image URL": "/images/sac.jpeg"
    },
    {
      "Name": "National Remote Sensing Centre (NRSC)",
      "Location": "Hyderabad, Telangana",
      "Description": "Responsible for remote sensing satellite data acquisition and processing.",
      "Image URL": "/images/nrsc.jpeg"
    },
    {
      "Name": "National Atmospheric Research Laboratory (NARL)",
      "Location": "Gadanki, Andhra Pradesh",
      "Description": "Conducts research in atmospheric and space sciences.",
      "Image URL": "/images/narl.jpeg"
    },
    {
      "Name": "Indian Institute of Remote Sensing (IIRS)",
      "Location": "Dehradun, Uttarakhand",
      "Description": "Provides education and training in the field of remote sensing and geoinformatics.",
      "Image URL": "/images/iirs.jpeg"
    },
    {
      "Name": "Master Control Facility (MCF)",
      "Location": "Hassan, Karnataka (and Bhopal, Madhya Pradesh)",
      "Description": "Monitors and controls geostationary satellites after their launch.",
      "Image URL": "/images/mcf.jpeg"
    },
    {
      "Name": "North Eastern Space Applications Centre (NESAC)",
      "Location": "Umiam, Meghalaya",
      "Description": "Provides space-based support for development in the North Eastern Region of India.",
      "Image URL": "/images/nesac.jpeg"
    },
    {
      "Name": "Antrix Corporation",
      "Location": "Bengaluru, Karnataka",
      "Description": "The commercial arm of ISRO.",
      "Image URL": "/images/antrix.jpeg"
    }
  ];

  const Modal = () => {
    if (!selectedCenter) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-6 max-w-xl w-full relative">
          <button 
            onClick={() => setSelectedCenter(null)} 
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="space-y-4">
            <div className="relative w-full h-64">
              <Image 
                src={selectedCenter["Image URL"]} 
                alt={selectedCenter.Name} 
                fill
                className="object-cover p-3 rounded-lg"
              />
            </div>
            
            <h2 className="text-2xl font-bold text-blue-900">{selectedCenter.Name}</h2>
            
            <div className="flex items-center space-x-2">
              <MapPin className="text-blue-500" />
              <span className="font-medium text-gray-700">{selectedCenter.Location}</span>
            </div>
            
            <p className="text-gray-700">{selectedCenter.Description}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-900">ISRO Centers in India</h1>
      
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {isro_centers.map((center) => (
          <div 
            key={center.Name}
            className="p-5 bg-white border  rounded-lg cursor-pointer hover:shadow-md transition-all"
            onClick={() => setSelectedCenter(center)}
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold text-blue-800">{center.Name}</h2>
              <MapPin className="text-blue-600 w-5 h-5" />
            </div>
            <p className="text-gray-600 text-sm">{center.Location}</p>
          </div>
        ))}
      </div>

      <Modal />
    </div>
  );
};

export default IsroCenters;