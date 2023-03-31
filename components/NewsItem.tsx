import { NewsArticle } from "@/models/NewsArticle";
import Image from "next/image";
import React from "react";

//external imports
import images from "../assets";
import Modal from "./Modal";

interface NewsItemProps {
  state: boolean;
  item: NewsArticle;
}

export default function NewsItem({ state, item }: NewsItemProps) {
  const { title, author, urlToImage, publishedAt } = item;
  const validImageUrl =
    urlToImage?.startsWith("http://") || urlToImage?.startsWith("https://") ? urlToImage : undefined;

  return (
    <>
      <div
        className={`${
          state
            ? "w-[350px] h-[450px] md:w-[300px] md:h-[450px]"
            : "h-[120px] md:h-[100px] lg:mx-12 md:mx-8 sm:mx-6"
        } mx-2 my-4 bg-light1 dark:bg-dark1 rounded-md cursor-pointer shadow-md dark:shadow-black/20 hover:scale-105 duration-100`}
      >
        <div className={`${state ? "gridNews" : "listNews space-x-4"} h-1/2 mx-4`}>
          <h1
            className={`${
              state ? "md:mb-3 md:text-lg" : "text-sm md:text-xl"
            }  text-dark1 dark:text-white h-1/2 line-clamp-2 w-3/4`}
          >
            {title}
          </h1>
          <div className="flex flex-col justify-center items-center space-y-1">
            <p className="p-1 bg-red-400/50 rounded-md text-sm text-center truncate ... w-[100px] md:w-[160px]">
              {author ? author : "No Author"}
            </p>
            <p className="text-sm md:text-base">{new Date(publishedAt).toLocaleDateString()}</p>
          </div>
        </div>
        {state && (
          <div className="mx-auto justify-center w-[250px] md:w-[200px] h-[200px] md:h-[180px] relative items-center">
            <Image
              src={validImageUrl || images.placeholderImage}
              alt="news photo"
              fill
              className="rounded-md object-cover"
            />
          </div>
        )}
      </div>
    </>
  );
}
