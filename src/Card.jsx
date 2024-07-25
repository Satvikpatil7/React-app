import React, { useEffect } from 'react';
import { SiLeetcode } from "react-icons/si";
import { FaLink, FaGithub, FaLinkedin } from "react-icons/fa";
import './Card.css';

const Cards = () => {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll('.card'));
    const cardsContainer = document.querySelector('#cards');

    const handleMouseMove = (e) => {
      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    cardsContainer.addEventListener('mousemove', handleMouseMove);

    return () => {
      cardsContainer.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const cardClasses = "card bg-black";
  const contentClasses = "card-content";
  const iconClasses = "text-9xl bg-inherit text-slate-300";
  const headingClasses = "text-4xl bg-inherit text-slate-300";
  const textClasses = "bg-inherit text-slate-300";
  const linkClasses = "bg-inherit text-lg text-slate-300";

  return (
    <div id="cards" className='h-screen w-full flex items-center justify-center'>
      <div className={cardClasses}>
        <div className={contentClasses}>
          <SiLeetcode className={iconClasses}/>
          <h2 className={headingClasses}>LeetCode</h2>
          <p className={textClasses}>Programmer passionate . </p>
          <a href="https://leetcode.com/u/satvikmpatil/">
            <FaLink className={linkClasses}/>
            <span className={linkClasses}>Follow me</span>
          </a>
        </div>
      </div>
      <div className={cardClasses}>
        <div className={contentClasses}>
          <FaGithub className={iconClasses}/>
          <h2 className={headingClasses}>GitHub</h2>
          <p className={textClasses}>A web enthusiast passionate about...</p>
          <a href="https://github.com/Satvikpatil7">
            <FaLink className={linkClasses}/>
            <span className={linkClasses}>Follow me</span>
          </a>
        </div>
      </div>
      <div className={cardClasses}>
        <div className={contentClasses}>
          <FaLinkedin className={iconClasses}/>
          <h2 className={headingClasses}>LinkedIn</h2>
          <p className={textClasses}>Connect with me to explore new ideas</p>
          <a href="https://www.linkedin.com/in/satvikpatil/">
            <FaLink className={linkClasses}/>
            <span className={linkClasses}>Follow me</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
