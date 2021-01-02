import fs from 'fs'

let WriteAFile = () => { /* we can pase params to this func before exporting him  */
    const text = "hello word";
    fs.writeFile('message.txt', text, 'utf8', (err) => {

        if (err)
            console.log(err);
        else
            console.log('The file has been saved!');
    });
}

export { WriteAFile }