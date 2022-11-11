<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-around.align-items-center.mb-5
      .col-lg-3.mb-4
        figure(data-aos='fade-right')
          img(src='@/assets/curso/temas/introduccion/img-1.png', alt='')
                    
      .col-lg-9.md-5
        p.mb-4 Estimado aprendiz, reciba una calurosa bienvenida al desarrollo de este componente formativo, a través del cual podrá aprender sobre la importancia de la seguridad de las bases de datos SQL Y NoSQL. En la instalación de MySQL y MongoDb, se debe considerar el acceso a los servidores y las generalidades que afectan la seguridad, además de los buenos procesos en la instalación.
        .row.mb-4
          .col-12
            .cajon.color-acento-contenido.p-4.mb-4.color-final
              p Dentro de las prácticas correctas es imprescindible tener copias de seguridad idóneas, tanto de los archivos de base de datos como de la configuración y archivos de registro. Adicionalmente, es importante asegurarse de tener una solución de recuperación de información exitosa.
        p.mb-3 El siguiente enlace lo llevará al video de introducción donde conocerá los temas a tratar. Deseamos que culmine este aprendizaje, apropiando adecuadamente todos los conceptos, <b>¡Muchos éxitos!</b>
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
