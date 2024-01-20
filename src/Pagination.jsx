import T from "prop-types";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function Pagination({ itemsPerPage, pa, page, setPage }) {
  const nextPage = () => {
    if (Math.ceil(pa.length / itemsPerPage) === page) return;
    setPage((prev) => prev + 1);
  };
  const prevPage = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
  };

  return (
    pa.length > 8 && (
      <div className="pagination">
        <ButtonGroup variant="contained" aria-label="contained button group">
          <Button onClick={prevPage} id="prevBtn">
            ❮
          </Button>
          <Button id="page-number">{page}</Button>
          <Button onClick={nextPage} id="nextBtn">
            ❯
          </Button>
        </ButtonGroup>
      </div>
    )
  );
}

Pagination.propTypes = {
  itemsPerPage: T.number,
  pa: T.array,
  page: T.number,
  setPage: T.func,
};
