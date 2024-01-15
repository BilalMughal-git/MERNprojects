const fs = require('fs');
const http = require('http');

const port = 8000;
const filePath = 'abc.txt';
const bandswidth = 4000;

const server = http.createServer((req, res) => {
  const readStream = fs.createReadStream(filePath, 'utf8');

  const writeStreams = {
    GET: fs.createWriteStream('get.txt', { flags: 'a' }),
    PUT: fs.createWriteStream('put.txt', { flags: 'a' }),
    POST: fs.createWriteStream('post.txt', { flags: 'a' }),
  };

  let totalBytes = 0;
  let requestsAboveThreshold = 0;

  readStream.on('data', (chunk) => {
    const lines = chunk.split('\n');
    lines.forEach((line) => {
      const trimmedLine = line.trim();
      if (trimmedLine.startsWith('GET')) {
        writeStreams.GET.write(`${trimmedLine}\n`);
        trackBandwidth(trimmedLine);
      } else if (trimmedLine.startsWith('PUT')) {
        writeStreams.PUT.write(`${trimmedLine}\n`);
        trackBandwidth(trimmedLine);
      } else if (trimmedLine.startsWith('POST')) {
        writeStreams.POST.write(`${trimmedLine}\n`);
        trackBandwidth(trimmedLine);
      }
    });
  });

  const trackBandwidth = (line) => {
  const parts = line.split(' ');

  if (parts.length > 0) {
    const bytesString = parts[parts.length - 1];
    const bytes = parseInt(bytesString, 10);

    if (!isNaN(bytes)) {
      totalBytes += bytes;

      if (bytes > bandswidth) {
        requestsAboveThreshold++;
      }
    }
  }
};

  

  readStream.on('end', () => {
    console.log('Finished reading the file.');
    Object.values(writeStreams).forEach((stream) => stream.end());


    fs.writeFileSync('total_requests.txt', `${requestsAboveThreshold}\n`);
    fs.writeFileSync('total_bytes.txt', `${totalBytes}\n`);

    res.end();
  });

  readStream.on('error', (err) => {
    console.error(`Error reading the file: ${err.message}`);
    res.statusCode = 500;
    res.end(`Error reading the file: ${err.message}`);
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
