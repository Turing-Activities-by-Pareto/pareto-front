import React, { useState } from 'react';
import "../assets/styles/AddEvents/AddEvents.css";
import closeSquare from "../assets/images/general/close-square.svg";
import galleryExport from "../assets/images/general/gallery-export.svg";
import dropDown from "../assets/images/general/dropdown.svg";

const AddEvents = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Təhsil");
  const categories = ["Təhsil", "Eyləncə", "İntellektual"];

  const handleClick = (index) => {
    setActiveIndex(index);
    if (index !== 0) {
      setShowDropdown(false);
    }
  };

  const handleCategoryClick = (e) => {
    e.stopPropagation();
    setActiveIndex(0);
    setShowDropdown(!showDropdown);
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
    setShowDropdown(false);
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
              <div className="category-container">
                <div className="category-header" onClick={handleCategoryClick}>
                  <div className="category-text">
                    <h3>Kateqoriya</h3>
                    <p className="selected-category">{selectedCategory}</p>
                  </div>
                  <img 
                    src={dropDown} 
                    alt="dropdown" 
                    className={`dropdown-icon ${showDropdown ? 'rotate' : ''}`} 
                  />
                </div>
                
                {showDropdown && (
                  <div className="category-dropdown">
                    {categories.map((category) => (
                      <div 
                        key={category} 
                        className="dropdown-item"
                        onClick={(e) => {
                          e.stopPropagation();
                          selectCategory(category);
                        }}
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            <div className={`form_group ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleClick(1)}>
              <h3>Tədbirin adı</h3>
              <p>Remote bazarda dizayn sistemləri</p>
            </div>
            
            <div className={`form_group ${activeIndex === 2 ? 'active' : ''}`} onClick={() => handleClick(2)}>
              <h3>Açıqlama</h3>
              <p>Bu tədbirdə, remote iş mühitində dizayn sistemlərinin komandalar arasında əməkdaşlığı necə asanlaşdırdığı və məhsul inkişafını sürətləndirdiyi müzakirə ediləcək. Tələbələr, praktiki nümunələr və tövsiyələr əldə edəcəklər.</p>
            </div>

            <div className="forms-row">
              <div className={`form_group location-form ${activeIndex === 3 ? 'active' : ''}`} onClick={() => handleClick(3)}>
                <h3>Məkan</h3>
                <div className="input-wrapper"> 
                  <input 
                    type="text" 
                    placeholder="Turing Academy, Kelvin otağı" 
                    className="form-input"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <span className="form-note">*Akademiya daxilindədirsə, otağın adını qeyd edin.</span>
                </div>
              </div>
              
              <div className={`form_group max-people-form ${activeIndex === 4 ? 'active' : ''}`} onClick={() => handleClick(4)}>
                <h3>Maksimum kişi sayı</h3>
                <div className="input-wrapper"> 
                  <input 
                    type="number" 
                    placeholder="" 
                    className="form-input"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <span className="form-note">*Boş buraxılarsa, limitsizdir.</span>
                </div>
              </div>
            </div>

            <div className="guests">
              <p>Kimlər qatıla bilər</p>
              <div className="input-row">
                <div className="checkbox-option">
                  <input type="checkbox" id="telebe" name="guest" />
                  <label htmlFor="telebe">Tələbələr</label>
                </div>
                <div className="checkbox-option">
                  <input type="checkbox" id="isci" name="guest" />
                  <label htmlFor="teacher">Müəllim və mentorlar</label>
                </div>
                <div className="checkbox-option">
                  <input type="checkbox" id="pensiya" name="guest" />
                  <label htmlFor="guest">Qonaqlar</label>
                </div>
              </div>
              <div className="input-row">
                <div className="checkbox-option">
                  <input type="checkbox" id="menecer" name="guest" />
                  <label htmlFor="community">Community</label>
                </div>
                <div className="checkbox-option">
                  <input type="checkbox" id="serbest" name="guest" />
                  <label htmlFor="everyone">Hamı</label>
                </div>
              </div>
              <div className="input-row">
                <div className="checkbox-option">
                  <input type="checkbox" id="diger" name="guest" />
                  <label htmlFor="any">Digər:</label>
                </div>
              </div>
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