<template>
  <footer>
    <div class="footer-content">
      <Blurb class="small-hide" />
      <div class="footer-contact">
        <p class="text-small">
          <a href="mailto:contact@lacazette.xyz">contact@lacazette.xyz</a>
        </p>
        <p class="text-small italic small-hide">London / NYC</p>
        <UnderConstruction class="small-hide" />
        <p class="text-smallest color-gray small-hide">LACAZETTE LTD</p>
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

@media screen and (max-width: 1023px) {
  footer {
    order: 1;
  }
}
@media screen and (min-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr auto 1fr;
    padding-inline: 0.6667rem;
  }

  .footer-contact {
    margin-top: 1.5rem;
    font-size: 0.75rem;
    text-align: center;
  }
}
</style>
