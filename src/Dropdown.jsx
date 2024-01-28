import { useState } from 'react';
import './dropdown.css';

function Dropdown() {
  const dropdownItems = ["Yes","Probably not"];

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const closeDropdown = () => {
    setIsHovering(false);
  };

  return (
    <div className="dropdown">
      <label for="dropdown">Should you use a dropdown?</label>
      <button class="dropbtn" onMouseOver={handleMouseOver}>Select</button>
      <div class={`dropdown-content ${isHovering?"active":""}`}>
        {dropdownItems.map((item)=>(
            <a onClick={closeDropdown}>{item}</a>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
