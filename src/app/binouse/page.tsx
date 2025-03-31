import React from 'react';

const Beers = async () => {
 
  return (
    <div>
      <h1>Binouse List</h1>
      <ul className='bg-amber-50 text-stone-800' >
        {beers.map((beer) => (
          <li key={beer.id} className='p-4 border-2'>
            <h2>{beer.name}</h2>
            <p>{beer.price}</p>
            <img src={beer.image} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Beers;