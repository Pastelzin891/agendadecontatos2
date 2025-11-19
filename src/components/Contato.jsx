export default function Contato({ info }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "12px",
      borderRadius: "8px",
      marginBottom: "12px",
      width: "260px",
      background: "#f9f9f9"
    }}>
      <h3>{info.nome}</h3>
      <p><strong>Telefone:</strong> {info.telefone}</p>
      <p><strong>Email:</strong> {info.email}</p>
    </div>
  );
}
