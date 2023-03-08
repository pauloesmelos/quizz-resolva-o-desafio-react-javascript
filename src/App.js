import './App.css';
import styleapp from './css/Resultado.module.css';
import React from 'react';
import Radio from './Formulario/Radio';
import Button from './Formulario/Button';
import Footer from './Componentes/Footer';
import Header from './Componentes/Header';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Como limpar uma função setTimeout no Javascript ? ',
    options: ['clearInterval()','clearTimeout()','clearSetTimeout()'],
    resposta: 'clearTimeout()',
    id: 'p3',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p4',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p5',
  },
  {
    pergunta: 'Qual a forma correta de desestruturar uma HTMLCollection ? ',
    options: ['[...elemento]', '...elemento', '[elemento]'],
    resposta: '[...elemento]',
    id: 'p6',
  },
];

const App = () => {
  const onSubmit = (event) => {
    event.preventDefault();
  };
  //estado e função atualizadora
  const [valor,setValor] = React.useState(//{p1: '',p2: '',p3: '',p4: '' etc}
    perguntas.reduce((acumulador,elemento) => {
      return {...acumulador,[elemento.id]: ''};
    },{})
  );
  const [acerto,setAcerto] = React.useState(null);
  const [slide,setSlide] = React.useState(0);
  //funções
  const onChange = ({target}) => {
    const {value} = target;
    setValor({...valor,[target.id]: value});
  };
  const exibirResultado = () => {
    const acertos = perguntas.filter((elemento,indice) => {
      return valor[elemento.id] === elemento.resposta
    })
    console.log(acertos);
    setAcerto(acertos);
  }
  const onClick = (event) => {
    if(slide < perguntas.length - 1)
      setSlide(slide + 1);
    else{
      setSlide(slide + 1);
      exibirResultado();
    }
  }; 
  const calcular = (acertos) => {
    let retorno = '';
    if(acertos >= perguntas.length - 1)
      retorno = 'Feedback: Parabéns, você mandou muitoo bem 😀';
    else if(acertos < perguntas.length - 2)
      retorno = 'Feedback: Opsss, tente novamente com mais atenção ☹️';
    else
      retorno = 'Feedback: Você está na média, tente novamente 👍';
    return retorno;
  };

  return (
    <div className='app'>
      <Header li={['Repositório','Github','Linkedin']} href={['https://github.com/pauloesmelos/quizz-resolva-o-desafio-react-javascript','https://github.com/pauloesmelos','https://www.linkedin.com/in/pauloeduardomelos/']} />
      {slide < perguntas.length ? <p className='indice'>{slide + 1} de {perguntas.length}</p> : undefined}
      <form onSubmit={onSubmit}>
        {perguntas.map((elemento,indice) => (
          <Radio key={indice} titulo={elemento.pergunta} options={elemento.options} onChange={onChange} id={elemento.id} valor={valor} check={valor[elemento.id]} active={indice === slide} />
        ))}
        {acerto ? <div className={styleapp.containerResultado}>
                    {acerto && calcular(acerto.length)}
                    <p className={styleapp.acertos}>Você acertou <span className={styleapp.numeroAcertos}>{acerto.length}</span> perguntas num total de <span className={styleapp.totalPerguntas}>{perguntas.length}</span> perguntas: </p>
                    {acerto.map((elemento,indice) => (
                      <div key={indice}>
                        <p>{`${elemento.id.slice(1,2)})`}{elemento.pergunta}</p>
                        <p className={styleapp.respostaCerta}>Sua resposta: {elemento.resposta}</p>
                      </div>
                    ))}
                  </div>
                :<Button texto="Próxima Pergunta" onClick={onClick} />
        }
      </form>
      <Footer/>
    </div>
  );
}

export default App;