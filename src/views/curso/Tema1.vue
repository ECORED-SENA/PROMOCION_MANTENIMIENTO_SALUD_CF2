<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 Intervenciones Individuales
    .titulo-segundo
      .h4  1.1. Ley Estatutaria en Salud
    p Las intervenciones individuales son aquellas dirigidas al individuo cuyo objetivo es lograr la atención integral en salud, que incluye acciones de promoción de la salud, detección temprana, protección específica, diagnóstico, tratamiento, rehabilitación y paliación.
    br
    p 
      b La Resolución 3280 de 2018, en lo relacionado con la RPMS, 
      b-none define las intervenciones individuales  como el conjunto de intervenciones en salud dirigidas a las personas en sus diferentes momentos del curso de la vida y a la familia como sujeto de atención, que tienen como finalidad la valoración integral, la detección temprana, la protección específica y la educación para la salud de forma individual, grupal o familiar. Tienen como objetivo potenciar o fortalecer las capacidades para el cuidado de la salud de las personas, minimizar el riesgo de enfermar o derivar oportunamente a otras rutas de grupo de riesgo o a los servicios de salud requeridos para el manejo de su condición de salud. (Ministerio de Salud y Protección Social, 2018)
    .row.my-5
      .col-lg-6
        figure
          img(src='@/assets/curso/img1.svg', alt='Texto que describa la imagen' style='width:70%').m-auto
      .col-lg-6
        p.ps-5 Las intervenciones individuales están estrechamente relacionadas con la gestión del riesgo individual, por lo que, incorporan aquellas intervenciones que han mostrado ser altamente costo efectivas en términos de brindar protección ante algunos riesgos o eventos; y de manera importante apuestan por acercarse a la complejidad de las personas y sus familias, para aportar elementos para el cuidado de su salud, así como a potenciar la capacidad de agencia en relación a su salud y a su trayectoria vital. 
    p.mb-5 En caso que sea detectado un riesgo o diagnosticada una condición, la persona deberá recibir las atenciones específicas, (ya sea en el marco de la atención resolutiva orientada por las RIAS para grupos de riesgo específico o por las guías de práctica clínica o guías de manejo vigentes); y debe continuar con las atenciones que le corresponden de acuerdo a su momento de curso de vida en la RPMS (Ministerio de Salud y Protección Social, 2018).
    .titulo-segundo
      .h4 1.2 Finalidades de las Intervenciones individuales
    p.mb-5 Las intervenciones individuales actúan de manera articulada y complementaria, cada una de ellas responde a un propósito general que se conoce como finalidad; en la RPMS, se reconocen cuatro finalidades: i) valoración integral en salud; ii) detección temprana; iii) protección específica y iv) educación para la salud.
    .h4.titulo-rosa.text-center Finalidades de las intervenciones individuales
    p.text-center Click en cada una para ampliar información
    TabsB.my-5.px-4
      .py-4.py-md-5(titulo="Valoración Integral" :icono="require('@/assets/curso/img2.svg') " )
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Valoración Integral
            p Conjunto de atenciones coordinadas, complementarias y efectivas para determinar el estado de salud de las personas con el fin de definir las intervenciones de salud que se requieren, según el curso de vida.
              br
              br
              |Incorpora una atención por profesional para la valoración integral por momento de curso de vida; además la atención en salud bucal para el caso de primera infancia la atención para promoción y apoyo a la lactancia.
        
          .col-md-6
            figure
              img(src='@/assets/curso/img6.svg', alt='Texto que describa la imagen' style='width:70%').m-auto
      .py-4.py-md-5(titulo="DetecciónTemprana" :icono="require('@/assets/curso/img3.svg') ")
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Detección temprana
            p Identificar en forma oportuna y efectiva la enfermedad para su tratamiento, reducción del daño, evitando secuelas, discapacidad o muerte.
              br
              br
              |Incorpora las atenciones previamente establecidas como pruebas de tamizaje para detección temprana de riesgos y debe ser incorporada a la atención por momento de curso de vida para la gestión de dichos riesgos.
          .col-md-6
            figure
              img(src='@/assets/curso/img7.svg', alt='Texto que describa la imagen' style='width:70%').m-auto
      .py-4.py-md-5(titulo="Protección  Específica" :icono="require('@/assets/curso/img4.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Protección específica
            p Es el conjunto de actividades, procedimientos e intervenciones tendientes a garantizar la protección de las personas, familias y comunidades frente a un riesgo específico, con el fin de evitar la presencia de la enfermedad o sus complicaciones
              br
              br
              |Incorpora esas intervenciones altamente costo efectivas como el caso de la vacunación, la suplementación, desparasitación, la aplicación de fluor, entre otras
        
          .col-md-6
            figure
              img(src='@/assets/curso/img7.svg', alt='Texto que describa la imagen' style='width:70%').m-auto
      .py-2.py-md-5(titulo="Educación para La salud" :icono="require('@/assets/curso/img5.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Educación para la salud
            p Proceso  pedagógico de construcción de conocimiento, que pretende aportar al desarrollo del potencial de las personas, familias y  comunidades para proveer el cuidado de la salud, gestionar el riesgo de salud y transformar positivamente los entornos en los que se sus vidas.
              br
              br
              |Incorpora tanto los procesos de educación grupal por momento de curso de vida que apunta a fortalecer las capacidades de cuidado, como sesiones destinadas a un individuo asociadas a una condicion o situacion especifica, como el escenario de educación para la familia.
          .col-md-6
            figure
              img(src='@/assets/curso/img7.svg', alt='Texto que describa la imagen' style='width:70%').m-auto


</template>

<script>
import { mapActions } from 'vuex'
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema1',
  components: {
    BannerInterno,
  },
  data: () => ({
    datosLineaTiempoA: [
      {
        ano: '100.000 - 10.000 A.C.',
        titulo: 'Período Paleolítico',
        texto: 'Pieles, pelo de animales, hojas, huesos y conchas.',
      },
      {
        ano: '10.000 - 5.000 A.C.',
        titulo: 'Periodo Mesolítico',
        texto:
          'Broches hechos con hueso, abrigos, gorros, botas y zapatillas de cuero.',
      },
      {
        ano: '10.000 - 5.000 A.C.',
        titulo: 'Periodo Neolítico',
        texto: 'Vestimenta de fibras animales y vegetales, pulseras de marfil.',
      },
    ],
    datosLineaTiempoB: [
      {
        titulo: '01 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: '02 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: '03 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: '04 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
    ],
    datosPasosA: [
      {
        titulo: 'Dressed for Error',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.',
      },
      {
        titulo: 'Before the Fury',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.',
      },
      {
        titulo: 'Khans Tribute',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.',
      },
      {
        titulo: 'Secret of the Quiet Stranger',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.',
      },
    ],
    datosSlyder: [
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.increment()
    setTimeout(() => {
      this.decrease()
    }, 3000)
  },
  methods: {
    ...mapActions(['increment', 'decrease']),
  },
}
</script>

<style lang="sass" scoped></style>
