<template>
  <header class="header-content">
    <h1>
      <img src="/img/logo_lacazette.svg" alt="lacazette logo" class="logo" />
      <img src="/img/logo_lacazette.svg" alt="lacazette logo" class="logo" />
      <img src="/img/logo_lacazette.svg" alt="lacazette logo" class="logo" />
    </h1>
    <p class="medium-up-hide"><small>London / NYC</small></p>
    <p class="medium-up-hide header-email">
      <small
        ><a href="mailto:contact@lacazette.xyz">contact@lacazette.xyz</a></small
      >
    </p>
  </header>
</template>

<style scoped>
.logo {
  width: 100%;
}

@media screen and (max-width: 1023px) {
  .header-content {
    display: grid;
    row-gap: 1rem;
  }

  .header-email {
    justify-self: center;
  }
}

@media screen and (min-width: 768px) {
  .logo:not(:first-child) {
    display: none;
  }
}
</style>
