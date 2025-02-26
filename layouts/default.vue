<template>
  <div id="layout">
    <Header />
    <main id="page">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
#layout {
  display: grid;
  row-gap: 2rem;
  height: 100%;
  padding: 3rem 1rem;
}

#layout > * {
  min-height: 0;
}

@media screen and (max-width: 1023px) {
  #layout {
    align-content: start;
  }
}

@media screen and (min-width: 1024px) {
  #layout {
    grid-template-rows: auto 1fr auto;
    row-gap: 3rem;
    align-items: center;
    padding: 1rem;
  }
}
</style>
