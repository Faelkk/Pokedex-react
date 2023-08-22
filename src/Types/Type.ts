import { Dispatch } from "react";

export interface typePokeInitial {
  pokedex: typePokedex[];
}
export interface TypeCard {
  pokeURL: string;
  onCardClick: (pokemon: Pokemon) => void;
}
export interface typePokedex {
  name: string;
  url: string;
}
export interface btnType {
  setTypeName: (type: string) => void;
}
export interface typePokemon {
  pokemon: Pokemon | undefined;
  modal: boolean;
  setModal: (modal: boolean) => void;
}
export interface TypeCardFilter {
  typeName: string | undefined;
  setTypeName: Dispatch<React.SetStateAction<string>>;
  key: number;
}

export interface Pokemon {
  height: number;
  id: number;
  name: string;
  order: number;

  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

export interface Sprites {
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
  other: Other;
}

export interface Other {
  dream_world: DreamWorld;
  home: Home;
  "official-artwork": OfficialArtwork;
}

export interface DreamWorld {
  front_default: string;
  front_female: any;
}

export interface Home {
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

export interface OfficialArtwork {
  front_default: string;
  front_shiny: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Stat2;
}

export interface Stat2 {
  name: string;
  url: string;
}

export interface Type {
  slot: number;
  type: Type2;
}

export interface Type2 {
  name: string;
  url: string;
}

export interface PokeFilter {
  damage_relations: DamageRelations;
  game_indices: Index[];
  generation: Generation2;
  id: number;
  move_damage_class: MoveDamageClass;
  moves: Mfe[];
  name: string;
  names: Name[];
  past_damage_relations: PastDamageRelation[];
  pokemon: Pokemon[];
}

export interface DamageRelations {
  double_damage_from: DoubleDamageFrom[];
  double_damage_to: DoubleDamageTo[];
  half_damage_from: HalfDamageFrom[];
  half_damage_to: HalfDamageTo[];
  no_damage_from: any[];
  no_damage_to: NoDamageTo[];
}

export interface DoubleDamageFrom {
  name: string;
  url: string;
}

export interface DoubleDamageTo {
  name: string;
  url: string;
}

export interface HalfDamageFrom {
  name: string;
  url: string;
}

export interface HalfDamageTo {
  name: string;
  url: string;
}

export interface NoDamageTo {
  name: string;
  url: string;
}

export interface Index {
  game_index: number;
  generation: Generation;
}

export interface Generation {
  name: string;
  url: string;
}

export interface Generation2 {
  name: string;
  url: string;
}

export interface MoveDamageClass {
  name: string;
  url: string;
}

export interface Mfe {
  name: string;
  url: string;
}

export interface Name {
  language: Language;
  name: string;
}

export interface Language {
  name: string;
  url: string;
}

export interface PastDamageRelation {
  damage_relations: DamageRelations2;
  generation: Generation3;
}

export interface DamageRelations2 {
  double_damage_from: DoubleDamageFrom2[];
  double_damage_to: DoubleDamageTo2[];
  half_damage_from: HalfDamageFrom2[];
  half_damage_to: HalfDamageTo2[];
  no_damage_from: NoDamageFrom[];
  no_damage_to: any[];
}

export interface DoubleDamageFrom2 {
  name: string;
  url: string;
}

export interface DoubleDamageTo2 {
  name: string;
  url: string;
}

export interface HalfDamageFrom2 {
  name: string;
  url: string;
}

export interface HalfDamageTo2 {
  name: string;
  url: string;
}

export interface NoDamageFrom {
  name: string;
  url: string;
}

export interface Generation3 {
  name: string;
  url: string;
}

export interface Pokemon {
  pokemon: Pokemon2;
  slot: number;
}

export interface Pokemon2 {
  name: string;
  url: string;
}
export interface TypeProps {
  id: string;
  type: string;

  placeholder: string;
  autoComplete: string;
  onSearch: (pokeValue: string) => void;
  required: boolean;
}
