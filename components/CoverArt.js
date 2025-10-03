import React from "react";
import Image from "next/image";

const CoverArt = ({ url, src, title }) => {
    return (
        <div className="card flex flex-col gap-2 shrink-0 mx-2">
            <a
                href={url}
                target="_blank"
                className="img-container relative w-sm md:w-lg cursor-pointer"
            >
                <Image
                    src={src}
                    alt={title}
                    width={600}
                    height={600}
                    className="aspect-1/1"
                />
            </a>
            <div className="flex flex-row justify-between w-full">
                <div className="text-xs">{title}</div>
                <a
                    href={url}
                    target="_blank"
                    className="text-xs hover:underline hover:text-blue-700 cursor-pointer"
                >
                    Listen
                </a>
            </div>
        </div>
    );
};

export default CoverArt;
