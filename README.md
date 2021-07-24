
# projeto gestão-cadastro
Projeto desenvolvido para o curso do Hiring Coders da Gama Academy - gestão de cadastros de um e-commerce.
O projeto é uma página básica de cadastramento de clientes e produtos para venda.
Requisito obrigatório: os dados informados precisam aparecer no localStorage.

Descrição técnica:
O projeto apresenta 3 páginas: a principal, cadastro de clientes e cadastro de produtos.

Principal: 
- composta por um título em h2 e dois botões criados a aprtir de um link da tag "a href" vinculadas a outros 2 arquivos HTML, que direcionam o usuário para as demais páginas.
- possui dentro da "head" um link para o arquivo css e os links da fonte utilizada que foram retiradas do site do Google Fonts

Página de Clientes e Produtos:
- possui os mesmo links de fonte e css da página principal.
- apresenta um título em h3.
- apresenta um formulário com as tags "label" para informar a legenda do formulário e trazer acessibilidade para leitores de  tela.
- A label se vincula ao input por meio do atributo "for" e "id", respectivamente.
- Possui um botão com o atributo "submit" para submeter as informações digitadas.
- É vinculado ao arquivo de JavaScript por meio da tag "script".
- possui um pequeno menu feito com uma lista (UL e LI) que permite ao usuário voltar para a páginainicial.

Arquivos .js
- nele é utilizado o "document.getElementById" para vincular com o "id" do formulário da página em HTML.
- adicionado um evendo nos elementos por emio do "addEventListener" que por meio de uma arrow functions captura as informações digitadas em cada um dos inputs e finaliza fazendo com que as mesmas apareçam no localStorage.

Arquivo CSS:
- formatação da página.
 - o "*" é um seletor universal que define uma formatação padrão para que não apresente diferenças em navegadores distintos.
 - "html" são formatações padrões para todo o arquivo.
 - demais formatações realizadas para cada um dos seletores.

OBS.: o projeto não possui banco de dados para armazenar as informações digitadas.

 Descrição de utilização:
- o usuário entra na página principal e tem a opção de clicar no botão de cadastro de clientes ou de produtos
- na página selecionada é possivel inserir as inforamações conforme mostrado na tela.
