<template>
  <div class="tagline">
    <p>
      visual innovation and experiences<br />for world class artists and brands
    </p>
  </div>
</template>

<style scoped>
.tagline p {
  font-style: italic;
}

@media screen and (max-width: 1023px) {
  .tagline {
    justify-self: center;
    font-weight: bold;
    text-align: center;
  }
}

@media screen and (min-width: 1024px) {
  .tagline {
    justify-self: end;
    font-size: min(0.9685vw, 1.8018vh);
  }
}
</style>
