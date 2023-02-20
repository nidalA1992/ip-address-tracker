import React, {useEffect, useState} from "react";
import type {
  ChangeEvent,
  EventHandler,
  Dispatch,
  SetStateAction,
} from "react";

import { SearchIcon } from "./search-icon";
import { fetchPosition } from "../api/fetch-position";

import s from "./styles.module.scss";
import {getUserApi} from "../api/get-user-api";

type InputChange = EventHandler<ChangeEvent<HTMLInputElement>>;
type FormSubmit = EventHandler<ChangeEvent<HTMLFormElement>>;

interface ISearchForm {
  setData: Dispatch<SetStateAction<IpGeolacationResponse>>;
}

export const SearchForm = ({ setData }: ISearchForm) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    getUserApi()
      .then((res: any) => fetchPosition(res.ip))
      .then(position => {
        setData(position);
        setValue(position.ip);
      });
  }, []);
  
  
  const handleSubmit: FormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const regexp = /([0-9]{1,3}\.){3}[0-9]{1,3}$/;

    try {
      if (!regexp.test(value)) {
        setError("Неверный формат IP-адреса!");
        return;
      }

      const position = await fetchPosition(value);
      console.log(position);

      setData(position);
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
        placeholder="Search for any IP address"
        className={s.input}
        onChange={handleInputChange}
        value={value}
        name="ip"
        type="text"
      />
      <button className={s.button} type="submit">
        {isLoading ? (
          <span className={s.loader}>
            <span className={s.one}></span>
            <span className={s.two}></span>
          </span>
        ) : (
          <SearchIcon />
        )}
      </button>
      {error && <span className={s.error}>{error ? error : ""}</span>}
    </form>
  );
};
