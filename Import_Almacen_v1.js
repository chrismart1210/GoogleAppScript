// BackUper_v1
  // Esta version es el bot BackUper mas simple

function BackUper__Sheet()
{
  // INPUT's //
  var Sheet_origen = Sheet_externa;
  var Sheet_destino = Sheet_interna;  

  // Obtener los valores de todo el rango de datos
    var data = Sheet_origen.getDataRange().getValues();

  // Pegar los valores en la hoja de destino
    Sheet_destino.getRange(1, 1, data.length, data[0].length).setValues(data);

  // Agregar estampa de tiempo en el formato deseado
    var fechaActual = new Date();
    var estampaTiempo = Utilities.formatDate(fechaActual, "GMT-3", "dd/MM - HH:mm");

  // Instancia la variable celda como Sheet_destino.getRange(1, 1)
    var celda = Sheet_destino.getRange(1, 1);

  // Actualiza el valor de la celda con la estampa de tiempo
    celda.setValue(estampaTiempo);

  // Cambia el formato de la celda (1, 1) a fondo negro, texto verde fosforescente y negrita
    celda.setBackground("black"); // Cambia el fondo a negro
    celda.setFontColor("#00FF00"); // Cambia el color del texto a verde fosforescente (código hexadecimal)
    celda.setFontWeight("bold"); // Establece el texto en negrita
}
