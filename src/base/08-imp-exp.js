// import { heros } from './data/heros';
// import { heros } from './data/heros';
// import heros, { owners } from '../data/heros';
import { heros } from '../data/heros'

// console.log( owners );

export const getHeroById = id => heros.find(hero => hero.id === id)

// console.log( getheroById(2) );

// find?, filter
export const getHerosByOwner = owner =>
  heros.filter(hero => hero.owner === owner)

// console.log( getherosByOwner('Marvel') );
