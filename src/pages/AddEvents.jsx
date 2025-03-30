import React, { useState } from 'react';
import "../assets/styles/AddEvents/AddEvents.css";
import closeSquare from "../assets/images/general/close-square.svg";
import galleryExport from "../assets/images/general/gallery-export.svg";

const AddEvents = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="add-events">
      <div className="head">
        <div className="head_content">
          <div className="left_part">
            <h2>Tədbir əlavə et</h2>
            <p>Birlikdə daha canlı və ilhamverici bir atmosfer quraq!</p>
          </div>
          <div className="right_part">
            <img src={closeSquare} alt="icon" />
            <p>sdfdsfsfdsf</p>
          </div>
        </div>
      </div>
      
      <div className="body-events">
        <div className="body_content">
          <div className="photo_add">
            <img src={galleryExport} alt="" />
            <p>Şəkil əlavə et</p>
          </div>

          <div className="form_side">
            <div className={`form_group ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleClick(0)}>
              <h3>Kateqoriya</h3>
              <p>Təhsil</p>
            </div>
            <div className={`form_group ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleClick(1)}>
              <h3>Tədbirin adı</h3>
              <p>Remote bazarda dizayn sistemləri</p>
            </div>
            <div className={`form_group ${activeIndex === 2 ? 'active' : ''}`} onClick={() => handleClick(2)}>
              <h3>Açıqlama</h3>
              <p>Bu tədbirdə, remote iş mühitində dizayn sistemlərinin komandalar arasında əməkdaşlığı necə asanlaşdırdığı və məhsul inkişafını sürətləndirdiyi müzakirə ediləcək. Tələbələr, praktiki nümunələr və tövsiyələr əldə edəcəklər.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="foot">
        <div className="foot-in">
          <p className="confirm">Təsdiq et</p>
          <p className="cancel">Ləğv et</p>
        </div>
      </div>

    </div>
  );
};

export default AddEvents;
