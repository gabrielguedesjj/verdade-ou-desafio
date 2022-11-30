//import {base_perguntas_infantil} from "/base_perguntas/base_perguntas_infantil.js";





// window.addEventListener('load', e => {
//     const nav = document.querySelector('.nave');

//     document.addEventListener('scroll', e => {
//         if ( window.scrollY >= 50 ) {
//             nav.classList.toggle('scrolled')
//         } else {
//             nav.classList.remove('scrolled')
//         }
//     })
// })



let base_perguntas_infantil = [
    'O que você faria com 1 milhão de reais agora?',
    'Qual é a sua maior vergonha na vida?',
    'Se você pudesse mudar algo em você, o que seria?',
    'Qual foi o sonho mais estranho que você já teve?',
    'Conte um segredo ou uma curiosidade sua',
    'Se hoje fosse o seu último dia de vida, o que você faria?',
    'De 0 a 10, que nota você daria para o (escolha alguém) em termos de (beleza, simpatia, inteligência)?',
    'Biscoito ou bolacha? Defenda sua teoria.',
    'Coxinha pela pontinha ou pela "bundinha"?',
    'O que os olhos não vêem o coração não sente?',
    'Qual foi o pior presente que você já recebeu?',
    'Se o mundo fosse acabar e você pudesse salvar apenas uma pessoa para sobreviver, quem seria?',
    'Você já nadou pelado?',
    'Qual o seu pior hábito?',
    'É possível morrer de amor?',
    'O que não pode faltar na sua geladeira?',
    'Qual é o seu maior orgulho?',
    'Você se acha bonito?',
    'Para onde você viajaria agora?',
    'Mãe ou pai?',
    'Se você pudesse trazer de volta uma pessoa que já morreu, quem seria?',
    'Se você pudesse mudar algo na história da humanidade, o que mudaria?',
    'Em qual país você gostaria de morar?',
    'Qual animal você gostaria de ser?',
    'Em uma máquina do tempo, para que época da história ou momento da sua vida você voltaria?',
    'É verdade que você já mentiu brincando de verdade ou desafio?',
    'WhatsApp, Facebook ou Instagram?',
    'Qual é a sua técnica de sedução infalível?',
    'O que te tira do sério?',
    'Se você só pudesse salvar uma pessoa dessa sala de um incêndio, quem você salvaria?',
    'Qual foi a maior mentira que você já contou?',
    'Qual estilo de música você não suporta?',
    'Já fez xixi na rua?',
    'Qual característica você realmente valoria em um amigo?',
    'Quem é a pessoa mais inteligente do mundo, para você?',
    'O que realmente é muito brega para você?',
    'Já comeu comida que seria jogada fora?',
    'Qual a coisa mais estranha que você ama comer?',
    'O que você gosta de cantar no chuveiro?',
    'Quando você termina de fazer o nº2 você se despede dele?',
    'Já vomitou pelo nariz?',
    'Qual é o bicho que você tem mais medo?',
    'Quem é a pessoa que você tem mais medo?',
    'Qual é o seu filme preferido?',
    'Você prefere ser rico ou famoso?',
    'Qual a pior mentira que já contaram sobre você?',
    'Quantos dias você já ficou sem tomar banho?',
    'Já fez xixi na piscina?',
    'Qual o pior presente que você já ganhou?',
    'O que te faz ter vontade de fugir para outro planeta?',
    'Já comeu algum inseto?',
    'Já teve diarreia constrangedora?',
    'Coxinha se come pela pontinha ou pela bundinha?',
    'É biscoito ou é bolacha?',
    'Em quais superstições você acredita?',
    'Qual o segredo do sucesso?',
    'O que você faria se ganhasse na loteria?',
    'Qual o seu sabor de pizza preferido?',
    'Você acredita em vidas passadas?',
    'Se você pudesse ficar invisível, o que gostaria de observar?',
    'Por qual tipo de talento você gostaria de ser famoso e reconhecido?',
    'Qual é a comida que te faz realmente muito feliz?',
    'Se você pudesse voltar no tempo, para quando voltaria?',
    'Qual é sua bebida preferida?',
    'Qual é o prato que você melhor cozinha?',
    'Qual outro idioma você gostaria de aprender?',
    'No Halloween você escolhe doçuras ou travessuras?',
    'O que é sorte grande para você?',
    'O que é que o dinheiro não pode comprar?',
    'Você sabe trocar pneu de carro?',
    'Já pegou carona com um desconhecido?',
    'Qual a melhor invenção da face da terra?',
    'O que é terapia para você?',
    'Inverno ou verão?',
    'Você gosta mais de Copa do Mundo ou Jogos Olímpicos?',
    'Qual é a doença que você tem mais medo?',
    'Quem é um verdadeiro campeão sem medalha para você?',
    'Você já colocou a culpa em alguém?',
    'Qual é o palavrão mais feio do mundo para você?',
    'Qual foi a última vez que não deu tempo de chegar ao banheiro?'
  ];
  let base_desafios_infantil = [
    'Brinque com as condições climáticas e do lugar. Por exemplo, se está frio, desafie a pessoa a dar uma volta pela casa sem casaco. Se está calor, a pular na piscina de roupa',
    'Ser a pessoa que serve as bebidas até o final dessa rodada',
    'Fazer o máximo de flexões que você conseguir em 1 minuto',
    'Virar um shot de alguma bebida.',
    'Dance o funk do momento equilibrando um copo na cabeça.',
    'Parar na frente de uma janela na rua e começar a cantar uma serenata.',
    'Dê um beijo no pé da pessoa do seu lado direito.',
    'Ficar sem olhar o celular até o final da brincadeira.',
    'Trocar o status de relacionamento no Facebook.',
    'Postar uma foto feia nas redes sociais.',
    'Dance uma música de forró com alguém da roda.',
    'Fazer um elogio a um desconhecido na festa ou na rua.',
    'Escolher uma música para cantar até o final sem errar.',
    'Encenar um trecho de filme para todos.',
    'Rebolar em um bambolê imaginário.',
    'Escolha alguém para publicar uma mensagem qualquer em seu Facebook.',
    'Ficar sem usar a palavra "não" até o final da rodada ou brincadeira.',
    'Lamber o cotovelo.',
    'Encostar a língua no nariz.',
    'Colocar o pé atrás da cabeça.',
    'Escolher alguém da roda para dançar valsa e dançarem.',
    'Fazer uma imitação de algum famoso ou de alguém que está na roda.',
    'Passar uma rodada brincando com os olhos vendados.',
    'Ligar para alguém que por algum motivo a pessoa não conversa há muito tempo.',
    'Passar uma rodada falando com algum sotaque ou em outro idioma.',
    'Mastigar um alho cru.',
    'Crie uma música de rap usando nome de todos que fazem parte da brincadeira.',
    'Jogue capoeira com alguém da roda.',
    'Comer uma colher com canela.',
    'Fique com 1 cubo de gelo no bolso até o final da brincadeira.',
    'Engolir um gelo em menos de 1 minuto sem voltá-lo ao copo.',
    'Cantar uma música sem olhar a letra.',
    'Inventar uma poesia que rime com alguma palavra (escolher uma palavra bizarra)',
    'Simular um pedido de casamento.',
    'Improvisar um número de musical com a situação da brincadeira.',
    'Tomar 1 litro de água no menor tempo possível.',
    'Fazer uma parada de mãos.',
    'Dance frevo.',
    'Tirar uma peça de roupa (casaco, sapatos, brincos...)',
    'Fazer o máximo de flexões que você conseguir em 1 minuto.',
    'Desligar o celular até o final do jogo.',
    'Falar na língua do "pê" até o final da rodada.',
    'Abrir uma garrafa de cerveja sem abridor.',
    'Mude a sua foto de perfil no Facebook com a sua pior foto.',
    'Passar a próxima rodada com os olhos vendados.',
    'Pronunciar "farofa" com 1 colher e farofa na boca.',
    'Fazer uma pose de yoga.',
    'Improvisar uma coreografia de balé.',
    'Toma água de uma tigela como se fosse um cachorro.',
    'Imitar um gato se limpando.',
    'Revelar a última mensagem que você mandou no WhatsApp.'
  ];
  let base_perguntas_adolescente = [
    'É verdade que ninguém te chamou para sair nessa semana?',
    'Quem você levaria dessa roda para uma ilha deserta?',
    'É verdade que você já ficou com alguém dessa roda?',
    'É verdade que você já foi traído?',
    'Você passaria a noite com alguém por 1 milhão de reais?',
    'É verdade que você já mandou nudes?',
    'Como foi o seu primeiro beijo?',
    'Você já beijou mais de uma pessoa no mesmo dia? Quantas?',
    'Carnaval na folia ou no campo?',
    'Dormir pelado ou com roupa?',
    'Você ficaria tranquilo se todo o histórico do seu WhatsApp ficasse público agora?',
    'Entre quatro paredes vale tudo?',
    'É verdade que você ficaria com alguém que está presente aqui na roda?',
    'Qual foi o motivo do seu último término?',
    'Bar ou balada?',
    'Como foi a primeira vez que você beijou na boca?',
    'Já foi pego pela polícia por alguma coisa?',
    'Você acredita em casamento?',
    'Você tem tatuagens?',
    'O que você não tatuaria de jeito nenhum?',
    'Você participaria do BBB?',
    'O que você faria se ganhasse na loteria?',
    'O cliente tem sempre razão?',
    'Você considera pizza de sushi algo socialmente aceitável?',
    '1 ano na cadeia ou para todo o sempre com seu ex?',
    'Casa na praia sem internet ou um casebre com WiFi?',
    'Já foi bloqueado em alguma rede social? Por quem?',
    'Já foi traído?',
    'Um sorriso falso ou um olhar gelado?',
    'Prefere saber a data ou a causa da sua morte?',
    'Quando foi a última vez que você perdeu o controle?',
    'Qual o maior mico que você já pagou na vida?',
    'Do que você não se orgulha de já ter feito nessa vida?',
    'O que te faz excitar?',
    'Já foi algemado?',
    'O que você compraria agora com mil reais?',
    'Se o histórico do seu WhatsApp vazasse agora e você só pudesse apagar a conversa com uma pessoa, qual seria?',
    'Qual foi o pior fora que você já levou de um crush?',
    'Qual a coisa mais engraçada que você já fez para conquistar alguém?',
    'Qual a maior mentira que você já contou só para conquistar um crush?',
    'Qual a maior mentira que você já contou no trabalho?',
    'Seu primeiro beijo teve gosto de quê?',
    'Na reunião: peidar com barulho ou tossir e espirrar catarro em alguém?',
    'Conte sobre a maior bebedeira da sua vida.',
    'O que é uma prova de amor real para você?',
    'Por que o Zeca Pagodinho toca samba e o Exaltasamba toca pagode?',
    'Mulheres devem pagar menos em baladas?',
    'Se você tivesse que se alimentar apenas de uma comida para o resto da vida, qual seria?',
    'Pizza se come com ketchup?',
    'Qual é a criatura mais estranha com a qual você se deparou?',
    'Você acredita em extraterrestres?'
  ];
  
  
  
  let base_desafios_adulto = [
    'Tomar um danoninho usando apenas a língua;',
    'Fazer uma lap dance (dança no colo) para alguém da roda',
    'Dar uma aula de educação sexual de uma maneira muito sexy',
    'Colocar um preservativo em uma banana ou pepino',
    'Colocar um preservativo em uma fruta com a boca',
    'Massagear alguém da roda',
    'Faça uma massagem nas costas de alguém sem usar as mãos',
    'Tirar o sutiã sem tirar a camiseta',
    'Simule uma dança em pole dance',
    'Desabotoar o sutiã de alguém usando só uma mão',
    'Fingir um orgasmo',
    'Tirar a camiseta de alguém usando a boca',
    'Sussurrar uma frase sensual no ouvido de alguém',
    'Beijar a orelha de alguém da roda',
    'Fazer um discurso como se estivesse prestes à chegar a um orgasmo',
    'Poste uma foto fazendo cara de sensual no seu stories do Instagram',
    'Recitar um poema erótico',
    'Uma rodada fazendo cafuné em alguém da roda',
    'Explique onde está o clítoris',
    'Faça uma selfie sensual',
    'Simule o seu olhar mais sexy para alguém da roda:',
    'Tomar um shot no umbigo de alguém (body shot)',
    'Sussurre no ouvido de alguém as coisas que você costuma dizer na hora do sexo',
    'Morder (de leve) o pescoço de alguém da roda',
    'Com os olhos fechados, encoste a mão em alguém da roda e adivinhe qual é a parte do corpo',
    'Passar a próxima rodada no colo de alguém',
    'Chupar uma fruta como se fosse um órgão sexual',
    'Simule sexo oral com uma fruta',
    'Masturbar uma fruta com os dedos como se você estivesse falando com outra pessoa',
    'Com o consentimento, beije alguém da roda',
    'Simular um strip tease tirando uma peça de roupa',
    'Faça uma simulação no ar da sua posição sexual favorita',
    'Coloque um cubo de gelo na boca e dê um beijo no pescoço de alguém da roda',
    'Mande uma mensagem de voz sexy para seu crush',
    'Lamber alguma parte do corpo de outra pessoa',
    'Passe creme em alguém',
    'Feche os olhos, alguém da roda te dá um beijo, você precisa adivinhar quem é',
    'Mande uma mensagem para o crush perguntando se ele quer jogar verdade ou desafio virtual',
    'Envie um sticker sexy para seu crush',
    'Publique: "hoje eu tô soltinh@" no seu Facebook'
  ];
  let base_perguntas_adulto = [
    'Já fez sexo casual?', 
    'Já transou com alguém do Tinder ou app de paquera?',
    'Tem algum trauma sexual, qual?',
    'Já fez sexo no avião?',
    'Peito ou bunda?',
    'Já foi pego no flagra transando ou se masturbando?',
    'Você gosta de receber sexo oral?',
    'Já ficou com vontade de vomitar durante o sexo oral?',
    'Já fez sexo anal?',
    'Já teve orgasmos múltiplos?',
    'Já ficou com vontade de ir ao banheiro durante o sexo anal?',
    'Já ficou com alguém comprometido?',
    'Já fez sexo com mais de uma pessoa ao mesmo tempo?',
    'Já usou alguma coisa para lubrificar que não era lubrificante?',
    'Já deu ou recebeu um beijo grego? Tem vontade de experimentar?',
    'Qual brinquedinho erótico você gosta mais ou tem mais vontade de experimentar?',
    'Conte uma fantasia sexual sua.',
    'Dar ou receber sexo oral?',
    'Qual a sua posição sexual preferida?',
    'Qual a posiçao sexual que você menos gosta?',
    'Depilad@ ou com pelos?',
    'Qual a sua posição preferida para se masturbar?',
    'Já broxou?',
    'Já fingiu orgasmo?',
    'Qual a coisa mais estranha que já te pediram na hora H?',
    'Já participou de um trio ou sexo com mais pessoas?',
    'Trocaria parceiros?',
    'Se você pudesse repetir uma transa na sua vida, qual seria?',
    'O que é que você tem mais medo que te aconteça durante o sexo?',
    'Prefere sexo devagarzinho ou rápido?',
    'O que para você é proibido no sexo?',
    'Quanto tempo você costuma demorar para gozar?',
    'O que você gosta de escutar na hora do sexo?',
    'O que é sexo selvagem para você?',
    'Você toparia usar uma cueca comestível?',
    'O que é fundamental nas preliminares?',
    'Qual tipo de camisinha você gosta de usar?',
    'Prefere ficar por cima ou por baixo?',
    'Já transou na frente do espelho?',
    'O que você pensa sobre ser tocado na parte do trás?',
    'Já transou com alguém que acabou de conhecer?',
    'Qual o seu segredo para deixar alguém louco de tesão?',
    'Como foi a primeira vez que alguém te chupou?',
    'Qual o sexo mais louco que você já teve?',
    'Qual experiência sexual você prefere esquecer?',
    'No que você pensa quando está se masturbando?',
    'Você prefere dominar ou ser dominad@?',
    'Você já teve orgasmo enquanto dormia?',
    'Já usou Viagra?',
    'Você geme alto ou baixinho?',
  ];
  
  let base = [
    ...base_perguntas_infantil,
    //...base_desafios_infantil,
    ...base_perguntas_adolescente,
    //...base_desafios_adolescente,
    ...base_desafios_adulto,
    //...base_desafios_adulto
  
  ];
  
  min = 0;
  max = 0;
  nivel = "";
  arr_excluidos = [];
  count_infantil = 0;
  count_adolescente = 0;
  count_adulto = 0;
  
  const li_infantil = document.getElementById('li_infantil');
  const li_adolescente = document.getElementById('li_adolescente');
  const li_adulto = document.getElementById('li_adulto');
  
  li_infantil.onclick = () => {nivel = li_infantil.innerText; arr_excluidos = [];}
  li_adolescente.onclick = () => {nivel = li_adolescente.innerText; arr_excluidos = [];}
  li_adulto.onclick = () => {nivel = li_adulto.innerText; arr_excluidos = [];}
  
  
  const button = document.getElementById('random');
  const texto_base = document.getElementById('texto_base');
  
  
  button.addEventListener('click', 
    function inicio() {
  
      if(nivel != ""){
  
        set_category(); //define min, max
  
        get_text_array(min, max); //pega frase no array base
  
        add_text_array(frase_do_array); //add última frase no arr_excluidos
      
        remove_frase_do_array(); //remove última frase de acordo com a categoria
    
        back_text_array(); //retorna perguntas pro array qndo zera
  
        write_in_HTML(); //printa no #texto_base > h1 o texto
      }
      else{ texto_base.innerHTML = `<h2>Escolha uma categoria</h2>`; }
  
    console.log(`C.infantil: ${count_infantil}, \nC.Adoles.: ${count_adolescente}, \nC.Adulto: ${count_adulto}, \nNível: ${nivel}, \nArr_excluidos: ${arr_excluidos.length}, \nBase: ${base.length}, \nBase perg. infantil: ${base_perguntas_infantil.length} \n\n`);
  });
  
  function set_category(){
    if(nivel == li_infantil.innerText) {
      max = base_perguntas_infantil.length;
      min = max - max;
      count_infantil++
    }
    else if (nivel == li_adolescente.innerText){
      min = (base_perguntas_infantil.length + 1);
      max = base_perguntas_infantil.length + base_perguntas_adolescente.length;
      count_adolescente++
    }
    else if (nivel == li_adulto.innerText){
      min = (base_perguntas_infantil.length + base_perguntas_adolescente.length) +1;
      max = (base_perguntas_infantil.length + base_perguntas_adolescente.length) +base_desafios_adulto.length;
      count_adulto++
    }
  };
  
  function get_text_array(min, max){
    let min_max = get_random_int(min, max); //gera int min max
    frase_do_array = base[min_max]; //pega frase no array base
    return frase_do_array
  };
  
  function add_text_array(frase_do_array){
    arr_excluidos.push(frase_do_array); //add última frase no arr_excluidos
  }
  
  function remove_frase_do_array(){
    //verifica_uso = arr_excluidos.find(element => element = frase_do_array);
    if(nivel == li_infantil.innerText){
      base_perguntas_infantil.splice(frase_do_array, 1);
      // base.splice(frase_do_array, 1);
    }
    else if(nivel == li_adolescente.innerText){
      base_perguntas_adolescente.splice(frase_do_array, 1);
    }
    else if(nivel == li_adulto.innerText){
     base_desafios_adulto.splice(frase_do_array, 1);
    }
  };
  
  function back_text_array(){
  
    if(base_perguntas_infantil.length == 0){
      base_perguntas_infantil = arr_excluidos
      arr_excluidos = [];
    }
    else if(base_perguntas_adolescente.length == 0){
      base_perguntas_adolescente = arr_excluidos
      arr_excluidos = [];
    }
    else if(base_perguntas_adulto.length == 0){
      base_desafios_adulto= arr_excluidos
      arr_excluidos = [];
    }
  };
  
  function write_in_HTML() {
    button.innerText = 'Clique novamente';
    
    document.getElementById('texto_base').classList.add("texto_base");
  
    const div_texto_base = document.getElementById('texto_base');
    div_texto_base.classList.add("texto_base");
    
    texto_base.innerHTML = `<h1>${frase_do_array}</h1>`;
  };
  
  function get_random_int(min, max) {
    const random = Math.floor(Math.random() * (max - min) + min );
    console.log('Random: ', +random);
      return random
  };
  
  
  
  /*
  time = setInterval( ()=> { 
    console.log(nivel);
  
  }, 2000)
  
  function end_time(){
    setTimeout(function(){
      clearInterval(time);
       console.log('STOPED');
    }, 1000 * 10)
  }
  end_time();
  */