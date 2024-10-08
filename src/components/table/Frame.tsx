"use client";
import { flexRender } from "@tanstack/react-table";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Frame = ({ getIsSelected, getVisibleCells, Dropdown, original }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <div
        className={`flex items-center border-b-[1px] border-gray-400 px-3 py-2 text-black ${
          getIsSelected() ? "bg-green-100" : "bg-white"
        }`}
        data-cy={original.uid}
      >
        {getVisibleCells().map(({ id, column, getContext }) => (
          <div
            className={`flex items-center ${column.columnDef.meta?.width}`}
            key={id}
          >
            {flexRender(column.columnDef.cell, getContext())}
          </div>
        ))}
        {Dropdown && (
          <ChevronDown
            className={`${
              dropdown && "rotate-180"
            } duration-300 hover:cursor-pointer`}
            onClick={() => setDropdown(!dropdown)}
          />
        )}
      </div>
      {dropdown && <Dropdown object={original} />}
    </>
  );
};

export default Frame;
