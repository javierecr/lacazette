<template>
  <div class="container home-content">
    <div class="tagline small-hide">
      <p>
        visual innovation and experiences for world class artists and brands
      </p>
    </div>

    <NuxtImg
      src="/img/circle.gif"
      alt=""
      placeholder="/img/circle-placeholder.jpg"
      class="home-image"
    />
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

.home-content > * {
  min-height: 0;
  min-width: 0;
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

.home-image {
  max-height: 100%;
  height: 100%;
  width: 100%;
  object-fit: contain;
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
    grid-template-columns: 29ch auto 29ch;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    padding: 0 2rem;
    height: 100%;
  }

  .recent-clients {
    text-align: center;
  }
}
</style>
