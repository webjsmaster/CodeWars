class PaginationHelper {
    constructor(elements, elementsPage) {
        this.element = elements;
        this.elementsPage = elementsPage;
    }

    pageCount() {
        return Math.ceil(this.element.length / this.elementsPage);
    }

    itemCount() {
        return this.element.length;
    }

    pageItemCount(pageIndex) {
        if (0 > pageIndex || pageIndex >= this.pageCount()) {
            return -1;
        };


        if (this.itemCount() - (this.elementsPage * pageIndex) >= this.elementsPage ) {
            return this.elementsPage;
        } else {
            return (this.itemCount() - (this.elementsPage * pageIndex)) % this.elementsPage;
        }
    }

    pageIndex(itemIndex) {
        if (itemIndex < 0 || itemIndex >= this.itemCount()) {
            return -1
        }

        if (itemIndex === 0 ){
            return 0
        } else if ((itemIndex) % this.elementsPage === 0) {
            return itemIndex / this.elementsPage - 1
        } else {
            return Math.ceil((itemIndex) / this.elementsPage) - 1 
        }
    }
}










var helper = new PaginationHelper([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 8);

console.log('📢 [paginationHelper.js:18]', helper.pageCount());
console.log('📢 [paginationHelper.js:18]', helper.itemCount());
console.log('📢 [10]', helper.pageItemCount(10));
console.log('📢 [4]', helper.pageItemCount(2));
console.log('📢 [paginationHelper.js:18]', helper.pageItemCount(-1));
console.log('👱', helper.pageIndex(9));