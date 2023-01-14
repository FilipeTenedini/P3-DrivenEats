# projeto3-drivenEats
# 3° Projeto Driven Education Bootcamp
## - 1° Projeto utilizando JavaScript
### Você pode acessar a aplicação neste link:
  ### - <a href="https://filipetenedini.github.io/P3-DrivenEats/">Terceiro projeto (Driven Eats)</a>
<br><br><br>
<p align="center">
  |&nbsp;&nbsp;&nbsp<a href="#Projeto">Projeto</a>&nbsp;&nbsp;
  |&nbsp;&nbsp;&nbsp<a href="#Tecnologias">Tecnologias</a>&nbsp;&nbsp;
  |&nbsp;&nbsp;&nbsp<a href="#Aprendizados">Aprendizados</a>&nbsp;&nbsp;&nbsp;&nbsp;
  |&nbsp;&nbsp;&nbsp<a href="#avaliacao">Avaliação da Driven do meu Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;
</p>
<br><br>
<h1 id="Projeto"> 💻 Projeto</h1>



<h3>- Requisitos passados </h3>

<details>
<summary>    
- Versionamento do código  
</summary>
  
    - [ ]  Versionamento usando Git é obrigatório, crie um **repositório público** no seu perfil do GitHub.
    - [ ]  Faça *commits* a cada funcionalidade implementada.
  
 </details>
 
<details>
<summary>    
- Layout
</summary>

    - [ ]  Aplicar layout para *mobile*, seguindo o Figma fornecido (não é necessário implementar um *layout* para *desktop*).
    - [ ]  O topo e o botão de fechar pedido devem ter posicionamento fixo e não rolar com a barra de rolagem.
    - [ ]  Você pode usar imagens e textos aleatórios para ilustrar a página, porém varie o preço em cada item da mesma categoria.
    - [ ]  As fontes utilizadas são: [Righteous](https://fonts.google.com/specimen/Righteous) (nome do restaurante e títulos das categorias) e [Roboto](https://fonts.google.com/specimen/Roboto) (demais textos).
    - [ ]  Para fazer as sombras presentes em alguns elementos, pesquise sobre como aplicar sombras em CSS e brinque com os valores até ficar parecido com as imagens do *layout*.
    - [ ]  Para fazer os produtos rolarem horizontalmente, utilize `overflow-x: scroll`. No modo desktop um *scroll* é exibido, mas no modo celular não.
- Seleção de itens
    - [ ]  Ao clicar sobre um item, ele deve ser marcado como selecionado.
    - [ ]  Ao clicar em um item, caso já exista um item selecionado na mesma categoria, este deve ser desmarcado e o novo item clicado deve ser o novo selecionado.
    - [ ]  Ao clicar em um item já marcado, não é necessário desmarcá-lo.
- Botão de finalizar pedido
    - [ ]  Por padrão, o botão de finalizar pedido deve vir desabilitado. Ao clicar no botão nesse estado, nada deve acontecer.
        - Além de alterar o estilo, use o atributo **disabled** no HTML da tag button.
    - [ ]  Quando o usuário tiver selecionado os itens das três categorias, o botão deve mudar para o estado de habilitado.
- Envio do pedido
    - [ ]  Ao finalizar o pedido, o usuário deverá ser encaminhado para o WhatsApp Web, em conversa com o contato do restaurante, já com uma mensagem padrão preenchida.
    - [ ]  Essa mensagem deverá seguir este formato, o padrão abaixo:
        
        ```
        Olá, gostaria de fazer o pedido:
        - Prato: Frango Yin Yang
        - Bebida: Coquinha Gelada
        - Sobremesa: Pudim
        Total: R$ 27,70
        ```
 </details>  

<details>
<summary>    
## Bônus (opcional)
</summary>


- Peça o nome e endereço
    - Ao clicar em "Fechar pedido", lance dois `prompt` para o usuário solicitando seu **nome** e **endereço**. Essas informações devem então serem adicionadas na mensagem final que é enviada por WhatsApp nesse **formato** (igualzinho, sem nenhum caractere a mais):
        
        ```
        Olá, gostaria de fazer o pedido:
        - Prato: Frango Yin Yang
        - Bebida: Coquinha Gelada
        - Sobremesa: Pudim
        Total: R$ 27,70
        
        Nome: Fulano
        Endereço: Rua...
        ```
        
- Confirme os dados antes de finalizar o pedido
    - Ao clicar em "Fechar pedido", em vez de ir para o WhatsApp direto, primeiro revise a compra seguindo a tela bônus disponível no Figma.
</details>

<h1 id="Tecnologias">🚀 Tecnologias</h1>

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML e CSS
- JavaScript


<h1 id="Aprendizados">🧠 Aprendizados</h1>

- JavaScript
- Json
- Objects
- Arrays
- Insert HTML via JS
- remove & add Attributes
- Integração com WhatsApp via link
