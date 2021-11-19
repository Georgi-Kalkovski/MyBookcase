const BookRead = ({
    book
}) => {
    return (
        <div>
            <h4>{book.kind}</h4>
            <h4>{book.id}</h4>
            <h4>{book.name}</h4>
            <h4>{book.mimeType}</h4>
        </div>
    );
};

export default BookRead;