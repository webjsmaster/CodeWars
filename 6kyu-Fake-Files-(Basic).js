class File {
    constructor(fullName, contents) {
        this._fullName = fullName;
        this._contents = contents;

        const fullNameArray = fullName.split('.');
        this._fileName = fullNameArray.filter((_,index, arr) => index !== arr.length - 1).join('.');
        this._extension = fullNameArray.pop();

        this._currentLine = 0;
        this._currentChar = 0;
    }

    getContents() {
        return this._contents;
    }

    write(str){
        this._contents = `${this._contents.length ? this._contents+'\n':''}${str}`;
    }

    gets() {
        const res = this._contents.split('\n')[this._currentLine];
        this._currentLine++;
        return res;
    }

    getc() {
        const res = this._contents[this._currentChar];
        this._currentChar++;
        return res;
    }

    get fullName () {
        return this._fullName;
    }

    get filename () {
        return this._fileName;
    }

    get extension () {
        return this._extension;
    }
}



var myFile = new File("example.txt", "");
console.log(myFile.filename); // ""
myFile.write("Line 1");
console.log(myFile.getContents()); // "Line 1"
myFile.write("Line 2");
console.log(myFile.getContents()); // "Line 1\nLine 2"
myFile.write("Line 3");
console.log(myFile.getContents()); // "Line 1\nLine 2\nLine 3"