import dahyun from '../../assets/idols/dahyun.png';
import jihyo from '../../assets/idols/jihyo.png';
import sana from '../../assets/idols/sana.png';

const positionsMapping = {
  1: {
    eng: 'above',
    han: '위',
  },
  2: {
    eng: 'beside',
    han: '옆',
  },
  3: {
    eng: 'under',
    han: '밑',
  },
  4: {
    eng: 'between',
    han: '사이',
  },
  5: {
    eng: 'front',
    han: '앞',
  },
  6: {
    eng: 'behind',
    han: '뒤',
  },
}

const idolsMapping = {
  1: {
    name: "jihyo",
    han: "지효",
    src: jihyo,
  },
  2: {
    name: "sana",
    han: "사나",
    src: sana,
  },
  3: {
    name: "dahyun",
    han: "다현",
    src: dahyun,
  },
};

export { positionsMapping, idolsMapping }