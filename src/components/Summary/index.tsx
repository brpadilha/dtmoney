import { Container } from "./styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {

  const { transactions } = useTransactions();


  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.totalDeposits += transaction.amount
      acc.total += transaction.amount;
    } else {
      acc.totalWithdraws += transaction.amount
      acc.total -= transaction.amount;
    }

    return acc

  }, {
    totalDeposits: 0,
    totalWithdraws: 0,
    total: 0
  });

  return (
    <Container>
      <div>
        <header>
          Incomes
          <img src={incomeImg} alt="income" />
        </header>
        <strong>{new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "USD",
                }).format(summary.totalDeposits)}</strong>
      </div>
      <div>
        <header>
          Outcomes
          <img src={outcomeImg} alt="outcome" />
        </header>
        <strong>
          - {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "USD",
          }).format(summary.totalWithdraws)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          Total
          <img src={totalImg} alt="total" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "USD",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}