<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 2
      .h3 Atenciones individuales por momento de curso de vida y finalidad
    figure.my-5
          img(src='@/assets/curso/img8.svg', alt='Texto que describa la imagen' style='width:90%').m-auto
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    .h4.mt-5 Sabías que…
    .cajon--rojo.p-4.mb-5
          p Con el fin de contribuir al logro de los resultados en salud y cumplir con cada uno de los procedimientos establecidos en la RPMS, los actores del sistema de salud deben garantizar la adaptabilidad de las intervenciones, este proceso se refiere a las modificaciones o ajustes a realizar en relación con la prestación de atenciones/intervenciones y con los mecanismos de abordaje de las poblaciones, de acuerdo con sus particularidades y las de los territorios que habitan. 
            br
            br
            |El propósito, está encaminado a brindar las oportunidades para que todas las poblaciones según momento de curso de vida, pertenencia étnica, condición de discapacidad, identidad de género o sexual o víctima del conflicto armado- y de acuerdo con sus condiciones geográficas (ámbitos territoriales donde habitan: urbano, rural o rural disperso), culturales, históricas y sociales, dispongan de los servicios, procedimientos, acciones e intervenciones definidas en las RIAS, en condiciones de aceptabilidad, accesibilidad, calidad y equidad, garantizando el derecho a la salud en concomitancia con los demás derechos establecidos por la Constitución Política (Ley 1751 de 2015).

    

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped></style>
