import React from "react";

export default function MainHeader({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div className="text-4xl divide-y-2 divide-gray-300 h-10 mr-10 font-extrabold">
            {children}
            <div className=" border-b border-2 border-gray-500 border-round my-0.5"></div>
        </div>
    )
}