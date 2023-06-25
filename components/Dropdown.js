import React, { useState, useEffect, useRef } from "react";
import styles from '../styles/page.module.css';
import Expand from '../public/icons/Expand';
import Collapsed from '../public/icons/Collapsed';


function DropDown({title,options,callback}) {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    callback(value);
    setSelectedOption(value.name);
    setIsOpen(false);
  };

  return (
    <>
    <label>
        {title}
        <div className={styles.dropdownContainer} ref={dropdownRef}>
            <div className={styles.dropdownHeader} style={{display: 'flex',justifyContent: 'space-between',borderColor: (isOpen ? '#F50' : '#E1E3E6'),color: '#999FA6'}} onClick={toggling}>
                {selectedOption || "Select..."}
                {isOpen ? <Collapsed /> : <Expand /> }
            </div>
            {isOpen && (
                <div className={styles.dropdownListContainer}>
                    <div className={styles.dropdownList}>
                        <div onClick={onOptionClicked({name: 'Не выбран',id: ''})} className={styles.dropdownListItem} key={Math.random()}>
                          Не выбран
                        </div>
                        {options.map(option => (
                        <div onClick={onOptionClicked(option)} className={styles.dropdownListItem} key={Math.random()}>
                            {option.name}
                        </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    </label>
    </>
  );
}

export default DropDown