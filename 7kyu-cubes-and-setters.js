class Cube {
    constructor(length) {
        this.length = length;
    }

    /**
     * @param {string} volume;
     */
    set volume(volume) {
        this.length = Math.cbrt(volume);
    }

    /**
     * @param {number} param
     */
    set surfaceArea(param){
        this.length = Math.sqrt(param / 6);
    }

    get volume() {
        return Math.pow(this.length, 3);
    }

    get surfaceArea() {
        return Math.pow(this.length, 2) * 6;
    }
}