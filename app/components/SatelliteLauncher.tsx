import React, { useState } from 'react';
import { Rocket, Satellite, CloudUpload, Globe, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Image from 'next/image';

const LauncherModal = ({ launcher }) => (
  <Dialog>
    <DialogTrigger className="w-full">
      <div className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition">
        <h3 className="text-lg font-semibold">{launcher.name}</h3>
        <p className="text-sm text-gray-600">Click to explore details</p>
      </div>
    </DialogTrigger>
    <DialogContent className="max-w-4xl">
      <DialogHeader>
        <DialogTitle>{launcher.name}</DialogTitle>
      </DialogHeader>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Image 
            src={launcher.image} 
            alt={launcher.name} 
            width={500} 
            height={300} 
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Key Specifications</h4>
          <ul className="space-y-2">
            {launcher.specs.map((spec, index) => (
              <li key={index} className="bg-gray-50 p-2 rounded">
                {spec}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

const SatelliteLauncher = () => {
  const launchStages = [
    {
      icon: <Rocket className="w-16 h-16 text-blue-600" />,
      title: "Preparation",
      description: "ISRO engineers prepare the satellite and launch vehicle at the Satish Dhawan Space Centre in Sriharikota, carefully integrating the payload and checking all systems."
    },
    {
      icon: <Satellite className="w-16 h-16 text-green-600" />,
      title: "Launch Vehicle Assembly",
      description: "The satellite is mounted atop the PSLV (Polar Satellite Launch Vehicle) or GSLV (Geosynchronous Satellite Launch Vehicle), precisely aligned and secured."
    },
    {
      icon: <CloudUpload className="w-16 h-16 text-red-600" />,
      title: "Lift-off",
      description: "The rocket ignites its powerful engines, generating massive thrust to overcome Earth's gravity. The launch vehicle follows a carefully calculated trajectory."
    },
    {
      icon: <Globe className="w-16 h-16 text-purple-600" />,
      title: "Space Deployment",
      description: "Once in the correct orbit, the satellite separates from the launch vehicle and begins its mission, deploying solar panels and communication systems."
    }
  ];

  const launchers = [
    {
      name: "PSLV (Polar Satellite Launch Vehicle)",
      image: "/images/pslv.jpeg",
      specs: [
        "Payload Capacity: 1,750 kg to LEO",
        "Height: 44 meters",
        "Number of Stages: 4",
        "First Launched: 1994"
      ]
    },
    {
      name: "GSLV (Geosynchronous Satellite Launch Vehicle)",
      image: "/images/ggslv.jpeg",
      specs: [
        "Payload Capacity: 5,000 kg to GTO",
        "Height: 49 meters",
        "Number of Stages: 3",
        "First Launched: 2001"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        ISRO Satellite Launch Process
      </h1>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {launchStages.map((stage, index) => (
          <div 
            key={stage.title} 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              {stage.icon}
              <h2 className="ml-4 text-xl font-semibold text-gray-700">{stage.title}</h2>
            </div>
            <p className="text-gray-600">{stage.description}</p>
            <div className="mt-4 h-1 bg-blue-200 w-full relative">
              {index < launchStages.length - 1 && (
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-4">ISRO Launch Vehicles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {launchers.map(launcher => (
            <LauncherModal key={launcher.name} launcher={launcher} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SatelliteLauncher;