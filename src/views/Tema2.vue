<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Restauración de bases de datos

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/T2/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Como se ha mencionado, las bases de datos están expuestas a daños inesperados, esto hace necesario contar con planes para la recuperación de un error, una base de datos de SQL. Cuando esto sucede, es deber del administrador realizar un plan de contingencia haciendo la restauración, es decir un conjunto de copias de seguridad de SQL en una secuencia lógica de restauración correcta y significativa. 
          br
          br
          | SQL permite restaurar los datos de las copias de seguridad de toda una base de datos, un archivo de datos o una página de datos, tal y como se describe a continuación:


    ul.lista-ul--color
      li
        i.fas.fa-square
        h4.mb-0 Restauración de bases de datos completa
    
    .row.mb-5.md-5
      .col-md-1
        figure
          img(data-aos='fade-right')(src='@/assets/curso/temas/T2/img-2.svg', alt='')

      .col-md-9
        p.mb-5 Se restaura y recupera toda la base de datos que permanece sin conexión, esta acción se ejecuta cuando más del 50% de los datos se han dañado o se presume que lo hicieron.

    ul.lista-ul--color
      li
        i.fas.fa-square
        h4.mb-0 Restauración bases de datos SQL. Mysql

    p.mb-5 Para las copias de seguridad con MySQL, se debe crear una base de datos nueva para guardar la información de la copia del archivo de respaldo que se ha generado en un repositorio o carpeta. La generación de este archivo se puede definir, según la metodología de seguridad de bases de datos, que puede ser por meses, semanas o días. Se debe realizar de la siguiente manera:

    TabsC.color-acento-contenido
      .py-3.py-md-4(titulo="Paso 1")
        .row.justify-content-around.align-items-center
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/c1.svg', alt='Texto que describa la imagen')
          .col-md-6
            p Creación base de datos ejercicio 1.

      .py-3.py-md-4(titulo="Paso 2")
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/c2.svg', alt='Texto que describa la imagen')
          .col-md-6
            p Copia de seguridad base de datos

    ul.lista-ul--color
      li
        i.fas.fa-square
        h4.mb-0 Restauración de bases de datos NoSQL

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #fff4da")
          .row.justify-content-center
            .col-lg-1: img(src='@/assets/curso/c3.svg', alt='')
            .col-lg-10
              h4 Actualización de MongoDB
              p “A partir de MongoDB 4.4, mongorestore ahora se lanza por separado del servidor MongoDB y utiliza su propio control de versiones, con una versión inicial de 100.0.0. Previamente, mongorestore se lanzó junto con el servidor MongoDB y utilizó versiones coincidentes”, (mongodb, 2022)
    p.mb-5 A continuación, se presenta el paso a paso, para realizar la restauración de una base de datos en MongoDB:
   
    .row.mb-5.md-5
      .col-md-1
        figure
          img(data-aos='fade-right')(src='@/assets/curso/temas/T2/img-6.svg', alt='')

      .col-md-10
        p.mb-5 En primer lugar, es necesario que exista un archivo con la copia de la base datos; paso seguido, se realiza el borrado de la base de datos dañada, con la sintaxis db.dropDatabase(); después, se crea la base de datos en MongoDBCompass (Interfaz gráfica), dando clic en el botón ‘create databases’ y aparece entonces, un cuadro para agregar bases de datos y colección; luego, se selecciona la opción ‘Import Data’, seguido de “agregar datos desde archivo de backup .csv”, y de esta manera queda el registro de datos, en la nueva base de datos. 


    .tarjeta.tarjeta--gris.p-4.mb-5
      LineaTiempoC.color-primario.mb-5
        .row.justify-content-around.align-items-center(titulo="Paso 1")
          .col-md-6.mb-4.mb-md-0
            p Ver bases de datos <i>MogoDBCompass</i>
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T2/img-7.png', alt='Texto que describa la imagen')


        .row.justify-content-around.align-items-center(titulo="Paso 2")
          .col-md-6.mb-4.mb-md-0
            p Creación de bases de datos
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T2/img-8.png', alt='Texto que describa la imagen')
            
        .row.justify-content-around.align-items-center(titulo="Paso 3")
          .col-md-6.mb-4.mb-md-0
            p Seguido, encuentra la pantalla para nombrar bases de datos, en este caso se llamará ‘ejercicio1’
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T2/img-9.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center(titulo="Paso 4")
          .col-md-6.mb-4.mb-md-0
            p Importar datos
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T2/img-10.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center(titulo="Paso 5")
          .col-md-6.mb-4.mb-md-0
            p Agregar datos desde archivo 
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T2/img-11.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center(titulo="Paso 6")
          .col-md-6.mb-4.mb-md-0
            p Aparece la pantalla de datos importados
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T2/img-12.png', alt='Texto que describa la imagen')


</template>

<script>
export default {
  name: 'Tema2',
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
