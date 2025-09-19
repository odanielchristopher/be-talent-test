import { FunnelIcon } from 'lucide-react';

import Button from '@views/components/Button';
import SearchInput from '@views/components/SearchInput';
import { Spinner } from '@views/components/Spinner';

import { EmployeeList } from './components/EmployeeList';
import { FiltersModal } from './components/FiltersModal';
import { NotFoundEmployee } from './components/NotFoundEmployee';
import { Styled } from './styles';
import { useHomeController } from './useHomeController';

export function Home() {
  const {
    filters,
    isMobile,
    employees,
    isLoading,
    searchTerm,
    isFiltersModalOpen,
    handleSearchTerm,
    handleApplyFilters,
    handleOpenFiltersModal,
    handleCloseFiltersModal,
  } = useHomeController();

  const hasEmployees = employees.length > 0;

  return (
    <Styled.Container>
      <FiltersModal
        value={filters}
        visible={isFiltersModalOpen}
        onClose={handleCloseFiltersModal}
        onApplyFilters={handleApplyFilters}
      />

      <Styled.Header $isMobile={isMobile}>
        <Styled.Title>Funcionários</Styled.Title>

        <Styled.FiltersContainer $isMobile={isMobile}>
          <Button
            type="button"
            style={{
              width: '4.8rem',
              height: '4.8rem',
            }}
            $variant="outline"
            onClick={handleOpenFiltersModal}
          >
            <FunnelIcon size={40} />
          </Button>

          <SearchInput
            placeholder="Pesquisar"
            value={searchTerm}
            onValueChange={handleSearchTerm}
          />
        </Styled.FiltersContainer>
      </Styled.Header>

      {isLoading && (
        <Styled.LoaderContainer>
          <Spinner size={40} />
        </Styled.LoaderContainer>
      )}

      {hasEmployees && !isLoading && <EmployeeList employees={employees} />}

      {!hasEmployees && !isLoading && (
        <NotFoundEmployee searchTerm={searchTerm} />
      )}
    </Styled.Container>
  );
}
