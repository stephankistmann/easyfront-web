import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useHistory } from 'react-router';
import { Container, NavPage } from './styles';

export interface PaginationProps {
  page: number;
  totalPages: number;
  handlePagination: (page: number) => void;
}
const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  handlePagination,
}) => {
  const history = useHistory();

  return (
    <Container>
      {page !== 1 && (
        <NavPage
          name="NavPagePrev"
          onClick={() => {
            handlePagination(page - 1);
            history.goBack();
          }}
        >
          <FiChevronLeft />
        </NavPage>
      )}
      <NavPage name="NavPageCurrent" onClick={() => handlePagination(page)}>
        <span>{page}</span>
      </NavPage>
      {page !== totalPages && (
        <NavPage
          name="NavPageNext"
          onClick={() => {
            handlePagination(page + 1);
            history.push(`/dashboard/${page + 1}`);
          }}
        >
          <FiChevronRight />
        </NavPage>
      )}
    </Container>
  );
};
export default Pagination;
