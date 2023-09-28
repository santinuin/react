
import PropTypes from 'prop-types';
import { Title } from './components/Title';
import { UserDetails } from './components/UserDetails';
import { Book } from './components/Book';

export const HelloWorldApp = ({ user, id, title, book }) => {

    console.log(title);
    // const name = 'Pepe';

    return (
        <>
            <Title title={title} />
            <UserDetails user={user} id={id} />
            <Book book={book}/>
        </>);
}

HelloWorldApp.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired
}

HelloWorldApp.defaultProps = {
    title: 'Hola Mundo por defecto',
    book: 'UML'
}