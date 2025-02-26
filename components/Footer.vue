<template>
  <footer>
    <div class="footer-content">
      <div class="footer-blurb">
        <p>
          Lacazette is a multi-disciplinary creative studio based in<br />London,
          Paris & New York, that architects experiences that resonate.
        </p>

        <p>
          Where impact meets aesthetic. we craft immersive worlds that deepen<br />
          connections between brands and culture.
        </p>

        <p>
          We don't follow trends - we set them. We don't just create - we shift
          perspectives.<br />
          We're here to lead culture.
        </p>
        <p></p>
      </div>
      <div class="footer-contact small-hide">
        <p>
          <a href="mailto:contact@lacazette.xyz">contact@lacazette.xyz</a>
        </p>

        <p class="italic">Paris / NYC / London</p>
        <p class="italic">
          <small
            >lacazette. xyz is currently under construction and will be back
            soon.</small
          >
        </p>
        <p class="copyright"><small>LACAZETTE LTD</small></p>
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

.footer-content p + p {
  margin-top: 1em;
}

.footer-content > div:first-child {
  justify-self: start;
}

.footer-contact {
  text-align: center;
  font-size: 0.75rem;
}

.footer-blurb {
  font-size: 0.7rem;
  letter-spacing: -0.03em;
}

.copyright {
  color: rgba(var(--black), 0.6);
}

@media screen and (min-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr auto 1fr;
  }
  .footer-contact {
    margin-top: 2rem;
  }
}
</style>
