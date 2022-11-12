<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Planes de resguardo y de desastres informáticos.

    .row.justify-content-around.align-items-center.mb-5
      .col-lg-3.mb-4
        figure(data-aos='fade-right')
          img(src='@/assets/curso/temas/T4/img-1.png', alt='')
                    
      .col-lg-9.mb-5
        p.mb-2 <b>Según Ardila, S. (2016):</b> 
        .bloque-texto-b.color-secundario.p-4.mb-4
          .bloque-texto-b__texto
            p.mb-0 “Cualquier sistema de redes de computadoras (ordenadores, periféricos y accesorios) está expuesto a riesgos y puede ser fuente de problemas. El hardware y el software están expuestos a diversos factores de riesgo humano y físicos. Estos problemas menores y mayores sirven para retroalimentar los procedimientos y planes de seguridad en la información. Pueden originarse pérdidas catastróficas a partir de fallos de componentes críticos (el disco duro), bien por grandes desastres (incendios, terremotos, sabotaje, etc.) o por fallas técnicas (errores humanos, virus informático, etc.) que producen daño físico irreparable.” 

    .row.justify-content-around.align-items-center.mb-5
      .col-lg-7.mb-5
        .row.mb-4
          .col-12
            .cajon.color-acento-contenido.p-4.mb-4.color-final
              p Las bases de datos hacen parte de los sistemas de información y están expuestas a múltiples riesgos naturales difíciles de predecir como: terremotos, huracanes, inundaciones, entre otros y riesgos artificiales, es decir los fallos propios de los sistemas de cómputo en el software y el hardware. En este sentido, los riesgos naturales tienen una probabilidad baja, mientras, que los riesgos artificiales son de probabilidad media. 
              
        p También existen otros riesgos naturales como las descargas o cortes eléctricos, los cuales pueden generar interrupción en las labores administrativas y el procesamiento de datos, para ello las organizaciones cuentan con generadores de corrientes UPS, que se activan de manera instantánea cuando hay cortes de energía, garantizando el funcionamiento continuo de los equipos de cómputo, en especial, los servidores donde están los programas que almacenan las bases de datos.

      .col-lg-5.mb-4
        figure(data-aos='fade-right')
          img(src='@/assets/curso/temas/T4/img-2.png', alt='')  

  
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/T4/img-3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Por otro lado, existen los planes de contingencia, que son procedimientos definidos por la organización para tener una ruta de recuperación de la información en caso de una interrupción no planeada. Los sistemas son vulnerables a diversas interrupciones clasificadas en dos tipos de factores de riesgo:


    TabsA.color-primario.mb-5
      .tarjeta.color-secundario--borde.fag.p-4(titulo="Bajo")
        .row
          .col-xl-2.mb-4
            figure
              img(src='@/assets/curso/temas/T4/img-4.svg', alt='Texto que describa la imagen')
          .col-xl-10
            h4.mb-3 Bajo
            p Caídas de energía de corta duración, fallos en el disco duro, equivocaciones humanas, daño de archivos temporales, accesos no autorizados, etc. 

      .tarjeta.color-secundario--borde.fag.p-4(titulo="Medio")
        .row
          .col-xl-2.mb-4
            figure
              img(src='@/assets/curso/temas/T4/img-5.svg', alt='Texto que describa la imagen')
          .col-xl-10
            p Destrucción de equipos de cómputo, incendios, inundaciones, daño de equipo, robos, daños irreparables del sistema de información, etc.
    
    p.mb-5 En la siguiente tabla se muestran los tipos de riesgo con su respectivo factor y prevención.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1.
      span Factores de riesgo

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
