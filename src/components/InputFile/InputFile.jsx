import "./styles.css";

export const InputFile = ({
  files,
  setFile,
  placeholder,
  accept,
  multiple,
}) => {
  const handleChange = (event) => {
    const files = event.target.files;
    setFile([...files]);
  };

  return (
    <div className="input-file-container">
      <label className="input-file-label">
        <input
          type="file"
          className="input-file-element"
          accept={accept}
          onChange={handleChange}
          multiple={multiple}
        />
        <span className="input-file-placeholder">{placeholder}</span>
      </label>
      {files &&
        files.length > 0 &&
        files.map((file, i) => (
          <p className="input-file-info" key={i}>
            {file.name}
          </p>
        ))}
    </div>
  );
};
