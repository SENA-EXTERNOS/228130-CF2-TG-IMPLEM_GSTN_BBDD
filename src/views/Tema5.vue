<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Políticas organizacionales

    .row.justify-content-around.align-items-center.mt-5
      .col-10.px-5.py-4
        .row
          .col-12.d-lg-block
            .bloque-texto-x.fah.p-3.p-sm-4.p-md-5.mb-5
              .bloque-texto-x__img(data-aos='fade-right')(
                :style="{'background-image': `url(${require('@/assets/curso/temas/T5/img-1.png')})`}"
              )
              .bloque-texto-x__texto.p-4
                p.mb-3 Las políticas organizacionales de las empresas son relevantes porque permiten un adecuado procedimiento frente a diversas situaciones, dentro de ellas se considera importante contar con políticas de seguridad que guiarán a los usuarios responsables de cada proceso a actuar en consecuencia para salvaguardar la información obtenida, generada o procesada por la entidad, así mismo, las políticas permitirán que la organización trabaje bajo las mejores prácticas de seguridad y cumpla con los requisitos legales a los cuales esté obligada en el plano gubernamental de cada país.

    Separador

    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 Políticas de seguridad

    .row.justify-content-around.align-items-center.mb-5
      .col-lg-1.mb-4
        figure(data-aos='fade-right')
          img(src='@/assets/curso/temas/T5/img-2.svg', alt='')
                    
      .col-lg-11.mb-5
        p.mb-2 A continuación, podrá conocer sobre el desarrollo de las políticas organizacionales, las cuales deben pasar por ciertas fases para la definición de responsabilidades de las áreas encargadas de su creación, estructuración, descripción, revisión y aprobación; para lo cual se requieren actividades de verificación e investigación en los siguientes aspectos:

    .titulo-sexto.color-acento-contenido
      h5 Figura 25.
      span Políticas de seguridad
    .row.justify-content-around.align-items-center.mb-5
      figure(data-aos='fade-right')
        img(src='@/assets/curso/temas/T5/img-3.png', alt='')


    p.mb-5 El proceso de migración de datos es la acción que permite cambiar el origen y formato de los datos a otro sistema de almacenamiento, este proceso se aplica en repetidas ocasiones, pues la reorganización de los datos a los nuevos sistemas puede causar perdidas de información o errores de guardado; sin embargo se hacen necesario en diversas tareas, como el reemplazo o actualización de servidores o equipos, el mejoramientos de un sitio web, el mantenimiento o cambio de un servidor o para reubicar un centro de datos.


    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/T5/img-4.svg', alt='Texto que describa la imagen')

      .tarjeta.fae.p-3(x="16%" y="4%" numero="")
        p Determinar, al interior de la entidad, la persona, rol o dirección que tiene la competencia de formalizar las políticas de seguridad de la información mediante la firma y publicación de las mismas.

      .tarjeta.fae.p-3(x="33%" y="95%" numero="")
        p  Identificar el por qué la entidad requiere la creación de la política de seguridad de información y el control al cual hace referencia su implementación.

      .tarjeta.fae.p-3(x="50%" y="4%" numero="")
        p  Establecer el alcance ¿A qué población, áreas, procesos o departamentos aplica la política?, ¿Quiénes deben cumplir la política?

      .tarjeta.fae.p-3(x="66%" y="95%" numero="")
        p Definir los responsables y los roles para la implementación, aplicación, seguimiento y autorización de la política.

      .tarjeta.fae.p-3(x="83%" y="4%" numero="")
        p Evaluar la redacción y aplicabilidad de la política y realizar sugerencias sobre el desarrollo y creación de la misma.

    Separador

    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 Políticas para la implementación de controles de seguridad de la información 

    
    p.mb-5 Definir las políticas de seguridad para las bases de datos con el fin de proteger la información, es un hecho prioritario para las organizaciones por su alta sensibilidad y valor comercial. Por lo tanto, se deben tener presentes los siguientes puntos:


    .row.mb-5.md-5
      .col-md-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta fac")
          .row(titulo="a) Control de acceso")
            .col-md-12.mb-4.mb-md-0
              p.mb-3 Son todas aquellas directrices mediante las cuales las organizaciones determinan los mecanismos de protección de la información por medio de los ingresos de usuarios, tales como:
              ul.lista-ul.mt-3
                li 
                  i.fas.fa-check
                  | Control de acceso con usuario y contraseña
                li 
                  i.fas.fa-check
                  | Suministro del control de acceso
                li 
                  i.fas.fa-check
                  | Gestión de Contraseñas
                li 
                  i.fas.fa-check
                  | Perímetros de Seguridad

          .row(titulo="b)	Disponibilidad del servicio de información")
            .col-md-12.mb-4.mb-md-0
              p Las organizaciones deben contar con un plan de continuidad del negocio con el fin de asegurar, recuperar o restablecer la disponibilidad de los procesos que soportan el Sistema de Gestión de Seguridad de la Información, esta política es muy importante porque determina los pasos que se deben seguir para el resguardo y correcto funcionamiento de la información.
              ul.lista-ul.mt-3
                li 
                  i.fas.fa-check
                  | Disponibilidad
                li 
                  i.fas.fa-check
                  | Planes de recuperación
                li 
                  i.fas.fa-check
                  | Interrupciones
                li 
                  i.fas.fa-check
                  | Acuerdos del nivel de servicio de la información
                li 
                  i.fas.fa-check
                  | Gestión de cambios


      .col-md-5.mb-5.mb-md-0
        figure
          img(data-aos='fade-right')(src='@/assets/curso/temas/T5/img-5.png', alt='')

      

    
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
