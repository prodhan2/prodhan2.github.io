function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
      .setTitle('Dinajpur.RU Student Data Search')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getData() {
  var sheet = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1wJ8RQekZzpI4P0VQdEwEfLj29kiX3K6lDLETZ4HJAvw/edit?usp=sharing');
  var data = sheet.getSheetByName('data').getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).getValues();
  return data;
}

function getDetailedInfo(name, department, session) {
  var sheet = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1wJ8RQekZzpI4P0VQdEwEfLj29kiX3K6lDLETZ4HJAvw/edit?usp=sharing');
  var data = sheet.getSheetByName('data').getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).getValues();

  var detailedInfo = {};
  for (var i = 0; i < data.length; i++) {
    if (data[i][0] === name && data[i][6] === department && data[i][8] === session) {
      detailedInfo = {
        name: data[i][0],
        image: data[i][1],
        blood: data[i][2],
        upazila: data[i][3],
        college: data[i][4],
        school: data[i][5],
        department: data[i][6],
        email: data[i][7],
        session: data[i][8],
        phone: data[i][9],
        hall: data[i][10]
      };
      break;
    }
  }

  return detailedInfo;
}
