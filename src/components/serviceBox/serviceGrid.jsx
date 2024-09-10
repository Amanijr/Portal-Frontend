// CardGrid.js
import React from 'react';
import Card from './serviceCard';
import './CardGrid.css';
import { Link } from 'react-router-dom';


//import local images
import image1 from '../../assets/image1.jpeg'
import image2 from '../../assets/image2.jpeg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'



const services = [
  {
    title: 'EFD Receipts',
    description: 'Manage and retrieve your EFD receipts efficiently.',
    image: image1
  },
  {
    title: 'Package Tracking',
    description: 'Track your packages in real-time with our service.',
    image: image2
  },
  {
    title: 'Tax Returns',
    description: 'File and manage your tax returns with ease.',
    image: image4
  },
  {
    title: 'Tax Calculator',
    description: 'Calculate your taxes quickly and accurately.',
    image: image1
  },
  {
    title: 'Driver\'s License',
    description: 'Apply for, renew, or replace your driver\'s license.',
    image: image2
  },
  {
    title: 'Report Tax Evasion',
    description: 'Anonymously report suspected tax evasion activities.',
    image: image4,
    link:'/TaxEvasion'
    
  }
];

const CardGrid = () => {
  return (

    <div className="card-grid">
        
      {services.map((service, index) => (
        <Link to={service.link} key={index} className="card-Link">
        <Card
          key={index}
          title={service.title}
          description={service.description}
          image={service.image}
        />
        </Link>
      ))}
    </div>
   
  );
};

export default CardGrid;
