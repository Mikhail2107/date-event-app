import { useRef, useLayoutEffect, useState } from 'react';
import './App.css';

function App() {
  const circleRef = useRef<HTMLUListElement>(null);
  const [eventList, setEventList] = useState([
    { id: 1, title: 'История', style: {}, styleButton: {} },
    { id: 2, title: 'Наука', style: {}, styleButton: {} },
    { id: 3, title: 'Кино', style: {}, styleButton: {} },
    { id: 4, title: 'Музыка', style: {}, styleButton: {} },
    { id: 5, title: 'Литература', style: {}, styleButton: {} },
    { id: 6, title: 'Искусство', style: {}, styleButton: {} },
  ]);
  const [menuRotate, setMenuRotate] = useState({ style: {} });
  const [activeId, setActiveId] = useState(null); 

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

  const handleRotateMenu = (id: number) => {
    const sectorAngle = 360 / eventList.length;
    const deg = (id - 1) * sectorAngle;
    setMenuRotate({ style: { transform: `rotate(-${deg}deg)` } });
    setActiveId(id); 
  };

  return (
    <>
    <div className="history-container">
      <div className="grid-container">
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
      </div>
      <h1 className='history-title'>Исторические даты</h1>
      <div className="circle-box">
      <ul className="circle-menu" ref={circleRef} style={menuRotate.style}>
        {eventList.map((event) => (
          <li key={event.id} className="circle-item" style={event.style}>
            <div className="circle-info">
              <button
                className={`buttonTitle ${activeId === event.id ? 'active' : ''}`}
                onClick={() => handleRotateMenu(event.id)}
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
        
    </div>
    
    </>
  );
}

export default App;