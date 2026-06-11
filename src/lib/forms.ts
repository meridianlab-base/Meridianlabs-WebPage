// Google Apps Script Web App endpoint that writes form submissions to the
// shared Google Sheet. Deploy google-apps-script.gs as a Web App and paste
// its /exec URL below. See google-apps-script.gs for setup steps.
export const SHEET_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbz7HmA2l6t6Kx3qojtdBPrPvFMvrjt2F1ScEF97NjZ6mlOk7UZOANjnBPchN24nbPw8xQ/exec";

// POST form fields to the sheet. Uses no-cors so it works from the static
// GitHub Pages origin without the Apps Script returning CORS headers.
export async function submitToSheet(data: Record<string, string>) {
  const body = new URLSearchParams(data);
  await fetch(SHEET_ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
}
