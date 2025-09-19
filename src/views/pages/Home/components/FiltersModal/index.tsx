import { IEmployeesFilters } from '@app/types/IEmployeesFilters';
import { DateRangeInput } from '@views/components/DateRangeInput';
import Modal from '@views/components/Modal';

import { Styled } from './styles';
import { useFiltersModalController } from './useFiltersModalController';

interface IFiltersModalProps {
  visible: boolean;
  value: IEmployeesFilters;
  onClose(): void;
  onApplyFilters(filters: IEmployeesFilters): void;
}

export function FiltersModal({
  value,
  visible,
  onClose,
  onApplyFilters,
}: IFiltersModalProps) {
  const {
    options,
    fromDate,
    toDate,
    selectedJob,
    handleSelectJob,
    handleDateRange,
  } = useFiltersModalController({
    value,
    visible,
  });

  return (
    <Modal
      title="Filtros"
      cancelLabel="Cancelar"
      confirmLabel="Aplicar filtros"
      visible={visible}
      onCancel={onClose}
      onConfirm={() =>
        onApplyFilters?.({
          job: selectedJob,
          from: fromDate,
          to: toDate,
        })
      }
      aria-description="Modal de filtros da tabela de funcionários"
    >
      <Styled.Container>
        <Styled.Section>
          <Styled.Title>Cargo</Styled.Title>

          <Styled.Select>
            {options.map((option) => (
              <Styled.Option
                key={option.value}
                $selected={selectedJob === option.value}
                onClick={() => handleSelectJob(option.value)}
              >
                {option.label}
              </Styled.Option>
            ))}
          </Styled.Select>
        </Styled.Section>

        <Styled.Section>
          <Styled.Title>Período de admissão</Styled.Title>

          <DateRangeInput
            value={{ from: fromDate, to: toDate }}
            onChange={handleDateRange}
          />
        </Styled.Section>
      </Styled.Container>
    </Modal>
  );
}
