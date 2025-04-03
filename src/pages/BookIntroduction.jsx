import { useParams } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import bookItem from '../json/books.json';
import BookDetail from '../components/BookDetail';


export default function BookIntroduction() {
    const { id } = useParams();
    const book = bookItem.find((item) => item.ID === parseInt(id));
    return (
        <div className="container mx-auto main-layout">
            <Header
                title="Book Store"
                slogan=""
            />
            <BookDetail book={book}/>
            <Footer />
        </div>
    )
}