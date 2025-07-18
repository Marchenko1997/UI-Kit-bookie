import React, { useState } from "react";
import { Dropdown, type MenuProps, Typography } from "antd";
import { ChevronDownIcon } from "../../../assets/svg/Icons";

const items: MenuProps["items"] = [
  { key: "en", label: "English" },
  { key: "ru", label: "Русский" },
  { key: "de", label: "Deutsch" },
];

const LanguageSelector = () => {
   const [isHovered, setIsHovered] = useState(false);
   const [isFocused, setIsFocused] = useState(false);

  const isActive = isHovered || isFocused;
  
  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        defaultSelectedKeys: ["en"],
        className: "custom-dropdown-menu",
      }}
      placement="bottomCenter"
      arrow
    >
      <Typography.Link
        style={{
          width: "156px",
          height: "44px",
          color: "#0F1112",
          fontSize: "14px",
          backgroundColor: isActive ? "#00A99C" : "#01C6B2",
          borderRadius: "4px",
          fontWeight: "700",
          fontFamily: "Proxima Nova, sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "15px 20px",
          textDecoration: "none",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        English
        <ChevronDownIcon />
      </Typography.Link>
    </Dropdown>
  );
};

export default LanguageSelector;
