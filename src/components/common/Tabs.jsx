import React from "react";

export default function Tabs({ active, onChange, children }) {
  return (
  <>
    <div className="border-b-2 pb-2">
      {children.map((menu, index) => (
        <a
          onClick={() => onChange(index)}
          className={active === index ? "border-b-2 border-primary py-3 px-4 mb-4" : " mx-6  inline text-lg cursor-pointer"}
          style={{
            width: 100,
          }}
        >
          {menu.props.title}
        </a>
      ))}
    </div>
    <div className=" h-80">{children[active]}</div>
  </>

  );
}
