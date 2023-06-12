/* eslint no-undef: 0 */
import React from 'react';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';

function ParallaxG(props:any) {
  return <ScrollParallax component="g" {...props} />;
}

export default function svgBgToParallax(children: React.ReactNode, i = 0) {
  const svgChildren = React.Children.toArray(children).map((child, ii) => (
    <ParallaxG
      key={ii.toString()}
      location="page2"
      animation={{
        y: (Math.random() * -200) - 30 - (i * 20),
        playScale: [0, Math.random() + 2],
      }}
    >
      {child}
    </ParallaxG>
  ));
  return svgChildren;
}
