import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { useSelector } from "react-redux";
import { NewsArticle, NewsResponse } from "@/models/NewsArticle";
import { selectDisplay } from "@/slices/displaySlices";
import { GetServerSideProps } from "next";

//external imports
import { Loader, Modal, NewsItem } from "../components";

interface NewsPageProps {
  newsArticle: NewsArticle[];
}

export const getServerSideProps: GetServerSideProps<NewsPageProps> = async () => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`
  );
  const newsResponse: NewsResponse = await response.json();
  return {
    props: {
      newsArticle: newsResponse.articles,
    },
  };
};

export default function Home({ newsArticle }: NewsPageProps) {
  const state = useSelector(selectDisplay);
  const [modalContent, setModalContent] = useState<NewsArticle>();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (newsArticle) setIsLoading(false);
  }, [newsArticle]);
  {
  }
  if (isLoading) {
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="w-full h-full flex justify-center items-center">
          <Loader />
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col h-full overflow-hidden ">
        <main className="h-full w-full pb-10">
          <div className="mb-6">menu</div>
          <div
            className={`${state ? "gridItem" : "listItem"} scrollbar-hide w-full h-full overflow-x-scroll`}
          >
            {newsArticle.map((item, i) => {
              return (
                <li
                  key={i}
                  onClick={() => [setModalContent(item), setIsOpenModal(true)]}
                  className="list-none"
                >
                  <NewsItem key={i} item={item} state={state} />
                </li>
              );
            })}
            {isOpenModal && <Modal modalContent={modalContent} />}
          </div>
        </main>
      </div>
    </>
  );
}
