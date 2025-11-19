import Contato from "./components/Contato";

export default function App() {
  const contatos = [
    { nome: "Rafael", telefone: "99999-1111", email: "rafael@email.com" },
    { nome: "Carla", telefone: "98888-2222", email: "carla@email.com" },
    { nome: "João", telefone: "97777-3333", email: "joao@email.com" }
  ];

  const elementos = [];

  contatos.forEach((c, i) => {
    elementos.push(<Contato key={i} info={c} />);
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Agenda de Contatos</h1>
      {elementos}
    </div>
  );
}

