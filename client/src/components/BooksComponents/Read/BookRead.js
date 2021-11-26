const BookRead = ({
    book
}) => {
    return (
        <div>
            <h4>{book.name}</h4>
            <h4>{book.author}</h4>
            <h4>{book.year}</h4>
            <h4>{book.genre}</h4>
        </div>
    );
};

export default BookRead;