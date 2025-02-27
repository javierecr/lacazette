<template>
  <div class="container home-content">
    <TagLine class="small-hide" />
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
      <p class="text-smaller l-spacing-4-minus italic">Recent Clients</p>
      <ul class="l-spacing-2-minus">
        <li>Nike</li>
        <li>Travis Scott</li>
        <li>Mercedes Benz</li>
        <li>Prada</li>
        <li>Peso Pluma</li>
        <li>Aston Martin</li>
        <li>Adidas</li>
      </ul>
    </div>
    <Blurb class="medium-up-hide" />
    <UnderConstruction class="medium-up-hide" />
  </div>
</template>

<style scoped>
.home-content {
  display: grid;
  justify-items: center;
}

.home-content > * {
  min-height: 0;
  min-width: 0;
}

.recent-clients ul {
  list-style: none;
  list-style-position: outside;
  padding: 0;
}

.home-image {
  max-height: 100%;
  height: auto;
  width: 100%;
}

@media screen and (max-width: 1023px) {
  .recent-clients {
    order: 0;
    margin-bottom: 7.3791vw;
  }
  .recent-clients p {
    font-size: 1.5267vw;
  }

  .home-image {
    order: 1;
  }

  .home-content {
    text-align: center;
    row-gap: 3.0524vw;
    height: 100%;
  }

  .home-content :last-child {
    order: 2;
  }
}

@media screen and (min-width: 1024px) {
  .home-content {
    grid-template-columns: 29ch auto 29ch;
    justify-content: center;
    align-items: center;
    gap: 3.8741vw;
    padding: 0 2rem;
    height: 100%;
  }

  .home-image {
    width: 45.03631961259vw;
  }

  .recent-clients {
    text-align: center;
  }
}
</style>
