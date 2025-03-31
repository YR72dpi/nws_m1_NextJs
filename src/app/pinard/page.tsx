import { Loading } from '@/components/loading';
import React, { Suspense } from 'react';
import useSWR from 'swr'

async function getWine() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch("https://api.sampleapis.com/wines/reds");
  return res.json();
}

export async function WineList() {
  const wines = await getWine(); // Attente des données

  return (
    <ul className="bg-amber-50 text-stone-800">
      {wines.map((wine) => (
        <li key={wine.id} className="p-4 border-2">
          <h2>{wine.winery} {wine.wine}</h2>
          <p>{wine.price}</p>
          <img src={wine.image} alt={wine.name} />
        </li>
      ))}
    </ul>
  );
}

export default function BlogPage() {
  return (
    <div>
      <h1>Pinards List</h1>
      <Suspense fallback={<Loading />}>
        <WineList />
      </Suspense>
    </div>
  )
}
