import React from "react";
import "./form.css";

class Form extends React.Component {
  render() {
    return (
      <form>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="Nome"
            id="Nome" //required="true"
            onChange={(event) => console.log(event)}
          />
          <label>CPF:</label>
          <input
            type="text"
            name="CPF"
            id="CPF" //required="true"
            onChange={(event) => console.log(event)}
          />
        </div>
        <div>
          <label>CEP:</label>
          <input
            type="text"
            name="CEP"
            id="CEP" //required="true"
            onChange={(event) => console.log(event)}
          />
          <label>RUA:</label>
          <input
            type="text"
            name="RUA"
            id="RUA" //required="true"
            onChange={(event) => console.log(event)}
          />
          <label>N°:</label>
          <input
            type="text"
            name="NUMERO"
            id="NUMERO" //required="true"
            onChange={(event) => console.log(event)}
          />
        </div>
        <div onChange={(event) => console.log(event.target.value)}>
          <label>Gênero:</label>
          <input type="radio" name="gender" value="Masculino" defaultChecked />
          Masculino
          <input type="radio" name="gender" value="Feminino" />
          Feminino
          <input type="radio" name="gender" value="Outros" />
          Outros
        </div>
        <div>
          <label>Mensagem:</label>
          <textarea type="text" placeholder="Deixe sua mensagem aqui..." />
        </div>
      </form>
    );
  }
}

export default Form;
