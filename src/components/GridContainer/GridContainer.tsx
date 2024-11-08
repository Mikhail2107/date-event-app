import './GridContainer.css';

interface GridContainerProps {
  activeId: number;
  eventList: {
    id: number;
    page: number;
    title: string;
    style: React.CSSProperties;
    styleButton: React.CSSProperties;
  }[];
  handleNextPage: () => void;
  handlePrevPage: () => void;
}

function GridContainer({ activeId, eventList, handleNextPage, handlePrevPage }: GridContainerProps) {
  return (
    <>
      <div className="grid-container">
        <div className="grid-item">
          <h1 className="history-title">Исторические даты</h1>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item">
          <div className="history-pages-button">
            <span className="pages">0{activeId}/0{eventList.length}</span>
            <div className="buttons">
              <div
                className="button-prev pages-button"
                onClick={handlePrevPage}
              ></div>
              <div
                className="button-next pages-button"
                onClick={handleNextPage}
              ></div>
            </div>
          </div>
        </div>
        <div className="grid-item"></div>
      </div>
    </>
  );
}

export default GridContainer;
