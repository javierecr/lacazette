<template>
  <footer>
    <div class="footer-content">
      <div class="text-smaller l-spacing-4">
        <p>
          Lacazette is a multi-disciplinary creative studio based in<br />
          London, Paris & New York, that architects experiences that resonate.
        </p>
        <p>
          Where impact meets aesthetic. we craft immersive worlds that deepen
          <br />connections between brands and culture.
        </p>
        <p>
          We don't follow trends - we set them. We don't just create - we shift
          perspectives.<br />
          We're here to lead culture.
        </p>
      </div>
      <div class="footer-contact small-hide">
        <p class="text-small">
          <a href="mailto:contact@lacazette.xyz">contact@lacazette.xyz</a>
        </p>
        <p class="text-small italic">London / NYC</p>
        <p class="text-smallest italic">
          lacazette. xyz is currently under construction and will be back soon.
        </p>
        <p class="text-smallest color-gray">LACAZETTE LTD</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-content {
  display: grid;
  justify-items: center;
  column-gap: 2rem;
}

.footer-content p {
  margin: 0;
}

.footer-content p:first-child {
  margin-bottom: 1.33rem;
}

.footer-content p:nth-child(2) {
  margin-bottom: 1.92rem;
}

.footer-content p:last-child {
  margin-top: 0.58rem;
}

.footer-content > div:first-child {
  justify-self: start;
}

.footer-contact {
  text-align: center;
  font-size: 0.75rem;
}

@media screen and (min-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr auto 1fr;
    padding-inline: 0.6667rem;
  }

  .footer-contact {
    margin-top: 1.5rem;
  }
}
</style>
