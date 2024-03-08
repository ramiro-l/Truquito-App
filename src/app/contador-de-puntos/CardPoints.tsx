'use client';

import Matchstick15 from './Matchstick15';
import { player, info_players, info_points, point } from '@/type';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ShareWeb from '../../components/ui/shareWeb';
import content from '@/data/content.json';

export default function CardPoints() {
  const [player_1, setPlayer_1] = useState<player>({
    points: 0,
    name: 'Nosotr@s',
  });
  const [player_2, setPlayer_2] = useState<player>({
    points: 0,
    name: 'Ell@s',
  });

  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menu]);

  useEffect(() => {
    const storedPlayer_1 = localStorage.getItem(
      info_players.name_localStorage_player_1,
    );

    if (storedPlayer_1) {
      const data = JSON.parse(storedPlayer_1);
      setPlayer_1(data);
    }

    const storedPlayer_2 = localStorage.getItem(
      info_players.name_localStorage_player_2,
    );

    if (storedPlayer_2) {
      const data = JSON.parse(storedPlayer_2);
      setPlayer_2(data);
    }
  }, []);

  const handleAddPoint = (
    playerId: info_players.id_player_1 | info_players.id_player_2,
    remember: boolean = true,
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
      localStorage.setItem(
        info_players.name_localStorage_player_1,
        JSON.stringify(newData),
      );
    } else {
      setPlayer_2(newData);
      localStorage.setItem(
        info_players.name_localStorage_player_2,
        JSON.stringify(newData),
      );
    }
  };

  const handleSubPoint = (
    playerId: info_players.id_player_1 | info_players.id_player_2,
    remember: boolean = true,
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
      localStorage.setItem(
        info_players.name_localStorage_player_1,
        JSON.stringify(newData),
      );
    } else {
      setPlayer_2(newData);
      localStorage.setItem(
        info_players.name_localStorage_player_2,
        JSON.stringify(newData),
      );
    }
  };

  const handleRemoveAllPoints = () => {
    setPlayer_1({ ...player_1, points: 0 });
    setPlayer_2({ ...player_2, points: 0 });
    localStorage.removeItem(info_players.name_localStorage_player_1);
    localStorage.removeItem(info_players.name_localStorage_player_2);
  };

  return (
    <>
      {' '}
      <div className="mt-5 flex  select-none flex-row">
        <button
          className="h-full w-full  border-r-2 border-primary px-8 hover:cursor-pointer"
          onClick={() => handleAddPoint(info_players.id_player_1)}
        >
          <p className="mb-6 border-b-4 border-primary text-center text-2xl font-bold">
            {player_1.name ? player_1.name : 'Jugador 1'}
          </p>
          <Matchstick15 points={player_1.points} />
        </button>
        <div className="absolute left-1/2 top-[480px] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-primary p-1 uppercase text-secondary">
          <small className="">m</small>
          <small className="">a</small>
          <small className="">l</small>
          <small className="">a</small>
          <small className="">s</small>
        </div>
        <button
          className="h-full w-full  border-l-2 border-primary px-8 hover:cursor-pointer"
          onClick={() => handleAddPoint(info_players.id_player_2)}
        >
          <p className="mb-6 border-b-4 border-primary text-center text-2xl font-bold">
            {player_2.name ? player_2.name : 'Jugador 2'}
          </p>
          <Matchstick15 points={player_2.points} />
        </button>
      </div>
      <div className="mb-12 mt-5  flex select-none flex-row border-t-4 border-primary pt-4">
        <button
          className="h-full w-full  border-r-2 border-primary px-8 hover:cursor-pointer"
          onClick={() => handleAddPoint(info_players.id_player_1)}
        >
          <Matchstick15 points={(player_1.points - 15) as point} />
        </button>
        <div className="absolute  left-1/2 top-[950px] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-primary p-1 uppercase text-secondary">
          <small className="">b</small>
          <small className="">u</small>
          <small className="">e</small>
          <small className="">n</small>
          <small className="">a</small>
          <small className="">s</small>
        </div>
        <button
          className="h-full w-full  border-l-2 border-primary px-8 hover:cursor-pointer"
          onClick={() => handleAddPoint(info_players.id_player_2)}
        >
          <Matchstick15 points={(player_2.points - 15) as point} />
        </button>
      </div>
      <div className="fixed bottom-0 z-20 flex items-end justify-center gap-10">
        <div className="z-30 flex items-center justify-center gap-3 rounded-t-[2rem] bg-primary px-10 py-4">
          <button
            className="inline-flex items-center rounded-full border-2 border-secondary px-3 pt-1 text-center text-3xl text-secondary"
            type="button"
            aria-label="Restar punto a nosotros"
            onClick={() => {
              if (!menu) {
                handleSubPoint(info_players.id_player_1);
              } else {
                setMenu(false);
              }
            }}
          >
            <span className="-mb-1 font-bold">-</span>
          </button>
          <button
            className="inline-flex items-center rounded-full border-2 border-secondary px-3 pt-1 text-center text-3xl text-secondary"
            type="button"
            aria-label="Sumar punto a nosotros"
            onClick={() => {
              if (!menu) {
                handleAddPoint(info_players.id_player_1);
              } else {
                setMenu(false);
              }
            }}
          >
            <span className="-mb-1 font-bold">+</span>
          </button>
        </div>
        <div className="absolute z-20 flex items-center justify-center  bg-primary pb-5 pt-2">
          <button
            className="inline-flex items-center rounded-lg px-5 text-center text-sm text-secondary "
            type="button"
            onClick={() => setMenu(!menu)}
            aria-label="Menú"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className={`h-8 w-8 ${menu ? 'hidden' : ''}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className={`h-8 w-8 ${!menu ? 'hidden' : ''}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div
            className={`${
              menu ? 'block' : 'hidden'
            }  fixed top-10  flex justify-center rounded-3xl bg-primary  text-secondary`}
          >
            <ul
              className="flex w-[90vw] flex-row justify-center p-2 
             text-sm min-[440px]:w-[400px]"
            >
              <li className="w-[100%]">
                <Link
                  href="/"
                  onClick={() => {
                    setMenu(!menu);
                  }}
                  className="block  rounded-3xl px-2 py-1 pt-[10px] text-center text-xl uppercase  hover:bg-secondary hover:text-primary"
                >
                  salir
                </Link>
              </li>
              <li className="w-[100%]">
                <button
                  onClick={() => {
                    handleRemoveAllPoints();
                    setMenu(!menu);
                  }}
                  className="block w-[100%] rounded-3xl px-2 py-1 pt-[10px] text-center text-xl uppercase  hover:bg-secondary hover:text-primary"
                >
                  Reiniciar
                </button>
              </li>
              <li className="w-[100%]">
                <div className="block w-[100%] rounded-3xl px-2 py-1 pt-[10px] text-center text-xl uppercase hover:bg-secondary hover:text-primary">
                  <ShareWeb
                    content="Compartir"
                    textTitle={`Compartir la partida de ${content.name}`}
                    textShare={`La partida de ${content.name} termino con ell@s ${player_2.points} puntos y nosotr@s ${player_1.points} puntos. \n
                    `}
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className=" z-30 flex items-center justify-center gap-3  rounded-t-[2rem] bg-primary px-10 py-4 ">
          <button
            className="inline-flex items-center rounded-full border-2 border-secondary px-3 pt-1 text-center text-3xl text-secondary"
            type="button"
            aria-label="Restar punto a ellos"
            onClick={() => {
              if (!menu) {
                handleSubPoint(info_players.id_player_2);
              } else {
                setMenu(false);
              }
            }}
          >
            <span className="-mb-1 font-bold">-</span>
          </button>
          <button
            className="inline-flex items-center rounded-full border-2 border-secondary px-3 pt-1 text-center text-3xl text-secondary"
            type="button"
            aria-label="Sumar punto a ellos"
            onClick={() => {
              if (!menu) {
                handleAddPoint(info_players.id_player_2);
              } else {
                setMenu(false);
              }
            }}
          >
            <span className="-mb-1 font-bold">+</span>
          </button>
        </div>
      </div>
      <button
        className={`${
          menu ? 'block' : 'hidden'
        } fixed left-0 top-0 z-10 h-screen w-screen bg-black opacity-20`}
        onClick={() => setMenu(!menu)}
      />
    </>
  );
}
