// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selector';
import { getFilter } from 'redux/filter/filter-selector';
import { deleteContacts } from 'redux/contacts/contactsSlice';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterItem = useSelector(getFilter);
  const dispatch = useDispatch();

  const renderContacts = () => {
    return contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(filterItem.trim().toLowerCase());
    });
  };
  const list = renderContacts();

  return (
    <>
      <ul className={css.list}>
        {list.map(({ id, number, name }) => {
          return (
            <li className={css.item} key={id}>
              {name}: {number}
              <button
                className={css.delete}
                onClick={() => {
                  dispatch(deleteContacts({ id, number, name }));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

// ContactList.propTypes = {
//   deleteUser: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ),
// };
