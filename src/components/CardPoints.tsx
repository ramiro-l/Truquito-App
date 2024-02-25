"use client";

import Matchstick15 from "./Matchstick15";
import { player, info_players, info_points, point } from "@/type";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CardPoints() {
  const [player_1, setPlayer_1] = useState<player>({
    points: 0,
    name: "Nosotr@s",
  });
  const [player_2, setPlayer_2] = useState<player>({
    points: 0,
    name: "Ell@s",
  });

  const [menu, setMenu] = useState(false);

  useEffect(() => {
    /*     const storedPlayer_1 = localStorage.getItem(
      info_players.name_localStorage_player_1
    );
    if (storedPlayer_1) {
      const data = JSON.parse(storedPlayer_1);
      setPlayer_1(data);
    }

    const storedPlayer_2 = localStorage.getItem(
      info_players.name_localStorage_player_2
    );
    if (storedPlayer_2) {
      const data = JSON.parse(storedPlayer_2);
      setPlayer_2(data);
    } */
  }, [player_1, player_2]);

  const handleAddPoint = (
    playerId: info_players.id_player_1 | info_players.id_player_2,
    remember: boolean = true
  ) => {
    // Select player
    const lastPoint =
      info_players.id_player_1 === playerId ? player_1.points : player_2.points;

    // Add point
    const newPoint: point =
      lastPoint < info_points.max ? ((lastPoint + 1) as point) : lastPoint;

    // Update player
    const newData: player =
      info_players.id_player_1 == playerId
        ? { ...player_1, points: newPoint }
        : { ...player_2, points: newPoint };

    // Update state
    if (info_players.id_player_1 == playerId) {
      setPlayer_1(newData);
    } else {
      setPlayer_2(newData);
    }
  };

  const handleSubPoint = (
    playerId: info_players.id_player_1 | info_players.id_player_2,
    remember: boolean = true
  ) => {
    // Select player
    const lastPoint =
      info_players.id_player_1 === playerId ? player_1.points : player_2.points;

    // Add point
    const newPoint: point =
      lastPoint > info_points.min ? ((lastPoint - 1) as point) : lastPoint;

    // Update player
    const newData: player =
      info_players.id_player_1 == playerId
        ? { ...player_1, points: newPoint }
        : { ...player_2, points: newPoint };

    // Update state
    if (info_players.id_player_1 == playerId) {
      setPlayer_1(newData);
    } else {
      setPlayer_2(newData);
    }
  };

  const handleRemoveAllPoints = () => {
    setPlayer_1({ ...player_1, points: 0 });
    setPlayer_2({ ...player_2, points: 0 });
  };

  return (
    <>
      {" "}
      <div className="flex flex-row  select-none mt-5">
        <div
          className="w-full h-full  px-8 hover:cursor-pointer border-r-2 border-primary"
          onClick={() => handleAddPoint(info_players.id_player_1)}
        >
          <p className="text-center font-bold text-2xl border-b-4 border-primary mb-6">
            {player_1.name ? player_1.name : "Jugador 1"}
          </p>
          <Matchstick15 points={player_1.points} />
        </div>
        <div className="flex flex-col justify-center items-center absolute top-[480px] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary p-1 rounded-full text-secondary uppercase">
          <small className="">b</small>
          <small className="">u</small>
          <small className="">e</small>
          <small className="">n</small>
          <small className="">a</small>
          <small className="">s</small>
        </div>
        <div
          className="w-full h-full  px-8 hover:cursor-pointer border-l-2 border-primary"
          onClick={() => handleAddPoint(info_players.id_player_2)}
        >
          <p className="text-center font-bold text-2xl border-b-4 border-primary mb-6">
            {player_2.name ? player_2.name : "Jugador 2"}
          </p>
          <Matchstick15 points={player_2.points} />
        </div>
      </div>
      <div className="flex flex-row  select-none mt-5 mb-8 border-t-4 border-primary pt-4">
        <div
          className="w-full h-full  px-8 hover:cursor-pointer border-r-2 border-primary"
          onClick={() => handleAddPoint(info_players.id_player_1)}
        >
          <Matchstick15 points={(player_1.points - 15) as point} />
        </div>
        <div className="flex  flex-col justify-center items-center absolute top-[950px] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary p-1 rounded-full text-secondary uppercase">
          <small className="">m</small>
          <small className="">a</small>
          <small className="">l</small>
          <small className="">a</small>
          <small className="">s</small>
        </div>
        <div
          className="w-full h-full  px-8 hover:cursor-pointer border-l-2 border-primary"
          onClick={() => handleAddPoint(info_players.id_player_2)}
        >
          <Matchstick15 points={(player_2.points - 15) as point} />
        </div>
      </div>
      <div className="fixed bottom-0 flex justify-center items-end gap-10 z-20">
        <div className=" flex z-30 gap-3 justify-center items-center  bg-primary px-10 py-4 rounded-t-[2rem] ">
          <button
            className="text-secondary border-secondary text-3xl px-3 pt-1 text-center inline-flex items-center border-2 rounded-full"
            type="button"
            onClick={() => handleSubPoint(info_players.id_player_1)}
          >
            <b className="-mb-1">-</b>
          </button>
          <button
            className="text-secondary border-secondary text-3xl px-3 pt-1 text-center inline-flex items-center border-2 rounded-full"
            type="button"
            onClick={() => handleAddPoint(info_players.id_player_1)}
          >
            <b className="-mb-1">+</b>
          </button>
        </div>
        <div className="absolute  flex z-20 justify-center items-center  bg-primary pb-5 pt-2">
          <button
            className="text-secondary rounded-lg text-sm px-5 text-center inline-flex items-center "
            type="button"
            onClick={() => setMenu(!menu)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <div
            className={`${
              menu ? "block" : "hidden"
            }  fixed flex justify-center bottom-20 bg-primary rounded-3xl w-[150px] text-secondary`}
          >
            <ul className="py-2 text-sm">
              <li>
                <button className="py-1 pt-[10px] block text-center uppercase text-xl rounded-3xl m-2 w-[125px] hover:bg-secondary hover:text-primary">
                  Compartir
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleRemoveAllPoints();
                    setMenu(!menu);
                  }}
                  className="py-1 pt-[10px] block text-center uppercase text-xl rounded-3xl m-2 w-[125px] hover:bg-secondary hover:text-primary"
                >
                  Reiniciar
                </button>
              </li>
              <li>
                <Link
                  href="/"
                  onClick={() => {
                    setMenu(!menu);
                  }}
                  className="py-1 pt-[10px] block text-center uppercase text-xl rounded-3xl m-2 w-[125px] hover:bg-secondary hover:text-primary"
                >
                  salir
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className=" flex z-30 gap-3 justify-center items-center  bg-primary px-10 py-4 rounded-t-[2rem] ">
          <button
            className="text-secondary border-secondary text-3xl px-3 pt-1 text-center inline-flex items-center border-2 rounded-full"
            type="button"
            onClick={() => handleSubPoint(info_players.id_player_2)}
          >
            <b className="-mb-1">-</b>
          </button>
          <button
            className="text-secondary border-secondary text-3xl px-3 pt-1 text-center inline-flex items-center border-2 rounded-full"
            type="button"
            onClick={() => handleAddPoint(info_players.id_player_2)}
          >
            <b className="-mb-1">+</b>
          </button>
        </div>
      </div>
      <div
        className={`${
          menu ? "block" : "hidden"
        } w-screen h-screen fixed top-0 left-0 bg-black opacity-20 z-10`}
        onClick={() => setMenu(!menu)}
      />
    </>
  );
}
/* <div className="fixed flex z-20 justify-center items-center bottom-0 bg-primary px-8 py-3 rounded-t-full ">
        <button
          className="text-secondary rounded-lg text-sm px-5 text-center inline-flex items-center "
          type="button"
          onClick={handleReturnToTheater}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
        </button>
        <button
          className="text-secondary rounded-lg text-sm px-5 text-center inline-flex items-center "
          type="button"
          onClick={() => setMenu(!menu)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <button
          className="text-secondary rounded-lg text-sm px-5 text-center inline-flex items-center "
          type="button"
          onClick={handleGoForward}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
            />
          </svg>
        </button>

        <div
          className={`${
            menu ? "block" : "hidden"
          }  fixed flex justify-center bottom-16 bg-primary rounded-3xl w-[150px] text-secondary`}
        >
          <ul className="py-2 text-sm">
            <li>
              <button className="py-1 pt-[10px] block text-center uppercase text-xl rounded-3xl m-2 w-[125px] hover:bg-secondary hover:text-primary">
                Compartir
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleRemoveAllPoints();
                  setMenu(!menu);
                }}
                className="py-1 pt-[10px] block text-center uppercase text-xl rounded-3xl m-2 w-[125px] hover:bg-secondary hover:text-primary"
              >
                Reiniciar
              </button>
            </li>
            <li>
              <Link
                href="/"
                onClick={() => {
                  setMenu(!menu);
                }}
                className="py-1 pt-[10px] block text-center uppercase text-xl rounded-3xl m-2 w-[125px] hover:bg-secondary hover:text-primary"
              >
                salir
              </Link>
            </li>
          </ul>
        </div>
      </div> */
