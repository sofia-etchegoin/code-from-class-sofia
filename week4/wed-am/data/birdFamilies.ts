interface Species {
  name: string
}

interface BirdFamily {
  image: string
  species: Species[]
}

export type BirdFamilies = Record<string, BirdFamily>

const data: BirdFamilies = {
  Parrots: {
    image: 'kea.jpg',
    species: [
      { name: 'kākāriki' },
      { name: 'kea' },
      { name: 'kaka' },
      { name: 'kākāpō' }
    ]
  },
  Honeyeaters: {
    image: 'tui.jpg',
    species: [
      { name: 'tūī' },
      { name: 'korimako' } // bellbird
    ]
  },
  Pigeons: {
    image: 'kereru.jpg',
    species: [
      { name: 'kererū' }
    ]
  },
  'Rails and swamphens': {
    image: 'pukeko-takahe.jpg',
    species: [
      { name: 'weka' },
      { name: 'pūkeko' },
      { name: 'takahē' }
    ]
  },
  Wattlebirds: {
    image: 'kokako.jpg',
    species: [
      { name: 'kōkako' },
      { name: 'tīeke' } // saddleback
    ]
  },
  Owls: {
    image: 'ruru.jpg',
    species: [
      { name: 'ruru' }
    ]
  }
}

export default data