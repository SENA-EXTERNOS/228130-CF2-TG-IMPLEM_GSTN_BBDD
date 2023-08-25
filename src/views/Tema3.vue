<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Migración de bases de datos

    .row.justify-content-around.align-items-center.mb-5
      .col-lg-3.mb-4
        figure(data-aos='fade-right')
          img(src='@/assets/curso/temas/T3/img-1.png', alt='')
                    
      .col-lg-9.mb-5
        .bloque-texto-b.color-secundario.p-4.mb-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-3 La migración de datos consiste en la transferencia de materiales digitales de un origen de datos a otro. Se trata de una consideración clave para cualquier implementación, actualización o consolidación de un sistema informático
            span (Antaño, A. C. M., et al. 2014)
            i.fas.fa-quote-right

    .row.md-5
      .col-xl-8
        .bloque-texto-q.color-secundario.p-4
          .bloque-texto-b__texto
            p.mb-5 “La migración de datos consiste en la transferencia de materiales digitales de un origen de datos a otro. Se trata de una consideración clave para cualquier implementación, actualización o consolidación de un sistema informático”, (Antaño, A. C. M., et al. 2014) Existen muchos motivos para considerar una migración, como la preservación o difusión de los datos, mejoras en el funcionamiento de los motores, actualización de requerimientos de usuario o de software, interoperabilidad, estandarización o cambio de la tecnología, disminución de costos, incremento en el registro de datos, nuevos procedimientos de negocio o mejoras en la seguridad o el control de la información, entre otros escenarios posibles.
            br
            br
            p.mt-5 Para realizar la migración se deben tener en cuenta metodologías que permitan el traslado de la información de forma segura, esto con el objetivo de que no haya pérdida de información, por tal razón, se debe conocer donde se van a alojar los datos e identificar los formatos en los que está la información para determinar las conversiones necesarias en la adecuación a los nuevos formatos; y de esta manera lograr una migración exitosa. Por otra parte, es necesario identificar la flexibilidad de la base de datos para adaptarla a la nueva estructura, de modo que se preserven los datos en su estado original, lo que llevará más adelante a la depuración en caso de ser necesaria. Como medida prioritaria se deben realizar pruebas previas a la migración para identificar si existen problemas de carga o descarga de archivos en la nueva base de datos o gestor. A continuación, podrá visualizar en una infografía las técnicas de migración SQL a NOSQL.
      
      .col-xl-4.mb-4(data-aos='fade-right')
        figure
          img(data-aos='fade-right')(src='@/assets/curso/temas/T3/img-2.png', alt='Obrero')

    ol.lista-ol--cuadro.mb-4
      li
        .lista-ol--cuadro__vineta.fcc
          span 
        p <b>Migración de SQL a NoSQL</b>

    p.mb-5 Ya se han visto las múltiples razones que justifican la migración de bases de datos, siempre con el objetivo de optimizar procesos en su gestión y administración; a continuación, se presenta la metodología o técnicas que se deben tener en cuenta, para la migración de datos:
        

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/T3/img-3.svg', alt='Texto que describa la imagen')

      .tarjeta.fae.p-3(x="50%" y="3%" numero="1")
        .h5.mb-2 Planificación: 
        p Es el inicio de la migración, en esta etapa se considera la estructura de la base de datos, su origen, tipo de gestor y tecnología que maneja.

      .tarjeta.fae.p-3(x="77%" y="17%" numero="2")
        .h5.mb-2 Contador de riesgo: 
        p Es un análisis de cuáles son los datos que se pueden perder en la migración. Esta estimación no puede superar un 20%, de lo contrario, no es seguro implementar la migración.  

      .tarjeta.fae.p-3(x="88%" y="50%" numero="3")
        .h5.mb-2 Mapeador de tipo de datos: 
        p Una migración de bases de datos implica nuevas tecnologías, esto sugiere precaución al copiar la información a la base de datos nueva para no tener pérdidas, por tal razón, es necesario identificar los campos nuevos verificando los registros por cada uno. 

      .tarjeta.fae.p-3(x="77%" y="83%" numero="4")
        .h5.mb-2 Restricciones y #[em triggers:]  
        p Las bases de datos que serán sometidas a la migración no deben tener ningún tipo de restricción en los datos que pueda generar errores de copiado.

      .tarjeta.fae.p-3(x="50%" y="96%" numero="5")
        .h5.mb-2 Codificación de caracteres: 
        p Es necesario tener en cuenta la codificación de caracteres para que la migración no genere datos incompletos.

      .tarjeta.fae.p-3(x="23%" y="83%" numero="6")
        .h5.mb-2 Pruebas: 
        p Un proceso de migración siempre debe estar sometido a pruebas de verificación, dado que la información es susceptible de pérdidas o inconsistencias, es importante garantizar que no existe ausencia de datos.

      .tarjeta.fae.p-3(x="12%" y="50%" numero="7")
        .h5.mb-2 Implementación: 
        p Después de realizar todos los pasos anteriores se procede a poner en marcha la migración.

      .tarjeta.fae.p-3(x="23%" y="17%" numero="8")
        .h5.mb-2 Monitoreo: 
        p Es el ejercicio de vigilancia durante la migración, su objetivo es asegurar que el procedimiento no sufra ningún contratiempo, ya que estos procesos pueden tardar horas o días según la cantidad de información que tenga el gestor.

    p.mb-5 Anteriormente, se trató el tema de las técnicas de migración de bases de datos de SQL a NoSQL; es momento de conocer los pasos para realizar una migración de información, de MySQL a Mongod en phpMyAdmin:

    .tarjeta.faf.p-4.mb-5
      SlyderA(tipo="b")
        .row
          p.mb-4 Se procede a realizar la migración de Mysql a Mongod en phpmyadmin
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/T3/img-4.png', alt='Texto que describa la imagen')
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T3/img-5.png', alt='Texto que describa la imagen')
        
        .row
          p.mb-4 Seleccionar la base de datos que se va a exportar con todas las tablas en archivos .csv de mysql, dar clic en exportar para ver las tablas en archivo .zip. 
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/T3/img-6.png', alt='Texto que describa la imagen')
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T3/img-7.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            p Se crea la base de datos en Mongodb con las tres colecciones curso, depto y profesor.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T3/img-8.png', alt='Texto que describa la imagen')

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
