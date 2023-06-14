export const extendedNavbarAnimation = {
    hidden: { y: -50 , opacity: 0},
    show: {
      y: 1,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.5,
        type: 'tween',
      },
  
    }
  }
  
  export const headerAnimation = {
    hidden: { x: -100, opacity: 0 },
    show: {
      x: 1,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.5,
        type: 'tween',
      },
    },
  };
  
  export const imageScaleAnimation = {
    hidden: {
      scale: 2,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        type: 'tween',
      },
    },
  };
  
  
  
  
  //ANIMATE FEATURE SECTION
  
  export const titleAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
  
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  
  export const subtitleAnimation = {
    hidden: {
      x: 100,
      opacity: 0,
    },
  
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  
  //ANIMATE SERVICES SECTION
  
  export const imageSlideAnimate = {
    hidden: {
      x: -100,
      opacity: 0,
    },
  
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        bounce: 0.4,
        duration: 1,
      },
    },
  };
  
  
  export const cardAnimation = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        duration:0.2,
      }
    },
  }
  
  
  export const priceCardAnimation = {
    hidden: {
      x: 100,
      opacity: 0,
    },
  
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
      }
    }
  }
  
  
  export const contactAnimation = {
    hidden: {
    
      opacity: 0,
    },
  
    show: {
      
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
      }
    }
  }