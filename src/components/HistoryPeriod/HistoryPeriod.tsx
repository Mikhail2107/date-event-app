import { useEffect, useState } from 'react';

import './HistoryPeriod.css';

interface HistoryPeriodProps {
  activeId: number; // Добавляем пропс для активного ID страницы
  historyDate: {
    page: number;
    years: {
      [year: number]: string;
    };
  }[]; // Добавляем пропс для списка событий
}

function HistoryPeriod({ activeId, historyDate }: HistoryPeriodProps) {
  const [firstYear, setFirstYear] = useState<number | null>(null);
  const [lastYear, setLastYear] = useState<number | null>(null);

  // Используем useEffect для обновления годов при изменении активного ID
  // useEffect запускается только один раз при монтировании компонента и 
  // снова при изменении activeId
  useEffect(() => {
    // Находим страницу с активным ID
    const activePage = historyDate.find((page) => page.page === activeId);

    if (activePage) {
      // Выбираем первый и последний годы из объекта years
      const years = Object.keys(activePage.years).map(Number);
      setFirstYear(Math.min(...years));
      setLastYear(Math.max(...years));
    }
  }, [activeId, historyDate]); // Зависимости для useEffect: activeId и eventList

  return (
    <>
      <div className="history-period">
        <span className="year-begin">{firstYear ? firstYear : ''}</span>
        <span className="year-end">{lastYear ? lastYear : ''}</span>
      </div>
    </>
  );
}

export default HistoryPeriod;
