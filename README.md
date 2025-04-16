
# Conversão de Site para React.js

## Introdução
Neste projeto, desenvolvi um site para uma loja de luxo (Louis Vuitton), tomando como base um projeto anterior feito com **HTML** e **CSS**. Desta vez, utilizei **React.js** com **JavaScript** , sem o uso de outras bibliotecas externas. Separei o site em componentes como Header, Banner, Lista de Produtos, Cards e Footer. Ao aprender e aplicar o React, percebi que ficou muito mais fácil e eficiente editar, organizar e manter o projeto.
## Passo a Passo

- Inicialização do projeto React.

1- Caso seu arquivo não esteja no seu computador, abra o terminal da sua pasta e digite:
```bash
  git clone "(adicione o URL do GitHub entre as aspas)"
```
2- Depois do enter, entre na pasta que clonou.

3- Abra o terminal.

4- Se tiver o arquivo: "node_modules" digite:
```bash
  git init
  npm run dev
```
Se não, digite:
```bash
  npm install
  npm run dev
```
5- Abra o link.

6- Edite o código.

7- Salve usando:
```bash
  git add .
  git commit -m "mensagem"
  git push
```
(o ponto serve para salvar todos os arquivos, mas se quiser um arquivo específico escreva o nome do arquivo).

(escreva uma mensagem entre as aspas para commitar).

- Criação dos componentes.

Eu separei as seções em 5(Header, Banner, ProductList, Cards e Footer) e fiz uma pasta de componentes (components), 2 arquivos para cada seção, um para texto e outro para estilização. Ou seja, passei os códigos para cada arquivo específico, deixando mais fácil a correção dos mesmos.

- Estilização.

A estilização do site foi feita com CSS externo, criando arquivos `.css` separados para cada componente. Cada componente React tem seu próprio arquivo de estilo, o que ajuda a manter o código mais organizado e fácil de manter.

Por exemplo, para o componente `Banner.jsx`, foi criado um arquivo `Banner.css`. Dentro desse CSS, escrevi os estilos normalmente, como se fosse em um projeto HTML tradicional:
 
 *Banner.css*
```css
.banner img{
    width: 100%;
  }

```
Depois, dentro do componente `Banner.jsx`, importei esse arquivo assim:

*Banner.jsx*
```jsx
import React from 'react'
import './Banner.css'

function Banner(){
    return (
        <>
            <div className="banner">
                   <img src="https://aaautoworks.com/wp-content/uploads/2022/11/LV-BW-01.png"
                   className="img"/>
            </div>
        </>
        )
}
export default Banner
```

Esse processo foi repetido para os outros componentes, como `Header`, `ProductList`, `Card` e `Footer`.

- Lista de produtos.

Para esquematizar os produtos, eu usei um componente dentro de outro(Card dentro do ProductList). Ou seja, eu fiz o componente dos Cards, pedindo as informações cruciais em um produto(Qual é o produto, qual o preço e qual é a imagem):

*Card.jsx*
```jsx
import React from 'react'
import './Card.css'

function Card({produto, descricao, link}){
    return(
    <div className="card" data-status="">
            <img src={link} className="Q"/>
            <button className="buy-button">Comprar</button>
            <h3>{produto}</h3>
            <p className="price">{descricao}</p>
    </div>
        
    )
}

export default Card
```
Depois importei o componente `Card.jsx` no componente `ProductList.jsx`(usando de exemplo de apenas um Card):

*ProductList.jsx*
```jsx
import React from 'react'
import './ProductList.css'
import Card from './Card'

function ProductList(){
    return(
        <>
        <Card
        produto='Sapato - Sneakerina LV'
        descricao='R$ 6.700,00'
        link='https://br.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneakerina-lv--ATP005MI01_PM2_Front%20view.png?wid=1090&hei=1090'
      />
        </>
    )
}

export default ProductList
```
E assim em diante.

- Testes e ajustes finais.

Verifiquei se os componentes estavam aparecendo corretamente, como o Banner, os Cards de produto e o Footer. Ajustei o tamanho das imagens e textos, para que ficassem proporcionais e harmoniosos na página. Fiz ajustes de espaçamento e alinhamento usando CSS, para melhorar o visual geral do site. Testei o site em diferentes tamanhos de tela, para garantir que o conteúdo não ficasse desorganizado no celular ou no computador.

## Como rodar o Projeto

- Instruções para clonar e rodar o projeto:
```bash
git clone "URL"
(caso não tenha o node_modules) npm install
(caso tiver o node_modules) git init
npm run dev
```
- Instruções para salvar e commitar um arquivo:
```bash
git add .(ou o nome do arquivo)
git commit -m "msg"
git push
```