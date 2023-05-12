import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { pokemonActions } from '../redux/pokemon/pokemonSlice';
import Link from 'next/link';

export default function Home() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const pokemonList = useSelector(state => state.pokemon.pokemonList);


  useEffect(() => {
    dispatch(pokemonActions.getPokemonListRequest({ page: page }));
  }, [page])

  const previousPage = () => {
    if (page !== 0) {
      setPage(previousPage => previousPage - 10);
    }
  }

  const nextPage = () => {
    setPage(previousPage => previousPage + 10);
  }

  return (
    <>
      <Head>
        <title>Pokemon Valley</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='max-w-7xl mx-auto px-2 md:px-4 lg:px-6 lg:h-screen flex flex-col justify-around pt-3 lg:pt-0' >
        <div className='grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-14'>
          {Object.values(pokemonList).map((pokemon, index) =>
            <Link href={`/pokemon-detail/${pokemon.id}`} key={index} className='bg-[#F2EB8B] rounded-md border-4 border-[#F1C509] lg:w-[200px] lg:h-[300px] flex flex-col items-center justify-center p-4 hover:scale-110 transition-all duration-300' >
              <div>
                <div>{pokemon?.name}</div>
              </div>
              <img className='w-full' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} />
            </Link>
          )}
        </div>
        <div className='flex w-full items-center justify-between py-3 lg:py-0'>
          <button onClick={previousPage} className="bg-gray-800 text-white rounded-md py-2 hover:bg-red-700 hover:text-white px-3  transition-all duration-300">
            <div className="flex flex-row align-middle">
              <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
              </svg>
              <p className="ml-2">Prev</p>
            </div>
          </button>
          <div className='text-white'>Page: {page / 10 + 1}</div>
          <button onClick={nextPage} type="button" className="bg-gray-800 text-white rounded-md py-2 hover:bg-green-500 transition-all duration-300 hover:text-white px-3">
            <div className="flex flex-row align-middle">
              <span className="mr-2">Next</span>
              <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </>
  )
}
