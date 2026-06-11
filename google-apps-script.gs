/**
 * Meridian Labs — Form -> Google Sheet endpoint
 *
 * SETUP
 * 1. Open the target Sheet:
 *    https://docs.google.com/spreadsheets/d/1l5sg7fgzKROuIpnyncdDniVGwL5srVe1eJzzYYApNMQ/edit
 * 2. Extensions -> Apps Script. Delete any boilerplate, paste this whole file.
 * 3. Save. Then Deploy -> New deployment -> type "Web app".
 *      - Execute as: Me
 *      - Who has access: Anyone
 * 4. Authorize when prompted. Copy the "/exec" Web app URL.
 * 5. Give that URL to wire into the site (SHEET_ENDPOINT in src/lib/forms.ts).
 *
 * One sheet receives both forms. Rows are appended; first row is headers.
 * "formType" tells the two forms apart (contact vs newsletter).
 */

var SHEET_NAME = "Submissions";
var HEADERS = [
  "timestamp",
  "formType",
  "name",
  "email",
  "company",
  "projectType",
  "message",
];

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
    }
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
    }

    var p = (e && e.parameter) || {};
    var row = HEADERS.map(function (key) {
      if (key === "timestamp") return new Date();
      return p[key] || "";
    });
    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput("Meridian Labs form endpoint is live.")
    .setMimeType(ContentService.MimeType.TEXT);
}
