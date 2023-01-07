import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import '../index.css';

export const App = () => {
  return (
    <div className="main-wrapper">
      <h1 className="phonebook">Phonebook</h1>
      <ContactForm />

      <h2 className="contacts">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
