import { Container, Table } from "react-bootstrap";
import Menu from "./component/navbar";
import Footer from "./component/footer";

export default function mesportes(){
    return <>
        <Menu />
        <Container className="text-center
        rounded-pill border border-primary">
            Produtos de esportes
        </Container>
        <Container>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Produto</th>
          <th>Categoria</th>
          <th>Descrição</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
        </Table>
        
            
        </Container>
        <Footer />
    </>
}