import "./App.css";

export const App = () => {
  return (
    <form className="form">
      <h2 className="title">Загрузка</h2>
      <input type="file" className="input-file-element" accept=".jpg,.png" />
      <button className="form-button" type="submit">
        Отправить
      </button>
    </form>
  );
};
