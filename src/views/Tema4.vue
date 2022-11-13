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

    .row.mt-5
      .col-10.offset-1  
        .tabla-a.color-acento-contenido.mb-5 
          table
            caption.mt-3 <b>Nota.</b> Tomado de plan de contingencia y políticas de seguridad de sistemas de información -Copnia- (2012).
            thead
              tr
                th RIESGO FACTOR
                th TIPO DE RIESGO
                th PREVENCIÓN Y MITIGACIÓN
            tbody.text-center
              tr
                td Fuego: destrucción de equipos y archivos
                td.color-texto Bajo
                td Extintores, aspersores automáticos, detectores de humo, pólizas de seguros
              tr
                td Robo común: pérdida de equipos y archivos
                td.color-texto-segundo Medio
                td Seguridad privada, alarma, seguro contra todo riesgo y copias de respaldo (<i>BackUp</i>)
              tr
                td Vandalismo: daño a los equipos y archivos
                td.color-texto-segundo Medio
                td Seguro contra todo riesgo, copias de respaldo.
              tr
                td Fallas en los equipos: daño a los archivos.
                td.color-texto Bajo
                td Mantenimiento, equipos de respaldo, garantía y copias de respaldo. 
              tr
                td Equivocaciones: daño a los archivos
                td.color-texto-segundo Medio
                td Capacitación, copias de respaldo, políticas de seguridad.
              tr
                td Virus: daño a equipos y archivos
                td.color-texto-segundo Medio
                td Actualizaciones del sistema operativo, antivirus actualizados, copias de respaldo.
              tr
                td Terremotos: destrucción de equipo y archivos
                td.color-texto-segundo Medio
                td Seguro contra todo riesgo, copias de respaldo, cumpliendo de las normas antisísmicas en las sedes.
              tr
                td Accesos no autorizados: filtrado no autorizado de datos
                td.color-texto Bajo
                td Cambio de claves de acceso cada seis meses,  política de seguridad para acceso a personal competente.
              tr
                td Robo de datos: difusión de datos sin el debido cubrimiento de su costo
                td.color-texto Bajo
                td Cambio de claves de acceso cada seis meses, custodia de las copias de respaldo.
              tr
                td Fraude: modificación y/o desvío de la información y fondos de la institución
                td.color-texto Bajo
                td Sistemas de información seguros con dos usuarios para autorizar transacciones, procedimiento de control y registro de transacciones en tablas de auditoría.

    .row.justify-content-around.align-items-center.mb-5
      .col-lg-1.mb-4
        figure(data-aos='fade-right')
          img(src='@/assets/curso/temas/T4/img-6.svg', alt='')
                    
      .col-lg-11.mb-5
        p.mb-2 Asimismo, existen los planes de respaldo, que consisten en documentar las acciones realizadas durante un determinado tiempo con el objeto de prever, mitigar o eliminar los riesgos de perdida de la información en los sistemas gestores de bases de datos. En la siguiente tabla se presenta un formato de plan de resguardo que puede ser aplicado en cualquier organización:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 2.
      span Formato de Plan de Respaldo


    .row.mt-5
      .col-10.offset-1  
        .tabla-a.color-acento-contenido.mb-5 
          table
            caption.mt-3 <b>Nota.</b> Tomado de plan de contingencia y políticas de seguridad de sistemas de información 2012, (Copnia).
            thead
              tr
                th No.
                th Actividad
                th Elementos
                th Resultados 
                th Realizado
                th Fecha
            tbody
              tr
                td 1
                td Realizar copias de    seguridad de la información y documentos residentes en los discos duros de los computadores.
                td Documentos en formatos Word, Excel, PDF, artes,   imágenes, audio y correos electrónicos, una  copia  de  seguridad  en  la nube, una copia de  seguridad anual obligatoria de todos los documentos.
                td Copia de seguridad en la nube en línea o una copia de seguridad anual de todos los datos. <br><br> <b>Responsable:</b> Oficina de Sistemas de información y de las comunicaciones de la empresa.
                td
                td
              tr
                td 2
                td Realizar copias de seguridad de los sistemas de información y bases de datos.
                td Aplicaciones web e intranet de información, aplicaciones y bases de datos de los procesos y archivos, registro nacional de profesionales.
                td Copia de seguridad semanal del sistema de información activo. Los   servicios de <i>hosting</i> en <i>datacenter</i> contratados incluirán el <i>backup</i> para las aplicaciones <br><br> <b>Responsable:</b> Ingeniero   de sistemas. 
                td
                td 
              tr
                td 3
                td Contar mínimo con un kit de instalación para restaurar los archivos del sistema operativo y aplicaciones de un computador o servidor en caso de falla o virus.
                td Sistema operativo (Windows, Linux, etc.), paquetes de ofimática y diseño. (Office, Corel), bases de datos(Sql, MySql, FoxPro, etc.), drivers y utilitarios de impresoras, redes, computadores, etc.
                td Contar con mínimo un medio de instalación por cada oficina. Una copia u original del instalador custodia de sistemas. <br><br> <b>Responsable:</b> Ingeniero de sistemas y secretarios seccionales.
                td
                td
              tr
                td 4
                td Mantener descentralizados los sistemas de información, de acuerdo a sus necesidades.
                td Sitio web, base de datos, aplicaciones fuera de línea en seccionales.
                td Aplicaciones instaladas en diferentes localizaciones físicas, computadores o servidores. <br><br> <b>Responsable:</b> Ingeniero de sistemas.
                td
                td  
              tr
                td 5
                td Mantener pólizas de seguros vigentes, asegurando contra todo riesgo los equipos y bienes por su valor real.
                td Equipos eléctricos y/o electrónicos, móviles, portátiles, software y equipos de comunicación.
                td Póliza vigente contra todo riesgo de daño y/o pérdida física por cualquier causa. <br><br> <b>Responsable:</b> Profesional de gestión administrativa.
                td
                td 
              tr
                td 6
                td Mantenimientos, revisiones preventivas y correctivas de equipos de computación y comunicación, extintores, alarmas y sistemas contra incendio, para mantenerlos en óptimas condiciones.
                td Equipos de computación y comunicación periféricos, sistemas eléctricos UPS, aires acondicionados, alarmas, sistemas contra incendio, extintores, reglamento del edificio.
                td Contratos anuales de mantenimiento, garantías vigentes y control del mantenimiento de los equipos. <br><br> <b>Responsable:</b> Profesional de gestión administrativa y/o supervisor asignado al contrato de mantenimiento.
                td
                td 
              tr
                td 7
                td Actualizar las claves o contraseñade acceso a las aplicaciones y bases de datos del COPNIA.
                td Base de datos, y sistemas de información del COPNIA.
                td Mínimo cada seis meses o cuando se requiera por el usuario o por reemplazos del cargo. <br><br> <b>Responsable:</b> Todos los funcionarios de la entidad que manejen sistemas de información.
                td
                td 
              tr
                td 8
                td Mantener los sistemas operativos, antivirus y aplicaciones.
                td Sistemas operativos de equipos de cómputo, antivirus y aplicaciones.
                td Entrega de una actualización cada vez que salga una nueva versión de las aplicaciones. Configuración de actualizaciones automáticas en los sistemas operativos. <br><br> <b>Responsable:</b> : Ingeniero de sistemas.
                td
                td  
              tr
                td 9
                td Mantener los equipos en condiciones ambientales óptimas de tal forma que no se deterioren por uso inadecuado.
                td Equipos de computación y comunicación.
                td Contrato de mantenimiento preventivo y correctivo vigente para los equipos de cómputo. <br><br> <b>Responsable:</b> Servicios generales, responsable de los contratos de mantenimiento.
                td
                td  
              tr
                td 10
                td Mantener como respaldo un inventario adicional con equipos de cómputo, repuestos y consumibles, para su reemplazo inmediato en caso de falla.
                td Equipos de computación y comunicación de la entidad.
                td Reducción del tiempo de respuesta a fallas de hardware y sistemas de información. <br><br> <b>Responsable:</b>  Responsable de servicios generales de la entidad
                td
                td
              tr
                td 11
                td Disponibilidad de recursos para evitar la interrupción de la prestación del servicio en los sistemas de información de la entidad.
                td Concepto n+1:UPS, planta eléctrica, almacenamiento, conexiones,  líneas, equipos de cómputo adicional y servidores con ambiente de prueba.
                td Evitar la suspensión del servicio a los usuarios teniendo una alternativa adicional, contratando servicio de hosting en data center que garantice la disponibilidad. <br><br> <b>Responsable:</b> Ingeniero de sistemas.
                td
                td  


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
