// Desafio JS - Eng. de Software 22.1

class Book {
    constructor(title, description, author) {
        this._title = title;
        this._description = description;
        this._author = author;
        this._id = Math.random().toString().slice(2,5);
    }

};

class Library {
    constructor(books = []) {
        this._books = books;
    }

    addBook(bookInfo) {
        this._books.push(bookInfo);
    }

    get id(){
        return this._books.id;
    }
    

    getBooks() {
        return console.log(this._books);
    }

    removeBookById(id){
        let listaLivros = this._books;
        for(let idx = 0; idx < listaLivros.length; idx++){
            if(listaLivros[idx].id === id){
                var livroRemovido = idx
            }
        }
        this._books.splice(livroRemovido,1)
    }

    getBookById(id){
        let listaLivros = this._books;
        for(let idx = 0; idx < listaLivros.length; idx++){
            if(listaLivros[idx].id === id){
                var livro = listaLivros[idx];
            }
        }
        console.log(livro)
    }
    
    updateBookById(id, title, description, author){
        let listaLivros = this._books;
        for(let idx = 0; idx < listaLivros.length; idx++){
            if(listaLivros[idx].id === id){
                var livroUpdated = idx
            }
        }
        
    }      
};


let livro1 = new Book("Em Chamas", "2º liro da trilogia Jogos Vorazes", "Suzanne Collins");
console.log(livro1);
let livro2 = new Book("Jogos Vorazes", "1º livro da trilofia Jogos Vorazes", "Suzanne Collins");
console.log(livro2);

let livros = [livro1, livro2];
let ccen = new Library(livros);
console.log(ccen);

let livro3 = new Book("Esperança", "3º livro da trilogia Jogos Vorazes", "Suzanne Collins");
ccen.addBook(livro3)
console.log(ccen)

ccen.getBooks()
ccen.getBookById()
ccen.removeBookById()
ccen.getBooks()
