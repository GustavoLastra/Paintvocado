// JavaScript Document
// -- MATRIX Größe verändern -- //
// - Zeile hinzufügen
function addRow(tableID){
	var tCols = '#' + tableID + ' tr:last td';
	var ColCount = $(tCols).length
	
	var trLast = '#' + tableID + ' tbody:last-child';
	$(trLast).append('<tr>');
	trNew = '#' + tableID + ' tr:last';
	
	while(ColCount > 0){
		$(trNew).append('<td><input type="number" value="0"></td>');
		ColCount--;
	}
}
// - Zeile löschen
function deleteRow(tableID){		
	var tRows = '#' + tableID + ' tr';
	var trLast = '#' + tableID + ' tr:last';
	
	if($(tRows).length > 1){
		 $(trLast).remove();
	}
}
// - Spalte hinzufügen
function addColumn(tableID){
	var tdLast = '#' + tableID + ' td:last-child';
	$(tdLast).after('<td><input type="number" value="0"></td>');
}
// - Spalte löschen
function deleteColumn(tableID){
	var tdLast = '#' + tableID + ' td:last-child';
	var tCols = '#' + tableID + ' tr:last td';
	
	if($(tCols).length > 1){
		 $(tdLast).remove();
	}
}

// -- Matrix Multiplikation -- //
// Daten aus der Tabelle holen und in Matrix speichern
function getTableValues(tableID){
	var tArray = new Array();
	var tInput = '#' + tableID + ' tr :input[type=number]';
	
	$(tInput).each(function(){
		var val = $(this).val();
		tArray.push(parseFloat(val));
	});

	// Daten des Arrays in Matrixform schreiben
	var mTable = 'table#' + tableID;
	var matrix = new Array();
	
	var rows = $(mTable).find('tbody').find('tr');
	var cols = $(mTable).find('tbody').find('tr:first').find('td');	
	var idx = 0;
	
	for (var i = 0; i < rows.length; i++) {
		var row = new Array();
		for (var j = 0; j < cols.length; j++){	
			row.push(tArray[idx]);
			
			idx++;				
		}	
		matrix.push(row);			
	}
	
	return matrix;
}
// Multiplikation von Matrix A und Matrix B
function multiplyMatrices(matrixA, matrixB){
	// Überprüfen ob Multiplikation mit den eingegenbene Matrizen möglich	
	var NumColsA = matrixA[0].length;
	var NumRowsB = matrixB.length;
				
	if (NumColsA == NumRowsB){
		// Wenn Regel erfüllt Multiplikation berechnen		
		// Berechnung nach Falkschem Schema
		
		var ErgMatrix = new Array();
		var NumRowsA = matrixA.length;
		var NumColsB = matrixB[0].length;
		var rA = 0;
		
		while(rA < NumRowsA){
			var result = new Array();	
			for(var c = 0; c < NumColsB; c++){
				
				var sum = 0;
				for(var r = 0; r < NumRowsB; r++){	
						sum = sum + (matrixA[rA][r] * matrixB[r][c]);								
						}
				result.push(sum);
				}
			ErgMatrix.push(result);
			rA++;
			}
			
		return ErgMatrix;
		}
	else{
		// Wenn Regel nicht erfüllt Fehlermeldung ausgeben
		alert('Multiplikation nicht möglich! Spaltenanzahl von Matrix A muss Zeilenanzahl von Matrix B entsprechen!');
		}
	}
// Speichern der Ergebnismatrix in Tabelle	
function setTableValues(ErgMatrix){
	var NumColsErgMatrix = ErgMatrix[0].length;
	var NumRowsErgMatrix = ErgMatrix.length;
	var NumRowsTable = $('table#tErgMatrix').find('tbody').find('tr');
	var NumColsTable = $('table#tErgMatrix').find('tbody').find('tr:first').find('td');	
	
	// - Tabelle für Ergebnismatrix anpassen
	// Spaltenanzahl anpassen
	while(NumColsErgMatrix != NumColsTable.length){				
		if(NumColsErgMatrix > NumColsTable.length){
			// Spalten der Tabelle einfügen
			$('#tErgMatrix td:last-child').after('<td></td>');
		}else{
			// Spalten der Tabelle löschen
			deleteColumn('tErgMatrix');
		}
		
		var NumColsTable = $('table#tErgMatrix').find('tbody').find('tr:first').find('td');	
	}
	// Zeilenanzahl anpassen
	while(NumRowsErgMatrix != NumRowsTable.length){				
		if(NumRowsErgMatrix > NumRowsTable.length){
			// Spalten der Tabelle einfügen
			var ColCount = $('#tErgMatrix tr:last td').length
			$('#tErgMatrix tbody:last-child').append('<tr>');
			
			while(ColCount > 0){
				$('#tErgMatrix tr:last').append('<td></td>');
				ColCount--;
			}
		}else{
			// Spalten der Tabelle löschen
			deleteRow('tErgMatrix');
		}
		
		var NumRowsTable = $('table#tErgMatrix').find('tbody').find('tr');
	}
	
	// - Werte in Tabelle eintragen
	for (var i = 0; i < NumRowsTable.length; i++) {
		for (var j = 0; j < NumColsTable.length; j++){
			
			var cells = $(NumRowsTable[i]).find('td').eq(j).html(ErgMatrix[i][j]);				
		}
	}
}

function getMultiplicationResult(){
	// Daten aus Tabellen auslesen und in Matrix A und B speichern
	matrixA = getTableValues('tMatrixA');
	matrixB = getTableValues('tMatrixB');
	
	// Berechnung der Multiplikation nach Falkschem Schema
	ErgMatrix = multiplyMatrices(matrixA, matrixB);

	// Speichern der Ergebnismatrix in Tabelle
	setTableValues(ErgMatrix);
}