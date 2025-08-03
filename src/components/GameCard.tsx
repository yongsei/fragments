import React from 'react';
import { Link } from 'react-router-dom';
import './GameCard.css';

interface GameCardProps {
  title: string;
  description: string;
  features: Array<{
    text: string;
    type?: 'default' | 'difficulty' | 'speed';
  }>;
  icon: React.ReactNode;
  href: string;
  buttonText: string;
}

const GameCard: React.FC<GameCardProps> = ({
  title,
  description,
  features,
  icon,
  href,
  buttonText
}) => {
  return (
    <Link to={href} className="game-card">
      <div className="game-icon">
        {icon}
      </div>
      <div className="game-title">{title}</div>
      <div className="game-description">
        {description}
      </div>
      <div className="game-features">
        {features.map((feature, index) => (
          <span 
            key={index} 
            className={`feature-tag ${feature.type || 'default'}`}
          >
            {feature.text}
          </span>
        ))}
      </div>
      <button className="play-button">
        {buttonText}
      </button>
    </Link>
  );
};

export default GameCard;