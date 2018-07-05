   function deleteRow(row){
      var d = row.parentNode.parentNode.rowIndex;
      document.getElementById('sTable').deleteRow(d);
   }
    function add(){
		var html = '';
		html+="<tr>";
		html += "<td>" + "<input style="+ '"border:none"' + "type="+ '"text"'+  "class="+'"form-control"'+ "id="+'"fEvent"' + "placeholder="+ '"First name"'+ ">" + "</td>";
		html += "<td>" + "<input style="+ '"border:none"' + "type="+ '"text"'+  "class="+'"form-control"'+ "id="+'"fEvent"' + "placeholder="+ '"Last name"'+ ">" + "</td>";
		html += "<td>" + "<input style="+ '"border:none"' + "type="+ '"text"'+  "class="+'"form-control"'+ "id="+'"fEvent"' + "placeholder="+ '"Middle name"'+ ">" + "</td>";
		html += "<td>" + "<input style="+ '"border:none"' + "type="+ '"text"'+  "class="+'"form-control"'+ "id="+'"fEvent"' + "placeholder="+ '"Email"'+ ">" + "</td>";
		html +="<td> <input type="+'"button"'+ "id ="+'"deleteDep"'+ "value="+'"Delete"'+ "onclick ="+' "deleteRow(this)"'+  "</td>";
		html+="</tr>";
	  	$("#sTable").append(html);
	}
	  
	/*  
	    var data = ["a", "bunch", "of", "things", "to", "insert"];
		var html = '';
for (var i=0; i < 7; i++) {
  html += "<td>" + data + "</td>";
}
	$("#sTable").append(html);*/
	
	

   
