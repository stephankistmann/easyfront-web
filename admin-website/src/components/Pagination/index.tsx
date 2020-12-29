import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
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
  return (
    <Container>
      {page > 1 && (
        <NavPage
          name="NavPagePrev"
          onClick={() => {
            handlePagination(page - 1);
          }}
        >
          <FiChevronLeft />
        </NavPage>
      )}
      <NavPage name="NavPageCurrent">
        <span>{`${page}/${totalPages}`}</span>
      </NavPage>
      {page !== totalPages && (
        <NavPage
          name="NavPageNext"
          onClick={() => {
            handlePagination(page + 1);
          }}
        >
          <FiChevronRight />
        </NavPage>
      )}
    </Container>
  );
};
export default Pagination;
