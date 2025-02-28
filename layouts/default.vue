<template>
  <div id="layout">
    <div class="aspect-ratio-container">
      <div class="layout-content">
        <Header />
        <main id="page">
          <slot></slot>
        </main>
        <Footer />
      </div>
    </div>
  </div>
</template>

<style scoped>
#layout {
  overflow: hidden;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  height: 100vh;
}

.aspect-ratio-container {
  width: 100vw;
  width: 100dvw;
  height: 100vh;
  height: 100dvh;
}

.layout-content {
  display: grid;
  grid-template-rows: auto auto 1fr;
  padding: 6.6157760814vw 2.5445292621vw 3.3078880407vw;
}

@media screen and (max-width: 1023px) {
  #page {
    order: 3;
  }
}

@media screen and (min-width: 1024px) {
  .aspect-ratio-container {
    position: relative;
    width: 100vw;
    width: 100dvw;
    height: 50vw;
    height: 50dvw;
    max-height: 100vh;
    max-height: 100dvh;
    max-width: 200vh;
    max-width: 200dvh;
  }

  .layout-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    padding: min(1.015625vw, 1.884057971vh) min(1.5625vw, 3.003003003003vh)
      min(1.5625vw, 3.003003003003vh);
  }
}

.layout-content > * {
  min-width: 0;
  min-height: 0;
}
</style>
