<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Copias de seguridad 

    .row.justify-content-around.align-items-center.mb-5
      .col-lg-3.mb-4
        figure(data-aos='fade-right')
          img(src='@/assets/curso/temas/T1/img-1.png', alt='')
                    
      .col-lg-9.mb-5
        p.mb-2 A continuación, vamos a conocer, de acuerdo con el autor Martín González, qué significan las copias de seguridad:
        .bloque-texto-b.color-secundario.p-4.mb-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 Según (Martín González, E. S. 2015. Cap. 1): “Los datos son un activo muy importante en cualquier entidad y empresa, por eso es necesario tenerlos a buen recaudo y siempre disponibles. La pérdida de datos provoca un daño difícil de valorar, como la disminución de oportunidades de negocio, deterioro de la reputación y clientes decepcionados. Por otra parte, la tecnología no está exenta de errores que pueden llevar al traste con los datos almacenados”. 
            i.fas.fa-quote-right

        .row.mb-4
          .col-12
            .cajon.color-acento-contenido.p-4.mb-4.color-final
              p Las bases de datos son fundamentales para el funcionamiento de las operaciones financieras en las organizaciones, ya que la información recolectada permite ver y analizar tendencias y comportamientos de compras para ofertar productos a una gran cantidad de clientes frecuentes y potenciales, por esta razón, tener copia de seguridad de las bases de datos es una buena práctica de seguridad de la información. 
      
      .row.justify-content-around.align-items-center(data-aos='fade-right')
        .col-12
          .row
            .col-12.d-lg-block
              .bloque-texto-x.faa.p-3.p-sm-4.p-md-4.mb-5
                .col-lg-4
                  .bloque-texto-g1__img(
                    :style="{'background-image': `url(${require('@/assets/curso/temas/T1/img-2.png')})`}"
                  )
                .col-lg-8
                  .contenedor-dashed-2.p-3
                    .bloque-texto-g1__texto.p-3
                      p.mb-3 Una pérdida de información en las bases de datos puede ocasionarse por diversos factores como; catástrofes ambientales, errores humanos o daños irreparables de equipos de cómputo. 
                      p.mb-3 Las copias de seguridad también son medidas esenciales antes de realizar una actualización de MySQL, y se pueden usar para transferir una instalación a otro sistema o para configurar servidores de réplica o espejo. 
                      p.mb-3 El MySQL es un gestor de bases de datos utilizado en las empresas para la administración de estas y el desarrollo de diferentes recursos de almacenamiento para la organización de información.
                      p.mb-3 La seguridad en las base de datos es un tema prioritario en las organizaciones, ya que la información constituye un activo determinante para el funcionamiento y el crecimiento del negocio, es decir, con la información se pueden generar estrategias de mercadeo incrementar las ventas y aumentar los clientes, un ejemplo de ello son los vendedores de seguros, quienes entre más información tengan de clientes más opciones tendrán de ampliar sus ventas, por tal motivo existen formas de salvaguardar la información evitando pérdidas futuras por hechos naturales o humanos. 
          
      .row.justify-content-center.mb-5
        .col-lg-10
          .cajon.color-primario.p-4.mb-4(style="background-color: #dae4ef ")
            p.mb-0 MySQL ofrece múltiples opciones de copia de seguridad entre las que es posible elegir las características que mejor se adapten a los requisitos de su instalación.
    

    ul.lista-ul--color
      li
        i.fas.fa-square
        h4.mb-0 Copias de seguridad Bases de Datos SQL

    p.mb-5(data-aos='fade-right') El comando o utilidad cliente mysqldump, realiza copias de seguridad de una base de datos, con la sintaxis mysqldump y lo lleva a cabo creando, respaldando y restaurando comandos. A continuación, se observan algunos modelos de copias de seguridad de las bases de datos:

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Paso 1")
        .row.justify-content-around.align-items-center.mt-5
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/T1/img-3.png', alt='Texto que describa la imagen')
          .col-md-5
            p.mb-5 Ubicarse en el directorio raíz donde está Mysql en la carpeta bin 
            p <b>“C:\Program Files\MySQL\MySQL Server 8.0\bin</b>

      .py-3.py-md-4(titulo="Paso 2")
        .row.justify-content-around.align-items-center.mt-5
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/T1/img-4.png', alt='Texto que describa la imagen')
          .col-md-5
            p Crear en la carpeta ‘documentos de mi pc’ una carpeta llamada ‘CopiaBasesDatos’
        
      .py-3.py-md-4(titulo="Paso 3")
        .row.justify-content-around.align-items-center.mt-5
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/T1/img-5.png', alt='Texto que describa la imagen')
          .col-md-6
            p.mb-3 Escribir la siguiente sintaxis: <i>“mysqldump -h localhost -u root -p  ejercicio1,</i> C:\Users\Documents\CopiaBasesDatos\copiaejercicio1.sql
            p.mb-4 la capeta creada, dirige el documento copiaejercicio1.sql 

      .py-3.py-md-4(titulo="Paso 4")
        .row.justify-content-around.align-items-center.mt-5
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/T1/img-6.png', alt='Texto que describa la imagen')
          .col-md-6
            p Verificar que se haya guardado automáticamente el archivo o copia de seguridad de la base de datos ‘ejercicio’1 en la carpeta asignada.



    ul.lista-ul--color
      li
        i.fas.fa-square
        h4.mb-0 Copias de seguridad en tablas de bases de datos relacionales

    p.mb-4 Las copias de seguridad son muy importantes para salvaguardar los datos. En el punto anterior, se visualizó una copia de bases de datos, ahora se realizará una copia de una tabla:

    .row.mb-5.md-5
      .col-md-3.mb-5.mb-md-0
        figure
          img(data-aos='fade-right')(src='@/assets/curso/temas/T1/img-7.png', alt='')

      .col-md-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta fac")
          .row(titulo="Paso 1")
            .col-md-12.mb-4.mb-md-0
              p.mb-3 Ingresar a la consola MySQL, luego a la base de datos a la cual se le va a realizar la copia de seguridad de una tabla específica, en este caso la base de datos se llama ‘ejercicio1’ y la tabla que se va a copiar se llamará ‘clientes’.

          .row(titulo="Paso 2")
            .col-md-12.mb-4.mb-md-0
              p Poner la siguiente sintaxis: ‘SELECT *INTO OUTFILE 'C:\AppServ\MySQL\Uploads\clientes.csv' FROM clientes;

    p.mb-5(data-aos='fade-right') Ahora, observemos el paso a paso para realizar las copias de seguridad:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/XcVD0vrZy1I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      


    ul.lista-ul--color
      li
        i.fas.fa-square
        h4.mb-0 Copias de seguridad bases de datos NoSQL


    .row.justify-content-around.align-items-center.mt-5
      .col-10
        .row(data-aos='fade-right')
          .col-12.d-lg-block
            .bloque-texto-x.fab.p-3.p-sm-4.p-md-4.mb-5
              .col-lg-4
                .bloque-texto-g1__img(
                  :style="{'background-image': `url(${require('@/assets/curso/temas/T1/img-8.png')})`}"
                )
              .col-lg-8
                .contenedor-dashed-2.p-3
                  .bloque-texto-g1__texto.p-4
                    p.mb-3 “Para realizar un <i>backup</i> de la base de datos se utiliza el comando mongodump, y para ello es necesario que esté ejecutándose el servidor sobre el que se va a realizar el <i>backup</i>” (Sarasa, A. 2016). 
                    p.mb-3 Cada copia de seguridad se define de acuerdo a como esté estimado en una empresa, por lo general se establecen diariamente; sin embargo, hay datos que son de una importancia tal, que deben ser copiados de manera instantánea.

    ul.lista-ul--color
      li
        i.fas.fa-square
        h5.mb-0 Migración de herramientas en MongoDB 4.4
    
    p.mb-4 A partir de MongoDB 4.4, la documentación mongodump, migra a MongoDB Database Tools. La migración se realiza de la siguiente manera:
    .tarjeta.tarjeta--gris.p-4.mb-5
      LineaTiempoC.color-primario(text-small).mb-5
        .row.justify-content-around.align-items-center(titulo="Paso 1")
          .row
            p.mb-3 Para la versión 4.4 en la instalación de MongoDB se activa la interfaz gráfica MongoDB compass, aquí se podrán ejecutar las diferentes tareas de creación, eliminación, copiado, entre otras; antes de ello se debe correr el servidor MongoDB, para posteriormente hacer la conexión. Desde la lupa de Windows se busca MongoDBCompas.
        
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/T1/img-9.png', alt='Texto que describa la imagen')
            
        .row.justify-content-around.align-items-center(titulo="Paso 2")
          p.mb-3 Hacer clic en la opción ‘conecct’ para conectarse a las bases de datos que tiene MongoDB. En la parte izquierda media, encontrará las bases de datos que están creadas.
        
          .row.justify-content-around.align-items-center
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/T1/img-10.png', alt='Texto que describa la imagen')
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/T1/img-11.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center(titulo="Paso 3")
          p.mb-3 Trabajar con la base de datos ‘ejercicio1’, seleccionar y realizar el backup generando un archivo, luego dar clic escogiendo la colección y posteriormente clic en la opción ‘collection’.
        
          .row.justify-content-around.align-items-center
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/T1/img-12.png', alt='Texto que describa la imagen')
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/T1/img-13.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center(titulo="Paso 4")
          p.mb-4 Dar clic en <i>‘collection’</i>, <i>‘export collection’</i> y seleccionar la opción <i>‘export full collection’</i> y clic en <i>‘select fields’</i>.
        
          .row.justify-content-around.align-items-center
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/T1/img-14.png', alt='Texto que describa la imagen')
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/T1/img-15.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center(titulo="Paso 5")
          p Dar clic en <i>‘select output’</i>, después seleccionar la opción <i>‘csv’</i> y el directorio en donde se guardará el <i>bakup</i> de la colección.
        
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/T1/img-16.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center(titulo="Paso 6")
          p.mb-3 Crear la carpeta en donde se va a guardar el archivo, para el caso se creará en el escritorio, después dar clic en <i>‘Export’</i>.
        
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/T1/img-17.png', alt='Texto que describa la imagen')

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
