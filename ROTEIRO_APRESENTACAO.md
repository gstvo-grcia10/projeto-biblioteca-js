# 📋 Roteiro Completo para Apresentação em Sala de Aula
**Disciplina:** Programação Web I  
**Projeto:** Aplicação Web com 3 Bibliotecas JavaScript  
**Aplicação:** ApexTech - Concept Gadgets Store  

---

## 🎯 Requisitos Cumpridos (Slide 8 das Especificações)
- [x] **Trabalho em dupla ou individual**
- [x] **Página da Web (tema livre):** E-commerce de tecnologia e calçados interativo.
- [x] **3 bibliotecas JavaScript com funcionalidades diferentes:**
  1. **Swiper.js** (Componente visual: Carrossel / Slider touch)
  2. **SweetAlert2** (Interação com o usuário: Modais e notificações toast estilizadas)
  3. **canvas-confetti** (Efeitos visuais & física de partículas: Confetes comemorativos no Canvas HTML5)
- [x] **Apresentação de Slides:** Disponível no arquivo `apresentacao.html` e nos tópicos abaixo para PowerPoint.
- [x] **Demonstração prática ao vivo:** O site está 100% funcional.

---

## 🗣️ O que falar na apresentação (Passo a Passo)

### 1. Abertura (30 a 60 segundos)
> *"Bom dia / boa tarde a todos e ao professor! Hoje vamos apresentar nosso projeto de Programação Web I sobre Bibliotecas JavaScript. Nosso tema foi o desenvolvimento de uma loja conceito de produtos de tecnologia chamada **ApexTech**. O objetivo principal foi enriquecer a experiência do usuário integrando três bibliotecas JavaScript de categorias totalmente distintas."*

---

### 2. Introdução às Bibliotecas (1 minuto)
> *"No desenvolvimento web moderno, nem sempre precisamos reescrever todas as funcionalidades do zero. Uma biblioteca JavaScript é um conjunto de códigos prontos e testados pela comunidade global. Para este projeto, nós integramos as bibliotecas via CDN no nosso arquivo HTML através de tags `<link>` e `<script>`."*

---

### 3. Explicando as 3 Bibliotecas Escolhidas

#### 🔹 1ª Biblioteca: Swiper.js (Carrossel / Slider)
- **O que é e para que serve:** É a biblioteca mais moderna do mercado para criação de sliders e carrosséis com suporte completo a gestos touch em celulares e computadores.
- **Por que usamos na ApexTech:** No banner principal de destaques, queríamos mostrar vários produtos sem poluir a tela. Com o Swiper, o usuário pode arrastar para os lados, usar as setas de navegação ou clicar nas bolinhas de paginação.
- **Como foi utilizada no código:**
  - Importamos o CSS e o JS do Swiper via CDN (`swiper-bundle.min.css` e `swiper-bundle.min.js`).
  - No JavaScript, chamamos `new Swiper('.mySwiper', { ... })` configurando rotação automática (`autoplay`), quantidade de slides por tamanho de tela (`breakpoints`) e paginação.

#### 🔹 2ª Biblioteca: SweetAlert2 (Modais e Notificações)
- **O que é e para que serve:** É uma biblioteca que substitui os alertas nativos do JavaScript (como o `alert()`, `confirm()` e `prompt()`).
- **Por que usamos na ApexTech:** O `alert()` padrão do navegador é feio, varia em cada sistema operacional e trava toda a aba até que o usuário clique em OK. Com o SweetAlert2 criamos:
  1. **Toasts**: Notificações rápidas no canto superior quando o usuário adiciona um item ao carrinho.
  2. **Modais Interativos**: A janela do carrinho que exibe a lista dos itens, quantidades, cálculo do total e botões de ação ("Finalizar Pedido" ou "Limpar Carrinho").
- **Como foi utilizada no código:**
  - Chamada `Toast.fire({ icon: 'success', title: '...' })` para feedbacks rápidos.
  - Chamada `Swal.fire({ title: '...', html: '...', showCancelButton: true })` para o modal do carrinho.

#### 🔹 3ª Biblioteca: canvas-confetti (Animações com Canvas)
- **O que é e para que serve:** É uma biblioteca ultra-leve e de alto desempenho criada para disparar partículas e confetes coloridos utilizando a API de `<canvas>` do HTML5.
- **Por que usamos na ApexTech:** Para o momento de recompensa e celebração do usuário ao concluir uma compra. Ao invés de uma mensagem estática sem graça, disparamos canhões de confetes de ambos os lados da tela com gravidade e dispersão física.
- **Como foi utilizada no código:**
  - Importamos o script `confetti.browser.min.js`.
  - Ao confirmar o pedido, chamamos a função `confetti({ particleCount: 50, origin: { x, y } })` em intervalos de tempo para criar a explosão contínua.

---

### 4. Demonstração Prática (Ao Vivo no Navegador)
1. Abra o arquivo `index.html` no Google Chrome ou Edge.
2. Mostre o banner principal com o carrossel do **Swiper.js** rodando sozinho e arraste com o mouse para mostrar o efeito touch.
3. Clique em **"+ Adicionar"** em alguns produtos para mostrar as notificações flutuantes do **SweetAlert2**.
4. Clique no ícone do **Carrinho** no canto superior direito para abrir o modal de resumo.
5. Clique em **"Finalizar Pedido ✨"** para mostrar o modal de sucesso junto com a explosão de confetes do **canvas-confetti**.

---

### 5. Perguntas que o Professor pode Fazer (e como responder com segurança)

**Pergunta 1: Como vocês incluíram as bibliotecas no projeto? Foi via npm ou CDN?**  
*Resposta:* "Utilizamos via CDN (Content Delivery Network) através do jsDelivr, adicionando as tags `<link>` no `<head>` para os estilos e `<script>` no final do `<body>` para os scripts JavaScript."

**Pergunta 2: Poderíamos ter feito isso em JavaScript puro sem bibliotecas?**  
*Resposta:* "Sim, seria possível, porém exigiria centenas de linhas de código a mais para controlar matrizes de rotação de carrossel, touch gestures em dispositivos móveis, e física de partículas no canvas. As bibliotecas aceleram a entrega e garantem estabilidade cross-browser."

**Pergunta 3: O que aconteceria se a internet caísse durante o uso da página?**  
*Resposta:* "Como usamos CDN externo, os arquivos foram baixados no primeiro carregamento e ficam em cache no navegador. Para uso totalmente offline, poderíamos também baixar os arquivos `.min.js` e `.min.css` para uma pasta local dentro do projeto."
