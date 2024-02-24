export type point = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
    11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 |
    23 | 24 | 25 | 26 | 27 | 28 | 29 | 30;

export enum info_points {
    max = 30,
    min = 0,
};

export interface player {
    name: string;
    points: point;
}

export enum info_players {
    id_player_1 = "id_player_1",
    id_player_2 = "id_player_2",
    name_localStorage_player_1 = "db_player_1",
    name_localStorage_player_2 = "db_player_2"
};

export interface action {
    name: "add" | "sub",
    playerId: info_players.id_player_1 | info_players.id_player_2
}

export enum info_action {
    max_remember = 10
};

