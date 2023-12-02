const palavras = document.querySelectorAll('.parent button');
const modal = document.querySelector('.modal');

// const janela_palavra_pt = document.querySelector('#janela_palavra_pt');
const janela_palavra_titulo_pt =document.querySelector('#janela_palavra_titulo_pt');
const janela_palavra_texto_pt = document.querySelector('#janela_palavra_texto_pt');
const janela_palavra_audio_pt = document.querySelector('#janela_palavra_audio_pt')


// const janela_palavra_en = document.querySelector('#janela_palavra_en');
const janela_palavra_titulo_en =document.querySelector('#janela_palavra_titulo_en');
const janela_palavra_texto_en = document.querySelector('#janela_palavra_texto_en');
const janela_palavra_audio_en = document.querySelector('#janela_palavra_audio_en')

const espaco_texto_palavra = document.querySelector('#espaco_texto_palavra');
const espaco_texto = document.querySelector('.espaco_texto');
const linha_svg = document.querySelector('#linha svg');


const textos_palavras = [
    {
        Palavra: 'Palavra 1',
        Texto: ' Texto 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget pellentesque erat. Aliquam sed dapibus metus. Nulla laoreet sodales gravida. Quisque ac nibh mollis, posuere velit at, gravida mi. Cras vitae ipsum pulvinar, dignissim ex feugiat, imperdiet nisl. In ac mi libero. Morbi mattis nibh et efficitur blandit. Aenean sit amet vulputate turpis. Proin condimentum tortor at enim dignissim, ut dignissim lacus ultrices. Nam convallis aliquet ligula non pharetra. Mauris posuere volutpat dui in sodales.'
    },
    {
        Palavra: 'Palavra 2',
        Texto: 'Texto 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget pellentesque erat. Aliquam sed dapibus metus. Nulla laoreet sodales gravida. Quisque ac nibh mollis, posuere velit at, gravida mi. Cras vitae ipsum pulvinar, dignissim ex feugiat, imperdiet nisl. In ac mi libero. Morbi mattis nibh et efficitur blandit. Aenean sit amet vulputate turpis. Proin condimentum tortor at enim dignissim, ut dignissim lacus ultrices. Nam convallis aliquet ligula non pharetra. Mauris posuere volutpat dui in sodales.'
    },
    {
        Palavra: 'Palavra 3',
        Texto: 'Texto 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget pellentesque erat. Aliquam sed dapibus metus. Nulla laoreet sodales gravida. Quisque ac nibh mollis, posuere velit at, gravida mi. Cras vitae ipsum pulvinar, dignissim ex feugiat, imperdiet nisl. In ac mi libero. Morbi mattis nibh et efficitur blandit. Aenean sit amet vulputate turpis. Proin condimentum tortor at enim dignissim, ut dignissim lacus ultrices. Nam convallis aliquet ligula non pharetra. Mauris posuere volutpat dui in sodales.'
    }
]

const modal_conteudo_pt = [
    {
        Palavra: 'Palavra 1',
        Texto: 'ato, processo de estudar; aplicação da inteligência para compreender algo que se desconhece ou de que se tem pouco conhecimento.',
        Audio: '../../assets/risos_4.mp3'
          
    },
    {
        Palavra: 'Palavra 2',
        Texto: 'qualidade ou condição de quem se dedica a alguém ou algo; devotamento, entrega, sacrifício.',
        Audio: '../../assets/nao_achei_engracado.mp3'
          
    },
    {
        Palavra: 'Palavra 3',
        Texto: 'the quality of being dedicated or committed to a task or purpose.',
        Audio: '../../assets/pinto.mp3'
          
    }

]

const modal_conteudo_en = [
    {
        Palavra: 'Word 1',
        Texto: 'the devotion of time and attention to acquiring knowledge on an academic subject, especially by means of books.',
        Audio: '../../assets/nao_achei_engracado.mp3'
          
    },
    {
        Palavra: 'Word 2',
        Texto: 'the quality of being dedicated or committed to a task or purpose.',
        Audio: '../../assets/risos_4.mp3'
          
    },
    {
        Palavra: 'Word 3',
        Texto: 'the quality of being dedicated or committed to a task or purpose.',
        Audio: '../../assets/nao_achei_engracado.mp3'
          
    }

]

let botaoAtual; // Pra saber qual foi o último botao das palavras apertado.

// Laço para fazer abrir o modal e trocar o conteúdo do MODAL dependendo da palavra
for (let index = 0; index < palavras.length; index++) {
    palavras[index].addEventListener('click', () =>{
        modal.style.display = 'block';

        botaoAtual = palavras[index].name; // Aqui ele guarda na variável qual foi o botão clicado!

        janela_palavra_titulo_pt.textContent = modal_conteudo_pt[index].Palavra;
        janela_palavra_texto_pt.textContent = modal_conteudo_pt[index].Texto;
 
        janela_palavra_titulo_en.textContent = modal_conteudo_en[index].Palavra;
        janela_palavra_texto_en.textContent = modal_conteudo_en[index].Texto;

        espaco_texto_palavra.textContent = textos_palavras[index].Texto;

    })     
}

// Eventos de escuta para os audios
janela_palavra_audio_pt.addEventListener('mouseover', () =>{

    const audio_palavra_pt = new Audio(`${modal_conteudo_pt[botaoAtual].Audio}`);
    audio_palavra_pt.load();
    audio_palavra_pt.play();
})


janela_palavra_audio_en.addEventListener('mouseover', () =>{
    const audio_palavra_en = new Audio(`${modal_conteudo_en[botaoAtual].Audio}`);
    audio_palavra_en.load();
    audio_palavra_en.play();
})

//evento de escuta para o texto do conto
linha_svg.addEventListener('click', () =>{
    // Verifica se o conteúdo está visível
    if (espaco_texto.style.display === 'none') {
        // Se estiver escondido, muda para "Abrir"
        espaco_texto.style.display = 'block';
    } else {
        // Se estiver visível, muda para "Fechar"
        espaco_texto.style.display = 'none';
    }
})


modal.addEventListener('click', () =>{
    modal.style.display = 'none';
})