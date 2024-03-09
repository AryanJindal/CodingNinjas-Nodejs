const fs = require("fs");

let fileStream = fs.createReadStream(__dirname + '/input.txt')

//process.stdout is a writeablle stream
let outputStream = process.stdout
// pipe created an pipeline b/w the both
//readableStream.pipe(writeStream);

// fileStream.pipe(outputStream);

//this will be used to create an layer b/w the read and write stream
const transformStream = require('stream');
let middleStream = new transformStream.Transform({
    // next is the next callback
    //enc is encoding
    //chunk is the chunik of the data we just read from the stream
    transform(chunk, enc, next){
        let modifiedChunk = chunk.toString().toUpperCase();
        //this is the pointer to the current object
        this.push(modifiedChunk);
        setTimeout(next, 1000);
    }
}) //middleStream is an object

let newReadableStream = fileStream.pipe(middleStream);
newReadableStream.pipe(outputStream);


 