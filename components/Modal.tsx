import { NewsArticle } from "@/models/NewsArticle";
import Image from "next/image";
import React from "react";

import images from "../assets";
import { Button } from ".";
import Link from "next/link";

interface ModalProps {
  modalContent: NewsArticle | any;
}

export default function Modal({ modalContent }: ModalProps) {
  const validImageUrl =
    modalContent?.urlToImage?.startsWith("http://") || modalContent?.urlToImage?.startsWith("https://")
      ? modalContent?.urlToImage
      : undefined;
  console.log(modalContent);
  return (
    <div className="sticky w-full h-full flex justify-center items-center inset-0 backdrop-blur-md z-10 bg-black/5">
      <div className="w-fit h-fit flex bg-white dark:bg-dark1 justify-center p-3 md:p-6 rounded-md">
        <div className="flex flex-col pt-2 items-center">
          <h1 className="text-sm md:text-lg font-bold w-[80%] text-center">{modalContent?.title}</h1>
          <div className="flex items-center justify-between w-[80%] py-4 md:py-10">
            <p className="bg-red-400/50 rounded-md text-sm text-center truncate ... p-1.5 md:p-2">
              {modalContent?.author ? modalContent?.author : "No Author"}
            </p>
            <p>{new Date(modalContent?.publishedAt).toLocaleDateString()}</p>
          </div>
          <div className="hidden lg:block">
            <div className="flex max-w-4xl items-between justify-center space-x-6">
              <div>
                <div className="relative lg:w-[450px] h-[350px]">
                  <Image
                    src={validImageUrl || images.placeholderImage}
                    alt="News Article"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-around">
                <p>{modalContent?.content?.slice(0, modalContent?.content.indexOf("["))}</p>
                <Link href={modalContent?.url} className="w-[150px]" target={"_blank"}>
                  <Button title="pełny artykuł" />
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:hidden flex flex-col justify-center items-center">
            <div className="w-[300px] h-[200px] md:w-[450px] md:h-[350px] relative">
              <Image
                src={validImageUrl || images.placeholderImage}
                alt="News Article"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <p className="max-w-[80%]">
              {modalContent?.content?.slice(0, modalContent?.content.indexOf("["))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
