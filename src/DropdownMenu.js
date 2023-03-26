import React, { useState } from "react";

const DropdownMenu = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  return (
    <div
      className="menu"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="menu-item">Menu principal</div>
      {isDropdownVisible && (
        <div className="dropdown">
          <div className="dropdown-item">Sous-menu 1</div>
          <div className="dropdown-item">Sous-menu 2</div>
          <div className="dropdown-item">Sous-menu 3</div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
