import { Container } from "react-bootstrap";
import style from "@/styles/Footer.module.css";

export default function Footer(){
    return(
        <>
          <Container>
          <footer className={`${style.footerGradiente}  border-2 border border-danger-subtle rounded rounded-3 my-3`}>
                <ul className="nav justify-content-center border-bottom  border-2 border-sucess">
                    <li>Disciplina de Frameworks 2</li>
                </ul>
                <p className="text-center">&copy; 2024 - IFMS</p>
          </footer>
        </Container>
    </>
 );
}