<template>
  <div class="container home-content">
    <div class="tagline small-hide">
      <p>
        visual innovation and experiences for world class artists and brands
      </p>
    </div>

    <NuxtImg
      src="/img/visual.gif"
      alt=""
      placeholder="/img/visual-placeholder.jpeg"
      class="home-image small-hide"
    />

    <NuxtImg
      src="/img/visual_mobile.gif"
      alt=""
      placeholder="/img/visual-placeholder_mobile.jpeg"
      class="home-image medium-up-hide"
    />
    <div class="recent-clients">
      <p class="text-smaller l-spacing-4 italic">Recent Clients</p>
      <ul class="l-spacing-2">
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
  max-width: 27ch;
  font-style: italic;
}

.recent-clients ul {
  list-style: none;
  list-style-position: outside;
  padding: 0;
}

.home-image {
  max-height: 100%;
  height: auto;
  width: 45.03631961259vw;
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
    grid-template-columns: 27ch auto 27ch;
    justify-content: center;
    align-items: center;
    gap: 3.8741vw;
    padding: 0 2rem;
    height: 100%;
  }

  .recent-clients {
    text-align: center;
  }
}
</style>
