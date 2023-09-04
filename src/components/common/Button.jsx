import React from 'react';
import { MdOutlineSubdirectoryArrowRight } from 'react-icons/md';

export default function Button({ children, styles = "" }) {
  return (
    <a
      href="#"
      className={`inline-flex items-center justify-center px-[59px] py-3  text-lg font-medium text-center text-white bg-primary ${styles}`}
    >
      <MdOutlineSubdirectoryArrowRight className="text-2xl -mt-1.5" />
      {children}
    </a>
  );
}
