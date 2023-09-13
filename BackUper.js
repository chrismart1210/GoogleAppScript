function ActualizarEtapaEnIGMaster()
{
  // INPUTs
    var hojaOrigen = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Export IG2");
    var hojaDestino = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("IG Master fake");
      var keyer_rango = "AJ:AJ";


  // T
    // Instanciando los datos a minar y luego exportar
      var datosExportIG2 = hojaOrigen.getRange("A:A").getValues();

    // Iterando por cada fila ...
      for (var i = 0; i < datosExportIG2.length; i++)
      {
        // Instanciamos el cliente
        var cliente = datosExportIG2[i][0];

        // Buscamos al cliente en la columna AJ de 'IG Master fake'
        var filaCliente = buscarClienteEnMaster(cliente, hojaDestino,keyer_rango);

        // Si el cliente existe en el Keyer 
        if (filaCliente !== -1)
        {
          // Leemos su Etapa ...
          var etapa = hojaDestino.getRange(filaCliente, 9).getValue(); // Columna I (9)

          // Y si se encuentra en EJECUCION ... que ejecute el scrip
          if (etapa === '9 EJECUCIÓN DE OBRA')
          {
            // OUTPUT 
              hojaDestino.getRange(filaCliente, 9).setValue('10 TERMINACIONES'); // Columna AJ (36)
          }
        }
        else
        {
          Browser.msgBox("No se encontró en IG Master el cliente: " + cliente)
        }
      }
}



function buscarClienteEnMaster(cliente, hoja, keyer_rango)
{
  var datos = hoja.getRange(keyer_rango).getValues();
  for (var i = 0; i < datos.length; i++)
  {
    if (datos[i][0] === cliente)
    {
      return i + 1; // Devuelve el número de fila (sumamos 1 para ajustar el índice)
    }
  }
  return -1; // Cliente no encontrado
}
