import {useRef, useLayoutEffect, useState } from 'react';
import './App.css';

function App() {
  const circleRef = useRef<HTMLUListElement>(null); 
  const [eventList, setEventList] = useState([
    { id: 1, title: 'История', style: {}, styleButton: {} }, //История
    { id: 2, title: '', style: {}, styleButton: {} }, //Наука
    { id: 3, title: '', style: {}, styleButton: {} }, //Кино
    { id: 4, title: '', style: {}, styleButton: {} },
    { id: 5, title: '', style: {}, styleButton: {} }, //Литература
    { id: 6, title: '', style: {}, styleButton: {} },
  ]);
  const [menuRotate, setMenuRotate] = useState({style: {}})

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
            styleButton: {transform: ` rotate(${-75}deg)`,}
          };
        })
      );
    }
  }, []); 

  const handleRotateMenu = (id: number) => {
    
    const deg = (id-1) * 60
    setMenuRotate({style: {transform: `rotate(-${deg}deg)`}})
    console.log(`click ${deg}`, id)
  }

  return (
    <>
      <ul className="circle-menu" ref={circleRef} style={menuRotate.style}>
        {eventList.map((event) => (
          <li key={event.id} className="circle-item" style={event.style}>
            <div className='circle-info'
                style={event.styleButton}>            
              <button className='buttonTitle'
                onClick={() => handleRotateMenu(event.id)}
                >
                {event.id}
              </button>
            </div>
              <span>{event.title}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
