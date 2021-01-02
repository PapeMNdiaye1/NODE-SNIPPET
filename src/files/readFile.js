import fs from 'fs'

const readAFile = () => { /* we can pase params to this func before exporting him  */
  fs.readFile('message.txt', 'utf8', (err, data) => {
    if (err)
      console.log(err);
    else
      console.log(data);
  });
}
export { readAFile }