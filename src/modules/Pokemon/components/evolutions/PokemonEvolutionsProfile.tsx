import { Color } from '../../../Home/interfaces/Color';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
export const PokemonEvolutionProfile = (): JSX.Element => {
  return (
    <>
      <div className="text-white flex flex-col items-center">
        <div
          className="p-6 rounded-full border-white border-4 h-36 w-36 bg-opacity-10 mb-3"
          style={{
            backgroundColor: '#616161',
            boxShadow: '0px 2px 8px 0px #000000'
          }}
        >
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/060.png"
            alt=""
            className="bg-transparent object-cover"
          />
        </div>
        <div className="flex flex-col">
          <p>
            <span className="font-bold">Pikachu</span> N.° 0001
          </p>
          <ul className="flex flex-wrap justify-center">
            <li
              className={`text-gray-500 rounded px-5 py-0 text-[12px] mr-2 mt-2`}
              style={{
                background: Color.grass.background,
                color: Color.grass.text
              }}
            >
              <span>{capitalizeFirstLetter('Psíquico')}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
