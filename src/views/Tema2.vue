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

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Restauración de bases de datos completa
    
    .row.mb-5.md-5
      .col-md-1
        figure
          img(data-aos='fade-right')(src='@/assets/curso/temas/T2/img-2.svg', alt='')

      .col-md-9
        p.mb-5 Se restaura y recupera toda la base de datos que permanece sin conexión, esta acción se ejecuta cuando más del 50% de los datos se han dañado o se presume que lo hicieron.

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido.mb-4
      h2 2.2. Restauración bases de datos SQL. Mysql

    p.mb-5 Para las copias de seguridad en Mysql se debe crear una base de datos nueva para guardar la información de la copia del archivo de respaldo que se ha generado en un repositorio o carpeta. La generación de este archivo se puede definir según la metodología de seguridad de bases de datos, que puede ser por meses, semanas o días.

    TabsC.color-acento-contenido
      .py-3.py-md-4(titulo="Paso 1")
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 12.
              span Creación base de datos
            figure
              img(src='@/assets/curso/temas/T2/img-3.png', alt='Texto que describa la imagen')
          .col-md-6
            h4 Paso 1
            p Creación base de datos ejercicio 1.

      .py-3.py-md-4(titulo="Paso 2")
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 13.
              span Copia de seguridad base de datos
            figure
              img(src='@/assets/curso/temas/T2/img-4.png', alt='Texto que describa la imagen')
          .col-md-6
            h4 Paso 2
            p Copia de seguridad base de datos
    Separador

    #t_2_3.titulo-segundo.color-acento-contenido.mb-4
      h2 2.3. Restauración de bases de datos NoSQL

    .tarjeta.fad.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/T2/img-5.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1.texto-blanco Actualización de MongoDB
              p.text-small.texto-blanco “A partir de MongoDB 4.4, mongorestore ahora se lanza por separado del servidor MongoDB y utiliza su propio control de versiones, con una versión inicial de 100.0.0. Previamente, mongorestore se lanzó junto con el servidor MongoDB y utilizó versiones coincidentes”, (mongodb, 2022)
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    p.mb-5 A continuación, se presenta el paso a paso para realizar la restauración de una base de datos en Mongodb.
   
    .row.mb-5.md-5
      .col-md-1
        figure
          img(data-aos='fade-right')(src='@/assets/curso/temas/T2/img-6.svg', alt='')

      .col-md-10
        p.mb-5 En primer lugar, es necesario que exista un archivo de copia de la base datos, paso seguido se realiza el borrado de la base de datos dañada con la sintaxis db.dropDatabase(), después  se crea la base de datos en MongoDBCompass (Interfaz gráfica) dando clic en el boton ‘create databases’, aparecerá un cuadro de agregación de bases de datos y colección, luego se selecciona la opción ‘Import Data’, seguido de agregar datos desde archivo de bakup .csv, y de esta manera queda el registro de datos en la nueva base de datos. 


    .tarjeta.tarjeta--gris.p-4.mb-5
      LineaTiempoC.color-primario.mb-5
        .row.justify-content-around.align-items-center(titulo="Paso 1")
          .col-md-6.mb-4.mb-md-0
            p.mb-4 <b>Paso 1</b>
            p Ver bases de datos <i>MogoDBCompass</i>
        
          .col-md-6
            .titulo-sexto.color-acento-contenido
              h5 Figura 14.
              span  <i> Bases de datos MogoDBCompass</i>
            figure
              img(src='@/assets/curso/temas/T2/img-7.png', alt='Texto que describa la imagen')


        .row.justify-content-around.align-items-center(titulo="Paso 2")
          .col-md-6.mb-4.mb-md-0
            p.mb-4 <b>Paso 2</b>
            p Creación de bases de datos
        
          .col-md-6
            .titulo-sexto.color-acento-contenido
              h5 Figura 15.
              span  <i>Creación de bases de datos</i>
            figure
              img(src='@/assets/curso/temas/T2/img-8.png', alt='Texto que describa la imagen')
            
        .row.justify-content-around.align-items-center(titulo="Paso 3")
          .col-md-6.mb-4.mb-md-0
            p.mb-4 <b>Paso 3</b>
            p Seguido, encuentra la pantalla para nombrar bases de datos, en este caso se llamará ‘ejercicio1’
        
          .col-md-6
            .titulo-sexto.color-acento-contenido
              h5 Figura 16.
              span  <i> Nombre para base de datos</i>
            figure
              img(src='@/assets/curso/temas/T2/img-9.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center(titulo="Paso 4")
          .col-md-6.mb-4.mb-md-0
            p.mb-4 <b>Paso 4</b>
            p Importar datos
        
          .col-md-6
            .titulo-sexto.color-acento-contenido
              h5 Figura 17.
              span  <i>Importar datos</i>
            figure
              img(src='@/assets/curso/temas/T2/img-10.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center(titulo="Paso 5")
          .col-md-6.mb-4.mb-md-0
            p.mb-4 <b>Paso 5</b>
            p Agregar datos desde archivo 
        
          .col-md-6
            .titulo-sexto.color-acento-contenido
              h5 Figura 18.
              span  <i>Agregar datos desde archivo</i>
            figure
              img(src='@/assets/curso/temas/T2/img-11.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center(titulo="Paso 6")
          .col-md-6.mb-4.mb-md-0
            p.mb-4 <b>Paso 6</b>
            p Aparece la pantalla de datos importados
        
          .col-md-6
            .titulo-sexto.color-acento-contenido
              h5 Figura 19.
              span  <i>Datos importados</i>
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
