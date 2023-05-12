import React from 'react'

export default function Card({ pokemonDetail }) {
    return (
        <div className='bg-[#F2EB8B] rounded-md border-4 border-[#F1C509] w-full lg:w-1/6 flex flex-col items-center justify-center p-4'>
            <div className='flex items-center justify-between w-full px-2'>
                <div>{pokemonDetail?.name}</div>
                <div>
                    <span className='font-semibold'>hp:</span> {pokemonDetail?.stats[0].base_stat}
                </div>
            </div>
            <img className='w-1/2 h-auto' src={pokemonDetail?.sprites?.other.dream_world.front_default} id='svg-image' />
            <div className='flex items-center justify-between w-full px-2'>
                <div>
                    <div className='font-semibold'>abilities</div>
                    <ul>
                        {pokemonDetail?.abilities?.map((pokemonAbility, index) =>
                            <li key={index}>
                                {pokemonAbility?.ability.name}
                            </li>
                        )}
                    </ul>

                </div>
                <div>
                    <div className='font-semibold'>types</div>
                    <ul>
                        {pokemonDetail?.types?.map((type, index) => <li key={index}>{type.type.name}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}
