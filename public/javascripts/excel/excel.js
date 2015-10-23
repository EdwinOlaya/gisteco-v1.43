function toExcel(captions,json,sheetName){
    var archivoExporta, hojaExcel;
    archivoExporta = {
        worksheets: [[]],
        creator: "Vanner",
        created: new Date(),
        lastModifiedBy: "Vanner",
        modified: new Date(),
        activeWorksheet: 0
    };

    hojaExcel = archivoExporta.worksheets[0];
    //set the name of the sheet
    hojaExcel.name = sheetName;

   
    //find out the numbers of rows and columns
    var cols = captions.length;
    var rows = json.length;                
    
    //building the headers
    var headers_array = [];
    for (var i = 0; i < cols; i++ ){      
        headers_array.push(captions[i].nombre);        
    }
    hojaExcel.push(headers_array);                

    //attach every row to the hojaExcel object
    var dato;

    for( var i = 0; i < rows; i++){
        var new_row = [];
        for(var j = 0; j < cols; j++){

            dato = json[i][captions[j].id];
            if(!dato)   dato = "";
            new_row.push(dato);     

        }
        hojaExcel.push(new_row);
    }               
                
    return window.location = xlsx(archivoExporta).href();
}