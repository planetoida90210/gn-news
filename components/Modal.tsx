import { NewsArticle } from "@/models/NewsArticle";
import Image from "next/image";
import React from "react";

import images from "../assets";

interface ModalProps {
  modalContent: any;
}

export default function Modal({ modalContent }: ModalProps) {
  const { urlToImage, title, content } = modalContent;
  const validImageUrl =
    urlToImage?.startsWith("http://") || urlToImage?.startsWith("https://") ? urlToImage : undefined;
  return (
    <div className="sticky w-full h-full flex justify-center items-center inset-0 backdrop-blur-md z-10">
      <div className="w-[350px] h-[450px] bg-white dark:bg-dark">
        <div className="flex justify-end mt-4 mr-4 lg:mt-6 lg:mr-6">
          <div className="relative w-3 h-3 minlg:w-6 minlg:h-6 cursor-pointer"></div>
        </div>
        <div className=" w-full text-center p-4">
          <h2 className="font-popins dark:text-white font-normal text-2xl">{title}</h2>
        </div>
        <div className="p-10 sm:px-4 border-t border-b">{content}</div>
        <Image src={validImageUrl || images.placeholderImage} alt="News Image" width={150} height={150} />
        <div className="p-4">{}</div>
      </div>
    </div>
  );
}
