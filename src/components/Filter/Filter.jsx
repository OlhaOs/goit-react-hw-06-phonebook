import React from 'react';
import css from './Filter.module.css';
import { nanoid } from 'nanoid';

export default function Filter({ onSearch, value }) {
  const idForInput = nanoid();
  return (
    <>
      <label htmlFor={idForInput}>Find contacts by name</label>
      <input
        id={idForInput}
        type="text"
        name="search"
        className={css.search}
        onChange={onSearch}
        value={value}
      />
    </>
  );
}
