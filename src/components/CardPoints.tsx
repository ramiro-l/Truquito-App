"use client";

import Matchstick15 from "./Matchstick15";
import {
  player,
  info_players,
  info_points,
  point,
  action,
  info_action,
} from "@/type";
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
  const [lastAction, setLastAction] = useState<action[]>([]);
  const [beforeAction, setBeforeAction] = useState<action[]>([]);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (lastAction.length >= info_action.max_remember) lastAction.shift();
    if (beforeAction.length >= info_action.max_remember) beforeAction.shift();
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

    if (remember) {
      lastAction.push({ name: "add", playerId: playerId });
      setBeforeAction([]);
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

    if (remember) lastAction.push({ name: "sub", playerId: playerId });
  };

  const handleRemoveAllPoints = () => {
    setPlayer_1({ ...player_1, points: 0 });
    setPlayer_2({ ...player_2, points: 0 });
  };

  const handleReturnToTheater = () => {
    const action = lastAction[lastAction.length - 1];
    if (action) {
      lastAction.pop();
      beforeAction.push(action);
      if (action) {
        if (action.name === "add") {
          handleSubPoint(action.playerId, false);
        } else {
          handleAddPoint(action.playerId, false);
        }
      }
    }
  };

  const handleGoForward = () => {
    const action = beforeAction[beforeAction.length - 1];
    if (action) {
      beforeAction.pop();
      lastAction.push(action);
      if (action) {
        if (action.name === "add") {
          handleAddPoint(action.playerId, false);
        } else {
          handleSubPoint(action.playerId, false);
        }
      }
    }
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
      <div className="fixed flex z-20 justify-center items-center bottom-0 bg-primary px-8 py-3 rounded-t-full ">
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
