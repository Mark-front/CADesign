let tlContacts = gsap.timeline()
  .from('.contacts__tel', { y: 50 , opacity: 0}, .3)
  .from('.contacts__email', { y: 50 , opacity: 0}, .5)
  .from('.contacts__title', { y: 50 , opacity: 0}, .7)
  .from('.contacts__join-team', { y: 50 , opacity: 0}, .9)
  .from('.socials__list--contacts', { y: 50 , opacity: 0}, 1.1)
  .pause();