
const inicializaFormEdicao = () => {

  const form = document.createElement('form');

  const formEdicao =
  `<form data-form>
    <div class="container">
  <div class="form-group">
  <label>CPF</label>
  <input type="number" class="form-control" data-cpf placeholder="Digite seu CPF aqui" />
  </div>
  <div class="form-group">
  <label>Nome</label>
  <input type="text" class="form-control" data-nome placeholder="Digite seu nome aqui" />
  </div>
  <div data-sucesso></div>
  <button type="submit" class="btn btn-primary">Enviar</button>
  </div>
  </form>`
  
  form.innerHTML = formEdicao

}