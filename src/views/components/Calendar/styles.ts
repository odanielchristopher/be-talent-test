import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import styled from 'styled-components';

const Calendar = styled(DayPicker)`
  .stl-month-caption {
    font-weight: 500 !important;
    font-size: 1.8rem;
  }

  .stl-day-button {
    background: transparent;
    border: 2px solid transparent;
    font-size: 1.4rem;
    padding: 0.8rem;
    color: inherit;
  }

  .stl-day-selected {
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary.main} !important;
    color: #fff !important;
  }

  .stl-range-middle {
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary.light} !important;
    color: #fff !important;
  }
`;

export const Styled = {
  Calendar,
};
