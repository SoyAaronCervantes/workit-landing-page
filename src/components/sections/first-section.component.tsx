import React from 'react';
import ToolbarComponent from "../toolbar.component";
import FirstSectionContent from "../first-section-content";

import heroImage from '/assets/images/image-hero.webp';

export const FirstSectionComponent = () => {
  return (
    <section className="[ section--one ] [ tertiary-container ] [ background-text ]">
      <div className="[ content--grid ] [ section--one--clip ] [ container--content--padding ] [ on-primary-container ]">
        <div className="[ content--visible ]">
          <ToolbarComponent />
          <FirstSectionContent/>
        </div>
        <img
          className="[ image--hero ] [ image--hero--hidden ]"
          src={heroImage}
          alt="Illustration"/>
      </div>
      <div className="[ content--grid ] [ container--content--padding ]">
        <div className="[ content--hidden ]">
          <ToolbarComponent />
          <FirstSectionContent/>
        </div>
        <img
          className="[ image--hero ]"
          src={heroImage}
          alt="Illustration"/>
      </div>
    </section>
  );
};

export default FirstSectionComponent;
