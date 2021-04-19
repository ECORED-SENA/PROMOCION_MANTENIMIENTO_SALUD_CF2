<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 4
      .h3 Intervenciones individuales - Educación para la salud
    .row
      .col-lg-4
        .bloque-texto-c.p-4
          .h2.mb-2 La educación no es la palanca para transformar el mundo… pero podría serlo.
          span - Paulo Freire

      .col-lg-8
</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped></style>
