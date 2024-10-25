import { Container } from "react-bootstrap";
import Menu from "./component/navbar";
import Footer from "./component/footer";
import { useState } from "react";

export default function Promessa(){
    const [prometido, setPrometido] = useState("")
    setTimeout(() => {
        setPrometido(" tem que pagar ")
        document.title=" promessa é divida "
    }, 2000);
    return <>
    <Menu/>
    <Container>
        Promessa{prometido==="" ? <img src="./gif.gif" width={100} height={40}/> : prometido}
    </Container>
    <Footer />
    </>
};