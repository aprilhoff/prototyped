
// add api key and spreadsheet ID
// make sure google sheets API is enabled
// https://support.google.com/googleapi/answer/6158862?hl=en

var API_KEY = 'AIzaSyD8a25ys6Fs1Fz7X4W6udbi60YDlUk7-NQ';
var SPREADSHEET_ID = '1mo5lb67mKoRIM3DZ5sEaZrR5428zaJj50KeC2JNHquY';
var SHEET_NAME = 'Form Responses 1';


// get spreadsheet data... dont edit any of this

var response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${ SPREADSHEET_ID }/values/${ SHEET_NAME }?alt=json&key=${ API_KEY }`);
var data = await response.json();
var [header, ...rows] = data.values;
var entries = rows.map(row => Object.fromEntries(header.map((key, i) => [key.toLowerCase(), row[i] || ""])));


// log entries to the console

console.log(entries);

const entriesContainer = document.getElementById("entriesContainer");

// add entries to the page

entries.forEach((entry) =>{

    // log entry to the console
    console.log(entry)

    // add entries to container 
    entriesContainer.innerHTML += `
    <li class="entry">
      <p class="entry-comment">${entry.name}</p>
      <p class="entry-comment">${entry.thoughts}</p>
      <p class="entry-comment">${entry.timestamp}</p>
    </li>
  `;
}); 