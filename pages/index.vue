<template>
  <div class="container home-content">
    <TagLine class="small-hide" />
    <NuxtImg
      src="/img/visual.gif"
      alt=""
      loading="eager"
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
      <p class="l-spacing-4-minus italic">Recent Clients</p>
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
  height: auto;
  width: auto;
}

@media screen and (max-width: 1023px) {
  .recent-clients {
    order: 0;
    letter-spacing: 0.01em;
  }

  .recent-clients p {
    font-size: 0.75em;
    letter-spacing: -0.02em;
  }

  .home-image {
    order: 1;
  }

  .home-content {
    text-align: center;
    row-gap: 0;
    margin-top: min(4.3256997455vw, 2.5449101796vh);
    margin-top: min(4.3256997455vw, 2.5449101796dvh);
  }

  .home-content :last-child {
    order: 2;
  }
}

@media screen and (min-width: 1024px) {
  .home-content {
    grid-template-columns: 29ch min(45.078125vw, 83.6231884058vh) 29ch;
    grid-template-columns: 29ch min(45.078125vw, 83.6231884058dvh) 29ch;
    justify-content: center;
    align-items: center;
    gap: min(3.1071655041vw, 5.7783018868vh);
    gap: min(3.1071655041vw, 5.7783018868dvh);
    padding: min(4.6924540266vw, 8.7264150943vh) 2rem
      min(4.5990566038vh, 2.4730500951vw);
    padding: min(4.6924540266vw, 8.7264150943dvh) 2rem
      min(4.5990566038dvh, 2.4730500951vw);
    height: 100%;
  }

  .home-image {
    width: 100%;
    max-height: 100%;
  }

  .recent-clients {
    text-align: center;
    justify-self: start;
  }

  .recent-clients {
    font-size: min(0.9685vw, 1.8018vh);
    font-size: min(0.9685vw, 1.8018dvh);
  }

  .recent-clients p {
    font-size: 0.66em;
  }
}
</style>
