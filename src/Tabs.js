import React, { useState } from 'react';
import './Tabs.css';
import ESC from './esc.jpg';
import RedSquare from './RedSquare';
import BlueSquare from './BlueSquare';

const Tabs = () => {
  const [tabs, setTabs] = useState([
    { 
      id: Math.random(),
      label: 'Description du produit',
      content: (
        <div>
            <h2>Sire - Marcus Miller </h2>
            <strong>S7 5 strings - BRS 2nd Gen  Corps en Aulne</strong>
              <ul> 
                <li>forme du corps: New modern bass</li>
                <li>manche en érable</li>
                <li>forme en C</li>
                <li>diapason: 34"</li>
                <li>touche en Ebène (Radius : 12")</li>
                <li>Frets: medium</li>
                <li>24 frets</li>
                <li>sillet:38mm,Incrustations nacrées</li>
                <li>capteur Marcus Pure-H Revolution Set</li>
                <li>Pré-ampli: Marcus Heritage- 3 (avec ajustement medium)</li>
                <li>Contrôles : Volume / Tone (Dual Pot) | Pickup Blender | Treble | Middle / Middle Frequency (Dual Pot) | Bass</li>
                <li>Mini Toggle (Active / Passive ),Chevalet : Marcus Miller Heavy Mass Custom</li>
                <li>Mécanique: Sire Diecasting Gear (Black)</li>
                <li>4.20kg</li>
                <li>Finition Brown Sunburst</li>
              </ul>
        </div>
      )
    },
    { 
      id: Math.random(),
      label: 'Images',
      content: (
        <div>
          <img 
            className= "Basspic"
            src={ESC} 
            alt="Basse Sire"
          />
        </div>
      )
    },
    { 
      id: Math.random(),
      label: 'Commentaires',
      content: (
        <div>
          <ul>
            <li>Superbe basse 5 cordes!</li>
            <li>Son unique, belle finition.</li>
            <li>Une marque qui a fait ses preuves.</li>
          </ul>
        </div>
      )
     }
  ]);

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="Wrapper">
      <div className="Titrelie">
      <RedSquare />
      <h1>Sire bass</h1>
      <BlueSquare />
      </div>
      <ul className="Tabs">
        {tabs.map((tab) => {
          return (
            <li
              key={tab.id}
              onClick={() => handleTabClick(tab)}
              className="Tab"
            >
              {tab.label}
            </li>
          );
        })}
      </ul>
      <div className="ActiveTabContent">
        {activeTab.content}
      </div>
    </div>
  );
};

export default Tabs;