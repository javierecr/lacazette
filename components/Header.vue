<template>
  <header class="header-content">
    <TagLine class="medium-up-hide" />
    <h1>
      <img src="/img/logo_lacazette.svg" alt="lacazette logo" class="logo" />
    </h1>
    <p class="medium-up-hide">London / NYC</p>
  </header>
</template>

<style scoped>
.logo {
  width: 100%;
}

@media screen and (max-width: 1023px) {
  .header-content {
    display: grid;
    order: 2;
  }

  .logo {
    margin-block: 15.5216vw 3.3079vw;
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
