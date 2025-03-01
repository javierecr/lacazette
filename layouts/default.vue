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
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  height: 100dvh;
}

.aspect-ratio-container {
  position: relative;
  width: 100vw;
  height: 169.97455471vw;
  max-height: 100vh;
  max-height: 100dvh;
  max-width: 58.8323353293vh;
  max-width: 58.8323353293dvh;
}

.layout-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto auto 1fr;
  padding: min(2.5445292621vw, 1.497005988vh)
    min(0.7633587786vw, 0.4491017964vh);
  padding: min(6.6157760814vw, 3.8922155689dvh)
    min(0.7633587786vw, 0.4491017964dvh) min(2.5445292621vw, 1.497005988dvh);
}

@media screen and (max-width: 1023px) {
  #page {
    order: 3;
  }
}

@media screen and (min-width: 1024px) {
  #layout {
    align-items: center;
  }

  .aspect-ratio-container {
    position: relative;
    height: 53.90625vw;
    height: 53.90625dvw;
    max-width: 185.50724638vh;
    max-width: 185.50724638dvh;
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
    padding: min(1.015625vw, 1.884057971dvh) min(1.5625vw, 3.003003003003dvh)
      min(1.5625vw, 3.003003003003dvh);
  }
}

.layout-content > * {
  min-width: 0;
  min-height: 0;
}
</style>
