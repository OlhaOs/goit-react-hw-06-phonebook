import css from './ContactList.module.css';
import { nanoid } from 'nanoid';

export default function ContactList({ data }) {
  console.log('ContactList inside', data);
  return (
    <>
      {data.length > 0 && (
        <>
          <h3>Contacts</h3>
          <ul className={css.contacsList}>
            {data.map(contact => {
              return (
                <li key={nanoid()} className={css.contactListItem}>
                  {contact}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
}
