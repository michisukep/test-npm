const myOriginalLib = (a, b) => {
    return console.log(a+b);
}

myOriginalLib(1,2);

module.exports = myOriginalLib;