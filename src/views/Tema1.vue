<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5  

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Intervenciones Individuales  

    
    #t_1_1.titulo-segundo
      h2 1.1. Ley Estatutaria en Salud

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

    #t_1_2.titulo-segundo
      h2 1.2 Finalidades de las Intervenciones individuales


    p.mb-5 Las intervenciones individuales actúan de manera articulada y complementaria, cada una de ellas responde a un propósito general que se conoce como finalidad; en la RPMS, se reconocen cuatro finalidades: I) valoración integral en salud; II) detección temprana; III) protección específica y IV) educación para la salud.
    .h4.titulo-rosa.text-center Finalidades de las intervenciones individuales
    p.text-center Click en cada una para ampliar información

    TabsB.color-acento-contenido.my-5.px-4
      .py-4.py-md-5(titulo="Valoración Integral" :icono="require('@/assets/curso/img2.svg') " )
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Valoración Integral
            p Conjunto de atenciones coordinadas, complementarias y efectivas para determinar el estado de salud de las personas con el fin de definir las intervenciones de salud que se requieren, según el curso de vida.
              br
              br
              |Incorpora atención por profesional para la valoración integral por momento de curso de vida y salud bucal. Para el caso de primera infancia, existe apoyo y promoción de la lactancia materna.
      
          .col-md-6
            figure
              img(src='@/assets/curso/img6.svg', alt='Texto que describa la imagen' style='width:70%').m-auto

      .py-4.py-md-5(titulo="Detección Temprana" :icono="require('@/assets/curso/img3.svg') ")
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Detección temprana
            p Identificar en forma oportuna y efectiva la enfermedad para su tratamiento, reducción del daño, evitando secuelas, discapacidad o muerte.
              br
              br
              |Incorpora las atenciones previamente establecidas, como los son, las pruebas de tamizaje para detección temprana de riesgos, incorporando a su vez, la atención por momento de curso de vida y la gestión de dichos riesgos.
          .col-md-6
            figure
              img(src='@/assets/curso/img6.svg', alt='Texto que describa la imagen' style='width:70%').m-auto

      .py-4.py-md-5(titulo="Protección  Específica" :icono="require('@/assets/curso/img4.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Protección específica
            p Es el conjunto de actividades, procedimientos e intervenciones tendientes a garantizar la protección de las personas, familias y comunidades frente a un riesgo específico, con el fin de evitar la presencia de la enfermedad o sus complicaciones
              br
              br
              |Incorpora intervenciones altamente costo-efectivas, como, por ejemplo, la vacunación, la suplementación, desparasitación, la aplicación de flúor, entre otras.
          .col-md-6
            figure
              img(src='@/assets/curso/img7.svg', alt='Texto que describa la imagen' style='width:70%').m-auto

      .py-2.py-md-5(titulo="Educación para La salud" :icono="require('@/assets/curso/img5.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Educación para la salud
            p Proceso  pedagógico de construcción de conocimiento, que pretende aportar al desarrollo del potencial de las personas, familias y  comunidades para proveer el cuidado de la salud, gestionar el riesgo de salud y transformar positivamente los entornos en los que se desarrollan sus vidas.
              br
              br
              |Incorpora tanto los procesos de educación grupal por momento de curso de vida que apunta a fortalecer las capacidades de cuidado, como también, sesiones destinadas a un individuo, asociadas con una condición o situación específica, por ejemplo, la educación para la familia.
          .col-md-6
            figure
              img(src='@/assets/curso/img6.svg', alt='Texto que describa la imagen' style='width:70%').m-auto
  
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
