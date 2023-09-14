function BackUper_v1__Sheet()
{
  // INPUT's
  var Sheet_origen = SpreadsheetApp.openById("1MhkBpaoeQJpyxoBLFC2H-zNlyY-QfRo9RvJM5NrdLRc").getSheetByName("Export GdO");
  var Sheet_destino = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Import Talon");

  // Obtener los valores de todo el rango de datos
  var data = Sheet_origen.getDataRange().getValues();

  // Pegar los valores en la hoja de destino
  Sheet_destino.getRange(1, 1, data.length, data[0].length).setValues(data);

  // Agregar estampa de tiempo en el formato deseado
  var fechaActual = new Date();
  var estampaTiempo = Utilities.formatDate(fechaActual, "GMT-3", "dd/MM - HH:mm");

  // Establecer el formato para la celda en la fila 1, columna 1
  var cell = Sheet_destino.getRange(1, 1);
  cell.setValue(estampaTiempo);
  cell.setBackground("black");
  cell.setFontColor("green");
  cell.setFontWeight("bold");
}
