import { useState } from 'react';
import './styles.css';

export default function Jogo() {
    const listaJogos = [
        {
            id: 1,
            nome: "Avestruz",
            numeros: ["01", "02", "03", "04"]
        },
        {
            id: 2,
            nome: "Aguia",
            numeros: ["05", "06", "07", "08"]
        },
        {
            id: 3,
            nome: "Burro",
            numeros: ["09", "10", "11", "12",]
        },
        {
            id: 4,
            nome: "Borboleta",
            numeros: ["13", "14", "15", "16",]
        },
        {
            id: 5,
            nome: "Cachorro",
            numeros: ["17", "18", "19", "20",]
        },
        {
            id: 6,
            nome: "Cabra",
            numeros: ["21", "22", "23", "24",]
        },
        {
            id: 7,
            nome: "Carneiro",
            numeros: ["25", "26", "27", "28",]
        },
        {
            id: 8,
            nome: "Camelo",
            numeros: ["29", "30", "31", "32",]
        },
        {
            id: 9,
            nome: "Cobra",
            numeros: ["33", "34", "35", "36",]
        },
        {
            id: 10,
            nome: "Coelho",
            numeros: ["37", "38", "39", "40",]
        },
        {
            id: 11,
            nome: "Cavalo",
            numeros: ["41", "42", "43", "44",]
        },
        {
            id: 12,
            nome: "Elefante",
            numeros: ["45", "46", "47", "48",]
        },
        {
            id: 13,
            nome: "Galo",
            numeros: ["49", "50", "51", "52",]
        },
        {
            id: 14,
            nome: "Gato",
            numeros: ["53", "54", "55", "56",]
        },
        {
            id: 15,
            nome: "Jacare",
            numeros: ["57", "58", "59", "60",]
        },
        {
            id: 16,
            nome: "Leao",
            numeros: ["61", "62", "63", "64",]
        },
        {
            id: 17,
            nome: "Macaco",
            numeros: ["65", "66", "67", "68",]
        },
        {
            id: 18,
            nome: "Porco",
            numeros: ["69", "70", "71", "72",]
        },
        {
            id: 19,
            nome: "Pavao",
            numeros: ["73", "74", "75", "76",]
        },
        {
            id: 20,
            nome: "Peru",
            numeros: ["77", "78", "79", "80",]
        },
        {
            id: 21,
            nome: "Touro",
            numeros: ["81", "82", "83", "84",]
        },
        {
            id: 22,
            nome: "Tigre",
            numeros: ["85", "86", "87", "88",]
        },
        {
            id: 23,
            nome: "Urso",
            numeros: ["89", "90", "91", "92",]
        },
        {
            id: 24,
            nome: "Veado",
            numeros: ["93", "94", "95", "96",]
        },
        {
            id: 25,
            nome: "Vaca",
            numeros: ["97", "98", "99", "00",]
        },


    ];

    const [bichoSelect, setBichoSelected] = useState({});
    const [valorAposta, setValorAposta] = useState()

   


    return (
        <div className='container'>
            
            <div className="corpo">


                {
                    listaJogos.map((bicho) => {
                        return (
                            <div className='bicho'>
                                <div className='nomeBicho'>

                                    <p>{bicho.nome}</p>
                                </div>
                                <div className='imageAnimal'>
                                    <img src={require(`../../images/${bicho.nome}.png`)} alt="" />
                                </div>
                                <div className='numeros'>
                                    {
                                        bicho.numeros.map((numero) => {
                                            return (
                                                <p>{numero}</p>
                                            );
                                        })
                                    }
                                </div>
                                <button onClick={(e)=>{
                                    e.preventDefault();
                                    setBichoSelected(bicho);
                                }}>Selecionar</button>
                            </div>
                        )
                    })
                }
                
            </div>
            {
                    bichoSelect.id?
                    <div className='selecionado'>
                        <h2>Você selecionou {
                            bichoSelect.nome
                            
                            } </h2>
                        <div className='form'>
                            <form action="" method="post">
                                <div className="valor">
                                    <label htmlFor="">Digite o valor da aposta</label>
                                    <input 
                                        
                                        value={valorAposta} 
                                        onChange={(value)=>{
                                            setValorAposta(value.target.value);
                                        }}
                                        type="number" />
                                    <button type="submit" onClick={(e)=>{
                                        e.preventDefault();
                                        alert("Aposta concluída !\nVocê apostou R$ "+valorAposta+" no "+bichoSelect.nome);
                                    }} >Apostar</button>
                                </div>
                            </form>
                        </div>
                    </div>:

                    <div>

                    </div>
                }
        </div>
    );
}