<template>
  <div class="container home-content">
    <div class="tagline small-hide">
      <p>
        visual innovation and experiences for world class artists and brands
      </p>
    </div>
    <div class="home-image">
      <img src="/img/circle.gif" alt="" />
    </div>
    <div class="recent-clients">
      <p class="italic"><small>Recent Clients</small></p>
      <ul>
        <li>Nike</li>
        <li>Travis Scott</li>
        <li>Mercedes Benz</li>
        <li>Prada</li>
        <li>Peso Pluma</li>
        <li>Aston Martin</li>
        <li>Adidas</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.home-content {
  display: grid;
  justify-items: start;
}

.tagline p {
  max-width: 29ch;
  font-style: italic;
}

.recent-clients ul {
  list-style: none;
  list-style-position: outside;
  padding: 0;
}

@media screen and (max-width: 1023px) {
  .recent-clients {
    order: 0;
  }
  .home-image {
    order: 1;
  }
}

@media screen and (min-width: 1024px) {
  .home-content {
    grid-template-columns: 29ch 2.4fr 29ch;
    justify-items: center;
    align-items: center;
    gap: 2rem;
    padding: 0 2rem;
  }

  .recent-clients {
    text-align: center;
  }
}

@media screen and (min-width: 1024px) {
  .home-content {
    padding: 0 2rem;
    justify-content: center;
  }
}
</style>
