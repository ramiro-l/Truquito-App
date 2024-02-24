"use client";

import Matchstick15 from "./Matchstick15";
import { player, info_players, info_points, point } from "@/type";
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
    player: info_players.id_player_1 | info_players.id_player_2
  ) => {
    // Select player
    const lastPoint =
      info_players.id_player_1 === player ? player_1.points : player_2.points;

    // Add point
    const newPoint: point =
      lastPoint < info_points.max ? ((lastPoint + 1) as point) : lastPoint;

    // Update player
    const newData: player =
      info_players.id_player_1 == player
        ? { ...player_1, points: newPoint }
        : { ...player_2, points: newPoint };

    // Update state
    if (info_players.id_player_1 == player) {
      setPlayer_1(newData);
    } else {
      setPlayer_2(newData);
    }
  };

  const handleSubPoint = (
    player: info_players.id_player_1 | info_players.id_player_2
  ) => {
    // Select player
    const lastPoint =
      info_players.id_player_1 === player ? player_1.points : player_2.points;

    // Add point
    const newPoint: point =
      lastPoint > info_points.min ? ((lastPoint - 1) as point) : lastPoint;

    // Update player
    const newData: player =
      info_players.id_player_1 == player
        ? { ...player_1, points: newPoint }
        : { ...player_2, points: newPoint };

    // Update state
    if (info_players.id_player_1 == player) {
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
      <button
        className="border-2 border-primary rounded px-4 pt-2 absolute font-bold uppercase bottom-5"
        onClick={handleRemoveAllPoints}
      >
        Borrar todo
      </button>
    </>
  );
}
