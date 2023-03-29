import css from './ContactList.module.css';
import { nanoid } from 'nanoid';

export default function ContactList({ data, onDelete }) {
  return (
    <>
      {data.length > 0 && (
        <>
          <ul className={css.contacsList}>
            {data.map(contact => {
              return (
                <li key={nanoid()} className={css.contactListItem}>
                  {contact.name}: {contact.number}
                  <button
                    type="button"
                    onClick={() => onDelete(contact.id)}
                    className={css.btn}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
}
