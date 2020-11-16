const path = require('path');
const fs = require('fs');

const markdownPdf = require('markdown-pdf');

// markdownPdf()
//   .from('./content/pages/about.md')
//   .to('./about.pdf', function () {
//     console.log('done');
//   });

fs.createReadStream(path.join(__dirname, './content/pages/about.md'))
  .pipe(markdownPdf())
  .pipe(fs.createWriteStream(path.join(__dirname, './content/pages/about.pdf')));
