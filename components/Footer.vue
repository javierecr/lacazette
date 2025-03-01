<template>
  <footer>
    <div class="footer-content">
      <Blurb class="small-hide" />
      <div class="footer-contact">
        <p class="">
          <a href="mailto:contact@lacazette.xyz">contact@lacazette.xyz</a>
        </p>
        <p class="italic small-hide">
          London <span class="medium-up-hide">&</span
          ><span class="small-hide">/</span> New York
        </p>
        <UnderConstruction class="small-hide" />
        <p class="copyright color-gray small-hide">LACAZETTE LTD</p>
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
  margin-bottom: min(4.834605598vw, 2.8443113772vh);
}

.footer-content p:nth-child(2) {
  margin-bottom: min(3.4782608696vh, 1.875vw);
}

.footer-content p:last-child {
  margin-top: min(0.546875vw, 1.01449275362vh);
}

.footer-content > div:first-child {
  justify-self: start;
}

@media screen and (max-width: 1023px) {
  footer {
    order: 1;
  }

  .footer-contact {
    letter-spacing: -0.04em;
  }
}

@media screen and (min-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr auto 1fr;
    padding-inline: 0.6667rem;
  }

  .footer-content p:first-child {
    margin-bottom: min(1.328125vw, 2.4637681159vh);
  }

  .footer-contact {
    margin-top: min(1.40625vw, 2.6086956522vh);
    font-size: min(0.703125vw, 1.3043478261vh);
    text-align: center;
  }

  .copyright {
    font-size: 0.66em;
  }
}
</style>
