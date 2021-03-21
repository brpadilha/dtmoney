import { Container } from "./styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";


export function Summary() {
  return (
    <Container>
      <div>
        <header>
          Entradas
          <img src={incomeImg} alt="entradas" />
        </header>
        <strong>R$ 17.400,00</strong>
      </div>
      <div>
        <header>
          Saídas
          <img src={outcomeImg} alt="saidas" />
        </header>
        <strong>-R$ 17.400,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          Total
          <img src={totalImg} alt="total" />
        </header>
        <strong>R$ 17.400,00</strong>
      </div>
    </Container>
  );
}