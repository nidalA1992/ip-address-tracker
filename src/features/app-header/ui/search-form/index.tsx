import React, { useState } from "react";
import type { ChangeEvent, EventHandler } from "react";

import { SearchIcon } from "../search-icon";
import { fetchPosition } from "../../api/fetch-position";

import s from "./styles.module.scss";

type InputChange = EventHandler<ChangeEvent<HTMLInputElement>>;
type FormSubmit = EventHandler<ChangeEvent<HTMLFormElement>>;

export const SearchForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit: FormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const regexp = /([0-9]{1,3}\.){3}[0-9]{1,3}$/;

    try {
      if (!regexp.test(value)) {
        setError("Неверный формат IP-адреса!");
        return;
      }

      const position = await fetchPosition();
      setValue("");
      console.log(position);
    } catch (err) {
      setError("Произошла ошибка попробуйте снова!");
    } finally {
      setIsLoading(false);
    }

    setTimeout(() => setError(""), 5000);
  };

  const handleFormChange = () => {
    setError("");
  };

  const handleInputChange: InputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form
      className={s.form}
      onChange={handleFormChange}
      onSubmit={handleSubmit}
    >
      <input
        className={s.input}
        onChange={handleInputChange}
        value={value}
        name="ip"
        type="text"
      />
      {/* <span className={s.error}>{error ? error : ""}</span> */}
      {/* {error && <span>{error}</span>} */}
      <button className={s.button} type="submit">
        {isLoading ? "Loading..." : <SearchIcon />}
      </button>
    </form>
  );
};
