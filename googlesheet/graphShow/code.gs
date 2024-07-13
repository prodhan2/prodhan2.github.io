function doGet() {
  return ContentService.createTextOutput(JSON.stringify(getStudentData()))
      .setMimeType(ContentService.MimeType.JSON);
}

function getStudentData() {
  var sheet = SpreadsheetApp.openById('1wJ8RQekZzpI4P0VQdEwEfLj29kiX3K6lDLETZ4HJAvw').getSheetByName('data');
  var data = sheet.getDataRange().getValues();
  
  var headers = data[0];
  var studentData = [];
  
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var student = {};
    for (var j = 0; j < row.length; j++) {
      student[headers[j]] = row[j];
    }
    studentData.push(student);
  }
  
  return studentData;
}
