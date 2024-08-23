<div
    className={`${css['page__home-container']} ${className}`}
    {...other}
  >

      <div class="stars" ></div>
      <div class="stars2" ></div>
      <div class="stars3" ></div>
  
      <Navbar 
        className={css['navbar']} 
        style={themeStyle}
      />
      
      <SectionHero
        items={data.mock}
        center
        className={css["section-hero"]}
      />

      <Container  
        style={themeStyle}
      />
    
      <Footer
        className={css['footer']}  
        style={themeStyle}
      />

  </div>;