import logoImg from '../../assets/logo.svg'
import { Container, Content } from "./styles";

type HeaderProps = {
  handleOpenNewTransactionModal: ()=>void;
};

export function Header({ handleOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={handleOpenNewTransactionModal}>
          New transaction
        </button>
      </Content>
    </Container>
  );
}