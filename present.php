 <nav class="presentation" id="presentation">
    <div class="presentation-text">
      <h1><?php echo "Jogos Zerados 2024";?>!</h1>
      <h1>Olá, <?php echo "Mundo"; ?>!</h1>
      <p>Aqui estão algumas das minhas experiências gamers no ano de 2024.</p>

      

<p><?php
      // Verifica se existem parâmetros de consulta na URL
        if (isset($_GET['nome']) && isset($_GET['idade'])) {
        // Acessa os parâmetros de consulta usando $_GET
        $nome = $_GET['nome'];
        $idade = $_GET['idade'];

        // Exibe os valores
        echo "Olá, $nome! Você tem $idade anos.";
      } else {
          // Caso não haja parâmetros de consulta na URL
          echo "Por favor, forneça um nome e uma idade na URL.";
      }
?></p>

    </div>
    <img class="presentation-img"
      src="https://avatars.githubusercontent.com/u/117551076?v=4">
  </nav>

