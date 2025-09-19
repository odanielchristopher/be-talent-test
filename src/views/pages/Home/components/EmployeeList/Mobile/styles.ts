import styled from 'styled-components';

const Container = styled.div`
  ${({ theme }) => theme.shadow.secondary}
`;

const Header = styled.header`
  background: ${({ theme }) => theme.colors.primary.main};
  border-radius: 0.8rem 0.8rem 0 0;
  color: ${({ theme }) => theme.colors.foreground};
  height: 4.8rem;
  padding: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .title {
    text-transform: uppercase;

    span {
      display: inline-block;
      margin-right: 2.4rem;
    }
  }
`;

const Trigger = styled.div`
  display: flex;
  align-items: center;
  padding: 1.4rem 1.6rem;
  width: 100%;
  gap: 2.4rem;

  .name {
    font-weight: 400;
    font-size: 1.6rem;
  }
`;

const Content = styled.div`
  padding-bottom: 2.4rem;
`;

const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px dashed ${({ theme }) => theme.colors.gray[100]};

  & + & {
    margin-top: 1.2rem;
  }

  .field {
    font-size: 1.6rem;
    font-weight: 500;
    display: block;
  }

  .value {
    font-size: 1.6rem;
    font-weight: 400;
    display: block;
  }
`;

export const Styled = {
  Header,
  Container,
  Content,
  Trigger,
  FieldContainer,
};
