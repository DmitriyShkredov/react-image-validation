import { useState } from "react";
import { InputFile } from "./components/InputFile/InputFile";
import "./App.css";

export const App = () => {
  const [photo, setPhoto] = useState(null);
  const [resume, setResume] = useState(null);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2 className="title">Загрузка файлов</h2>
      <InputFile
        placeholder="Добавить фото"
        accept=".png,.jpg"
        files={photo}
        setFile={setPhoto}
        multiple
      />
      <InputFile
        placeholder="Добавить резюме"
        accept=".docx,.pdf"
        files={resume}
        setFile={setResume}
      />
      <button className="form-button" type="submit">
        Отправить
      </button>
    </form>
  );
};
