const books = []
class Book {
    constructor(code, title, publisher, publicationYear, author) {
        this.code = code;
        this.title = title;
        this.publisher = publisher;
        this.publicationYear = publicationYear;
        this.author = author
    }
}

class InventoryService {

    add(book) {
        if (book.code && book.title && book.publisher && book.publicationYear && book.author) {
            books.push(JSON.stringify(book))
            console.log('buku berhasil ditambahkan');
            return books;
        }
        return new Response(null, 'data tidak diisi dengan lengkap')
    }

    getAll() {
        if (books.length != 0) {
            console.log('semua data buku');
            return new Response(books, null);
        }
        return new Response(null, 'data kosong');
    }

    searchByTitle(title) {
        console.log('data pencarian ');
        if (books.title == title) {
            const search =  books.filter((val) => val.title === title)
            return new Response(search,null)
        }
        return new Response(null,'data tidak ada');
    }
}

class Response {
    constructor(data, error) {
        this.data = data;
        this.error = error;
    }
    toString() {
        return `data ${this.data} ${this.error}`
    }
}

function main() {
    const inventoryService = new InventoryService();
    const bookData = inventoryService.add(new Book("M001", "Boba", "Gramedoi", 2012,'doni'));
    console.log(bookData.toString());
    const bookData2 = inventoryService.add(new Book("M002", "Bobo", "Gramedoi", 2012, 'doni'));
    console.log(bookData2.toString());
    //===================================================================//
    const books = inventoryService.getAll();
    console.log(books.toString());
    //===================================================================//
    const search = inventoryService.searchByTitle("Boba");
    console.log(search.toString());
}

main()