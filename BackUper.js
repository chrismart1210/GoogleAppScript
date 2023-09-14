function BackUper_v1__Sheet()
{
  // INPUT's //
  var Sheet_origen = Sheet_Origen;
  var Sheet_destino = Sheet_Destino;
  
  // Obtener los valores de todo el rango de datos
    var data = Sheet_origen.getDataRange().getValues();

  // Pegar los valores en la hoja de destino
    Sheet_destino.getRange(1, 1, data.length, data[0].length).setValues(data);

  // Agregar estampa de tiempo en el formato deseado
    var fechaActual = new Date();
    var estampaTiempo = Utilities.formatDate(fechaActual, "GMT-3", "dd/MM - HH:mm");
    // OUTPUT
      Sheet_destino.getRange(1, 1).setValue(estampaTiempo);
}

// Rasse