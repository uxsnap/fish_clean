import Head from "next/head";
import { Header } from "@/components/Header";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const cards = [
  {
    title: "Широкий ассортимент",
    info: "У нас вы найдете богатый выбор аквариумных рыбок, водных растений и декора для создания вашего идеального аквариума. Мы предлагаем только здоровых и активных питомцев.",
    Icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 576 512"
        height="50px"
        width="50px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M180.5 141.5C219.7 108.5 272.6 80 336 80s116.3 28.5 155.5 61.5c39.1 33 66.9 72.4 81 99.8c4.7 9.2 4.7 20.1 0 29.3c-14.1 27.4-41.9 66.8-81 99.8C452.3 403.5 399.4 432 336 432s-116.3-28.5-155.5-61.5c-16.2-13.7-30.5-28.5-42.7-43.1L48.1 379.6c-12.5 7.3-28.4 5.3-38.7-4.9S-3 348.7 4.2 336.1L50 256 4.2 175.9c-7.2-12.6-5-28.4 5.3-38.6s26.1-12.2 38.7-4.9l89.7 52.3c12.2-14.6 26.5-29.4 42.7-43.1zM448 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
      </svg>
    ),
  },
  {
    title: "Консультации и поддержка",
    info: "Наша команда — это эксперты, готовые помочь вам с выбором рыбок, оборудования и аксессуаров, а также дать советы по уходу за аквариумом.",
    Icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="50px"
        width="50px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-3.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z"></path>
      </svg>
    ),
  },
  {
    title: "Услуги по уходу",
    info: "Мы предлагаем профессиональную очистку и обслуживание аквариумов, чтобы ваш подводный мир всегда оставался чистым и ухоженным.",
    Icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="50px"
        width="50px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="m16.99 5 .63 1.37 1.37.63-1.37.63L16.99 9l-.63-1.37L14.99 7l1.37-.63.63-1.37M20 14c1.1 0 2-.9 2-2s-2-4-2-4-2 2.9-2 4 .9 2 2 2zm-9-7.9V4h2c.57 0 1.1.17 1.55.45l1.43-1.43A4.899 4.899 0 0 0 13 2H7.5v2H9v2.11c-1.78.37-3.2 1.68-3.75 3.39h2.16C7.94 8.61 8.89 8 10 8c1.62 0 2.94 1.29 2.99 2.9l2.01.75V11a5 5 0 0 0-4-4.9zM22 19v1l-8 2.5-7-1.94V22H1V11h7.97l6.16 2.3A2.89 2.89 0 0 1 17 16h2c1.66 0 3 1.34 3 3zM5 20v-7H3v7h2zm14.9-1.43c-.16-.33-.51-.56-.9-.56h-5.35c-.54 0-1.07-.09-1.58-.26l-2.38-.79.63-1.9 2.38.79c.31.1 2.3.15 2.3.15 0-.37-.23-.7-.57-.83L8.61 13H7v5.48l6.97 1.93 5.93-1.84z"></path>
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Fish & Clean</title>
        <meta name="description" content="Fish & Clean" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={roboto.className}>
        <div style={{ position: "fixed", top: 0, width: "100%" }}>
          <Header />
        </div>

        <main
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 40,
          }}
        >
          <div
            style={{
              marginTop: 40,
              fontSize: 24,
              color: "white",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              padding: "0 40px",
            }}
            id="main"
          >
            <img height={400} src="/fish_clean.png" width="auto" />

            <div
              style={{
                textShadow:
                  "2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, 1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000;",
              }}
            >
              Добро пожаловать в "Fish & Clean" — ваш специализированный магазин
              аквариумных рыбок и товаров для аквариумов. Мы создаем
              пространство, где любители водного мира могут найти все
              необходимое для создания идеального аквариума: от ярких и здоровых
              рыбок до качественного оборудования и аксессуаров.
            </div>
          </div>

          <div
            style={{
              color: "white",
              padding: "0 40px",
            }}
          >
            <h1
              style={{
                textShadow:
                  "2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, 1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000;",
              }}
            >
              О нас
            </h1>

            <div
              style={{
                display: "flex",
                alignItems: "stretch",
                gap: 30,
                fontSize: 24,
                marginTop: 20,
              }}
            >
              {cards.map((card) => (
                <div
                  style={{
                    background: "rgba(255,255,255, 0.9)",
                    color: "#599ba4",
                    borderRadius: 8,
                    padding: 12,
                    display: "flex",
                    gap: 20,
                    flexDirection: "column",
                    alignItems: "center",
                    fontSize: 20,
                  }}
                >
                  <div style={{ fontSize: 16 }}>{card.Icon}</div>

                  <div style={{ textAlign: "center", fontWeight: 700 }}>
                    {card.title}
                  </div>

                  <div style={{ fontSize: 16 }}>{card.info}</div>
                </div>
              ))}
            </div>
          </div>

          <div id="video"></div>

          <div id="contacts"></div>
        </main>
      </div>
    </>
  );
}
