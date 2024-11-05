import {useRef, useLayoutEffect, useState } from 'react';
import './App.css';

function App() {
  const circleRef = useRef<HTMLUListElement>(null); 
  const [eventList, setEventList] = useState([
    { id: 1, title: '', style: {}, styleButton: {} }, //История
    { id: 2, title: 'Наука', style: {}, styleButton: {} }, //Наука
    { id: 3, title: '', style: {}, styleButton: {} }, //Кино
    { id: 4, title: '', style: {}, styleButton: {} },
    { id: 5, title: '', style: {}, styleButton: {} }, //Литература
    { id: 6, title: '', style: {}, styleButton: {} },
    // { id: 7, title: '', style: {} },
    // { id: 8, title: '', style: {} }, //Литература
    // { id: 9, title: '', style: {} },
  ]);

  useLayoutEffect(() => { 
    const circle = circleRef.current;
    if (circle) { 
      const sectorAngle = 360 / eventList.length;

      setEventList((prevEventList) =>
        prevEventList.map((event, index) => {
          const angle = sectorAngle * index+75;
          console.log(angle+' '+index)
          return {
            ...event,
            style: {
              transform: ` rotate(${angle}deg)`,
              transformOrigin: '100% 100%',
            },
            styleButton: {transform: ` rotate(${-angle}deg)`,}
          };
        })
      );
    }
  }, []); 

  return (
    <>
      <ul className="circle-menu" ref={circleRef}>
        {eventList.map((event) => (
          <li key={event.id} className="circle-item" style={event.style}>            
            <button className='buttonTitle' style={event.styleButton}>
              {event.id}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
