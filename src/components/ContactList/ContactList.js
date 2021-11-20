import ContactItem from 'components/ContactList/ContactItem';
import styles from 'components/ContactList/ContactList.module.css';
import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { useGetContactsQuery } from '../../redux/contactsApi';
import Loader from 'components/Loader/Loader';

export default function ContactList() {
  const { data = [], isLoading } = useGetContactsQuery();
  console.log(data);
  const filter = useSelector(getFilter);
  console.log(filter);

  return (
    <>
      {isLoading && <Loader />}
      {data && !isLoading && (
        <ul className={styles.contactList}>
          {data
            .filter(contact =>
              contact.name
                .toLocaleLowerCase()
                .includes(filter.toLocaleLowerCase()),
            )
            .map(contact => (
              <li key={contact.id} className={styles.contactListItem}>
                <ContactItem
                  id={contact.id}
                  name={contact.name}
                  number={contact.number}
                />
              </li>
            ))}
        </ul>
      )}
    </>
  );
}
