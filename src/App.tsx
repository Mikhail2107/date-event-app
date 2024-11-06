import { useRef, useLayoutEffect, useState } from 'react';
// import historyDate from './historyDate';
import './App.css';

function App() {
  const circleRef = useRef<HTMLUListElement>(null);
  const [eventList, setEventList] = useState([
    { id: 1, page: 1, title: 'История', style: {}, styleButton: {} },
    { id: 2, page: 2, title: 'Наука', style: {}, styleButton: {} },
    { id: 3, page: 3, title: 'Кино', style: {}, styleButton: {} },
    { id: 4, page: 4, title: 'Музыка', style: {}, styleButton: {} },
    { id: 5, page: 5, title: 'Литература', style: {}, styleButton: {} },
    { id: 6, page: 6, title: 'Искусство', style: {}, styleButton: {} },
  ]);
  
  const [menuRotate, setMenuRotate] = useState({ style: {} });
  const [activeId, setActiveId] = useState(1); 

  
  useLayoutEffect(() => {
    const circle = circleRef.current;
    if (circle) {
      const sectorAngle = 360 / eventList.length;

      setEventList((prevEventList) =>
        prevEventList.map((event, index) => {
          const angle = sectorAngle * index + 75;
          return {
            ...event,
            style: {
              transform: `rotate(${angle}deg)`,
              transformOrigin: '100% 100%',
            },
            styleButton: { transform: `rotate(${-75}deg)` },
          };
        })
      );
    }
  }, []);

  const handleRotateMenu = (page: number) => {
    const sectorAngle = 360 / eventList.length;
    const deg = (page - 1) * sectorAngle;
    setMenuRotate({ style: { transform: `rotate(-${deg}deg)` } });
    setActiveId(page); 
  };

  const handlePrevPage = () => {
    const newActiveId = activeId === 1 ? eventList.length : activeId - 1;
    handleRotateMenu(newActiveId);
  };

  const handleNextPage = () => {
    const newActiveId = activeId === eventList.length ? 1 : activeId + 1;
    handleRotateMenu(newActiveId);
  };

  return (
    <>
    <div className="history-container">
      <div className="grid-container">
        <div className="grid-item">
          <h1 className='history-title'>Исторические даты</h1>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item">
          <div className="history-pages-button">
          <span className="pages">0{activeId}/0{eventList.length}</span>
          <div className="buttons">
            <div className="button-prev pages-button"
            onClick={handlePrevPage}
            ></div>
            <div className="button-next pages-button"
            onClick={handleNextPage}
            ></div> 
        </div>        
      </div>
      </div>
        <div className="grid-item"></div>
      </div>
      
      <div className="circle-box">
      <ul className="circle-menu" ref={circleRef} style={menuRotate.style}>
        {eventList.map((event) => (
          <li key={event.id} className="circle-item" style={event.style}>
            <div className="circle-info">
              <button
                className={`buttonTitle ${activeId === event.id ? 'active' : ''}`}
                onClick={() => handleRotateMenu(event.page)}
                style={event.styleButton}
              >
                {event.id}
                <span
                  className={`circle-item-title ${
                    activeId === event.id ? 'active' : ''
                  }`}
                >
                  {event.title}
                </span>
              </button>
            </div>
          </li>
        ))}
      </ul>
      </div>
      <div className="history-period">
        <span className="year-begin">2017</span>
        <span className="year-end">2022</span>
      </div>
      <div className="history-box">
        
        <ul className="history-date-list">
          <li className="history-event">
            <span className="history-year">2015</span>
            <span className="history-year-description">
              Lorem ipsum dolor sit amet consectetur.
            </span>
          </li>
          <li className="history-event">
            <span className="history-year">2015</span>
            <span className="history-year-description">
              Lorem ipsum dolor sit amet consectetur.
            </span>
          </li>
          <li className="history-event">
            <span className="history-year">2015</span>
            <span className="history-year-description">
              Lorem ipsum dolor sit amet consectetur.
            </span>
          </li>
          
        </ul>
      </div>
      
    </div>
   
    </>
  );
}

export default App;