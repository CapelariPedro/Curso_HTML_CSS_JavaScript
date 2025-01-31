
##  Exercício 1: Criando um Dashboard Responsivo com CSS Grid

###  **Objetivo**
Criar um **dashboard** responsivo que contenha:
- **Um cabeçalho fixo**.
- **Uma barra lateral (sidebar)** à esquerda.
- **Uma área de conteúdo** dinâmica.
- **Três cartões de informações** que se ajustam ao tamanho da tela.

### **Requisitos**
1. O layout deve utilizar **CSS Grid** para definir as áreas.
2. A sidebar deve ocupar **200px de largura** e ser fixa na lateral.
3. Os cartões dentro da área de conteúdo devem se organizar em **colunas responsivas** utilizando `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));`
4. O cabeçalho deve ter **posição fixa no topo** e ocupar 100% da largura.
5. O layout deve ser **totalmente responsivo**.


###  **Dicas de Estilização**
- Utilize **grid-template-areas** para facilitar a organização das seções.
- Use **gap** para espaçar os cartões e a sidebar.
- O fundo da sidebar pode ser **cinza escuro**, enquanto o conteúdo principal pode ser **branco**.

---

##  Exercício 2: Criando um Portfólio Responsivo com Flexbox

###  **Objetivo**
Criar um **portfólio responsivo** contendo:
- **Um cabeçalho com navegação horizontal.**
- **Uma seção "Sobre Mim" centralizada.**
- **Uma galeria de projetos em grade flexível.**
- **Um rodapé fixo no final da página.**

### **Requisitos**
1. O cabeçalho deve usar **Flexbox** para alinhar os itens horizontalmente.
2. A seção "Sobre Mim" deve ser centralizada usando `align-items: center;`
3. A galeria deve ser uma **grade flexível** usando `display: flex; flex-wrap: wrap;`
4. Os projetos devem ser **cartões estilizados** com sombras e bordas arredondadas.
5. O rodapé deve ser fixo no final da página.

## Como Resolver
1. Clone este repositório ou crie os arquivos manualmente.
2. Desenvolva cada exercício respeitando os requisitos e usando Grid/Flexbox.
3. Teste a **responsividade** ajustando o tamanho da tela.
4. Compartilhe seu código para revisão e melhorias! 

Boa prática!