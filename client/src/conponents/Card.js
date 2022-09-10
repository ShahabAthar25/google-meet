import React from "react";

export default function Card({ index, current, slide, Image }) {
  return (
    <div
      className={index === current ? "flex flex-col items-center" : "hidden"}
    >
      <Image className="rounded-full" />
      <h1 className="mt-4 font-roboto text-2xl tracking-tight text-gray-800 font-light">
        {slide.title}
      </h1>
      <p className="max-w-xs text-center font-roboto text-sm">
        {slide.pretext && (
          <span className="pr-1">
            Click <strong>New meeting</strong>
          </span>
        )}
        {slide.description}
      </p>
    </div>
  );
}
