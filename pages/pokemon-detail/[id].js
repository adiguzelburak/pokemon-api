import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Card from '../../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { pokemonActions } from '../../redux/pokemon/pokemonSlice';

export default function PokemonDetail() {
    const router = useRouter();
    const { id } = router.query;
    const dispatch = useDispatch();
    const pokemonDetail = useSelector(state => state.pokemon.pokemonDetailList[id]);

    useEffect(() => {
        if (id) {
            dispatch(pokemonActions.getPokemonByIdRequest({ id: id }))
        }
    }, [id])

    return (
        <div className='flex flex-col items-center w-full mx-auto px-2 h-screen justify-center space-y-3'>
            <Link href={"/"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </Link>
            <Card pokemonDetail={pokemonDetail} />
        </div>
    )
}

