<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Planes de resguardo y de desastres informáticos

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

    .row.mt-5
      .col-10.offset-1  
        .tabla-a.color-acento-contenido.mb-5 


        
          
          table(width='767')
            thead
              tr
                td(rowspan='2' width='44')
                  p No
                td(rowspan='2' width='175')
                  p Actividad
                td(rowspan='2' width='173')
                  p Elementos
                td(rowspan='2' width='199')
                  p Resultados
                td(colspan='2' width='89')
                  p Realizado
                td(width='88')
                  p Fecha
              tr
                td(width='39')
                  p
                    strong Si
                td(width='50')
                  p
                    strong No
                td(width='88')
                  p
            tbody
              tr
                td(width='44')
                  p 1
                td(width='175')
                  p
                    | Realizar copias de&nbsp;&nbsp;&nbsp; seguridad de la informaci&oacute;n y documentos residentes en los discos duros de los computadores.
                td(width='173')
                  p
                    | Documentos en formatos Word, Excel, PDF, artes,&nbsp; &nbsp;im&aacute;genes, audio y correos electr&oacute;nicos, una&nbsp; copia&nbsp; de&nbsp; seguridad&nbsp; en&nbsp; la nube, una copia de&nbsp; seguridad anual obligatoria de todos los documentos.
                td(width='199')
                  p
                    | Copia de seguridad en la nube en l&iacute;nea o una copia de seguridad anual de todos los datos.
                  p
                    strong &nbsp;
                  p
                    strong &nbsp;
                  p
                    strong Responsable
                    | : Oficina de Sistemas de informaci&oacute;n y de las comunicaciones de la empresa.
                td(width='39')
                  p &nbsp;
                td(width='50')
                  p &nbsp;
                td(width='88')
                  p &nbsp;
              tr
                td(width='44')
                  p 2
                td(width='175')
                  p Realizar copias de seguridad de los sistemas de informaci&oacute;n y bases de datos.
                td(width='173')
                  p
                    | Aplicaciones web e intranet de informaci&oacute;n, aplicaciones y bases de datos de los procesos y archivos, registro&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; nacional de profesionales.
                td(width='199')
                  p
                    | Copia de seguridad semanal del sistema de informaci&oacute;n activo. Los&nbsp;&nbsp; servicios de 
                    em hosting
                    |  en 
                    em datacenter
                    |  contratados incluir&aacute;n el 
                    em backup
                    |  para las aplicaciones.
                  p &nbsp;
                  p
                    strong Responsable
                    | : Ingeniero&nbsp;&nbsp; de sistemas.
                  p &nbsp;
                td(width='39')
                  p &nbsp;
                td(width='50')
                  p &nbsp;
                td(width='88')
                  p &nbsp;
              tr
                td(width='44')
                  p 3
                td(width='175')
                  p Contar m&iacute;nimo con un kit de instalaci&oacute;n para
                  p restaurar los archivos del sistema operativo y
                  p aplicaciones de un computador o servidor en caso de falla o virus.
                  p &nbsp;
                td(width='173')
                  p
                    | Sistema operativo (Windows, Linux, etc.), paquetes de ofim&aacute;tica y dise&ntilde;o. (Office, Corel), bases&nbsp;&nbsp; de&nbsp;&nbsp; datos (Sql, MySql, FoxPro, etc.) , drivers y&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; utilitarios&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; de impresoras,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; redes, computadores, etc.
                td(width='199')
                  p
                    | Contar con m&iacute;nimo un medio de instalaci&oacute;n por cada oficina. Una copia u original del instalador custodia de sistemas.
                  p &nbsp;
                  p
                    strong Responsable
                    | : Ingeniero&nbsp;&nbsp;&nbsp;&nbsp; de sistemas y secretarios seccionales.
                td(width='39')
                  p &nbsp;
                td(width='50')
                  p &nbsp;
                td(width='88')
                  p &nbsp;
              tr
                td(width='44')
                  p 4
                td(width='175')
                  p Mantener descentralizados&nbsp;&nbsp;&nbsp; los&nbsp;&nbsp;&nbsp; sistemas&nbsp;&nbsp;&nbsp; de
                  p informaci&oacute;n, de&nbsp;&nbsp; acuerdo&nbsp; &nbsp;a&nbsp;&nbsp; sus necesidades.
                  p &nbsp;
                td(width='173')
                  p Sitio&nbsp;&nbsp;&nbsp; web, base de&nbsp;&nbsp;&nbsp; datos, aplicaciones&nbsp;&nbsp; fuera&nbsp;&nbsp; de l&iacute;nea en seccionales.
                td(width='199')
                  p
                    | Aplicaciones instaladas en diferentes localizaciones f&iacute;sicas, computadores o servidores.
                  p &nbsp;
                  p
                    strong Responsable
                    | : Ingeniero&nbsp;&nbsp;&nbsp;&nbsp; de sistemas.
                td(width='39')
                  p &nbsp;
                td(width='50')
                  p &nbsp;
                td(width='88')
                  p &nbsp;
              tr
                td(width='44')
                  p 5
                td(width='175')
                  p
                    | Mantener p&oacute;lizas de&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; seguros vigentes, asegurando contra todo riesgo los equipos y bienes por su valor real.
                td(width='173')
                  p
                    | Equipos el&eacute;ctricos&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; y/o electr&oacute;nicos, m&oacute;viles, port&aacute;tiles, software y equipos de comunicaci&oacute;n.
                td(width='199')
                  p
                    | P&oacute;liza&nbsp;&nbsp;&nbsp;&nbsp; vigente&nbsp;&nbsp;&nbsp; contra&nbsp;&nbsp;&nbsp; todo riesgo&nbsp;&nbsp; de&nbsp;&nbsp; da&ntilde;o&nbsp;&nbsp; y/o&nbsp;&nbsp; p&eacute;rdida f&iacute;sica por cualquier causa.
                  p
                    strong Responsable
                    | : Profesional de gesti&oacute;n administrativa
                td(width='39')
                  p &nbsp;
                td(width='50')
                  p &nbsp;
                td(width='88')
                  p &nbsp;
              tr
                td(width='44')
                  p 6
                td(width='175')
                  p
                    | Mantenimientos, revisiones preventivas y correctivas de equipos de computaci&oacute;n y comunicaci&oacute;n, extintores, alarmas y sistemas contra incendio, para mantenerlos en &oacute;ptimas condiciones.
                td(width='173')
                  p
                    | Equipos de computaci&oacute;n&nbsp;&nbsp;&nbsp;&nbsp; y comunicaci&oacute;n perif&eacute;ricos, sistemas el&eacute;ctricos UPS, aires acondicionados, alarmas, sistemas contra&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; incendio, extintores, reglamento del edificio.
                td(width='199')
                  p
                    | Contratos anuales de mantenimiento, garant&iacute;as vigentes y control del mantenimiento de los equipos.
                  p &nbsp;
                  p
                    strong Responsable
                    | : Profesional&nbsp;&nbsp; de gesti&oacute;n administrativa y/o supervisor asignado al contrato de mantenimiento.
                td(width='39')
                  p &nbsp;
                td(width='50')
                  p &nbsp;
                td(width='88')
                  p &nbsp;
              tr
                td(width='44')
                  p 7
                td(width='175')
                  p
                    | Actualizar las claves o contrase&ntilde;ade acceso a las aplicaciones y bases de datos del COPNIA.
                td(width='173')
                  p Base de datos, y sistemas de informaci&oacute;n del COPNIA.
                td(width='199')
                  p
                    | M&iacute;nimo cada seis meses o cuando se requiera por el usuario o por reemplazos del cargo.
                  p &nbsp;
                  p
                    strong Responsable
                    | : Todos&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; los funcionarios de la entidad que manejen sistemas de informaci&oacute;n.
                td(width='39')
                  p &nbsp;
                td(width='50')
                  p &nbsp;
                td(width='88')
                  p &nbsp;
              tr
                td(width='44')
                  p 8
                td(width='175')
                  p Mantener los sistemas operativos, antivirus y aplicaciones.
                td(width='173')
                  p Sistemas operativos de equipos de c&oacute;mputo, antivirus y aplicaciones.
                td(width='199')
                  p
                    | Entrega de una actualizaci&oacute;n cada vez que salga una nueva versi&oacute;n de las&nbsp;&nbsp;&nbsp; aplicaciones. Configuraci&oacute;n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; de actualizaciones autom&aacute;ticas en los sistemas operativos.
                  p &nbsp;
                  p
                    strong Responsable
                    | : Ingeniero&nbsp;&nbsp;&nbsp;&nbsp; de sistemas.
                td(width='39')
                  p &nbsp;
                td(width='50')
                  p &nbsp;
                td(width='88')
                  p &nbsp;
              tr
                td(width='44')
                  p 9
                td(width='175')
                  p
                    | Mantener los equipos en condiciones ambientales &oacute;ptimas de tal forma que no se deterioren por uso inadecuado.
                td(width='173')
                  p Equipos de computaci&oacute;n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; y comunicaci&oacute;n.
                td(width='199')
                  p
                    | Contrato de mantenimiento preventivo y correctivo vigente para los equipos de c&oacute;mputo.
                  p &nbsp;
                  p
                    strong Responsable
                    | : Servicios generales, responsable de los contratos de mantenimiento de la entidad.
                td(width='39')
                  p &nbsp;
                td(width='50')
                  p &nbsp;
                td(width='88')
                  p &nbsp;
              tr
                td(width='44')
                  p 10
                td(width='175')
                  p
                    | Mantener como respaldo un inventario adicional con equipos de c&oacute;mputo, repuestos y consumibles, para su reemplazo inmediato en caso de falla.
                td(width='173')
                  p Equipos de computaci&oacute;n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; y comunicaci&oacute;n de la entidad.
                td(width='199')
                  p
                    | Reducci&oacute;n&nbsp;&nbsp; del&nbsp;&nbsp;&nbsp;&nbsp; tiempo&nbsp;&nbsp;&nbsp;&nbsp; de respuesta a fallas de hardware y sistemas de&nbsp;&nbsp;&nbsp; informaci&oacute;n.
                  p &nbsp;
                  p
                    strong Responsable
                    | : Responsable de servicios generales de la entidad
                td(width='39')
                  p &nbsp;
                td(width='50')
                  p &nbsp;
                td(width='88')
                  p &nbsp;
              tr
                td(width='44')
                  p 11
                td(width='175')
                  p
                    | Disponibilidad de recursos para evitar la interrupci&oacute;n de la prestaci&oacute;n del servicio en los sistemas de informaci&oacute;n de la entidad.
                td(width='173')
                  p
                    | Concepto n+1:UPS,&nbsp;&nbsp;&nbsp; planta el&eacute;ctrica, almacenamiento, conexiones,&nbsp; l&iacute;neas, equipos de c&oacute;mputo adicional y servidores con ambiente de prueba.
                td(width='199')
                  p
                    | Evitar la suspensi&oacute;n del servicio a los usuarios teniendo una alternativa adicional, contratando servicio de hosting en data center que garantice la disponibilidad.
                  p
                    strong Responsable
                    | : Ingeniero&nbsp;&nbsp;&nbsp;&nbsp; de sistemas.
                td(width='39')
                  p &nbsp;
                td(width='50')
                  p &nbsp;
                td(width='88')
                  p &nbsp;




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
