import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; 
// import "swiper/css/navigation";
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';

import './HistoryBox.css';
import './swiper.scss';
import { useRef } from "react";
import {HistoryItem} from '../../historyDate';

interface HistoryBoxProps {
  activeId: number; 
  historyDate: HistoryItem[];
}

function HistoryBox({ activeId, historyDate }: HistoryBoxProps) { 
  const swiperRef = useRef(null);
  
  return (
      <>
      <Swiper
        ref={swiperRef}
        slidesPerView={3}
        spaceBetween={30}
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="history-box"
      >
      <div >        
        <ul className="history-date-list">
          {historyDate[activeId - 1].years &&
          Object.entries(historyDate[activeId - 1].years).map(
            ([year, description]) => (
              <SwiperSlide key={year} className="history-event" style={{width: '350px'}}>
                <span className="history-year">{year}</span>
                <span className="history-year-description">
                  {description}
                </span>
              </SwiperSlide>
            )
          )}
        </ul>
      </div>  
      </Swiper>
      </>
  )
}

export default HistoryBox;
