import { useState } from "react";
import styles from './ProductCreate.module.scss';

type ProductFormProps = {
  onSave: (product: { name: string; code: string }) => void;
  onCancel: () => void;
};

export default function ProductCreate ({ onSave, onCancel }: ProductFormProps) {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSave({ name, code });
    setName("");
    setCode("");
  };

  return (
    <>
      <button className={styles.buttonCreate}> Cadastrar produtos</button>
      <form onSubmit={handleSubmit} className={styles.cadastroProduto}>
        <h2>Cadastrar produtos</h2>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="code">Código:</label>
          <input
            type="text"
            id="code"
            value={code}
            onChange={handleCodeChange}
          />
        </div>
        <div>
        <button className={styles.buttonConfirm} type="submit">Salvar</button>
        <button className={styles.buttonCancel} type="button" onClick={onCancel}>Cancelar</button>
        </div>
      </form>
    </>
  );
}
