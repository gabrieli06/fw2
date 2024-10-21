import { Container } from "react-bootstrap";
import Menu from "./component/navbar";
import Footer from "./component/footer";

export default function noticias(){
    var produtos = [
        {
            id: 1,
            produto: "Smartphone XYZ",
            descricao: "Um smartphone moderno com tela de 6.5 polegadas, câmeras de alta definição e desempenho excepcional."
        },
        {
            id: 2,
            produto: "Fone de Ouvido Bluetooth",
            descricao: "Fones de ouvido sem fio com qualidade de som premium e bateria de longa duração para uma experiência sonora incrível."
        },
        {
            id: 3,
            produto: "Relógio Inteligente",
            descricao: "Um relógio que monitora sua saúde, rastreia atividades físicas e mantém você conectado com notificações do smartphone."
        },
        {
            id: 4,
            produto: "Câmera DSLR",
            descricao: "Câmera profissional com lente intercambiável, ideal para capturar imagens de alta qualidade em diversas situações."
        },
        {
            id: 5,
            produto: "Notebook Gamer",
            descricao: "Notebook poderoso projetado para gamers, com placa de vídeo dedicada e processador de última geração para um desempenho superior."
        }
    ]
    
    return(
    <>
     <Menu />
     <Container>Lista
        {produtos.map(produto => 
            <div>
                <p>{produto.produto}</p>
                <p>{produto.descricao}</p>
            </div>
        )}</Container>  
     <Footer />
    </>
   );
}