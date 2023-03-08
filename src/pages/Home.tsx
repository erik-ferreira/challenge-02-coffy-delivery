import { Tag } from "../components/Tag";
import { Topic } from "../components/Topic";
import { CoffeeCard } from "../components/CoffeeCard";

import coffeeBackground from "../assets/coffee.png";

import { listTopics, listFilterCoffee, coffees } from "../utils/defaults";

export function Home() {
  return (
    <>
      <div className="bg-img-opacity">
        <div className="max-w-[1120px] w-[90%] mx-auto py-20 flex items-center gap-14">
          <div>
            <h1 className="font-cursive font-extrabold text-5xl leading-[1.3] text-brow-900">
              Encontre o café perfeito para qualquer hora do dia
            </h1>

            <p className="font-sans text-xl leading-[1.3] text-brow-600 mt-4">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>

            <ul
              className="font-sans text-base leading-[1.3] text-brow-500 
            grid grid-cols-2 gap-5 mt-16"
            >
              {listTopics.map((topic) => (
                <Topic key={topic.id} topic={topic} />
              ))}
            </ul>
          </div>

          <img
            src={coffeeBackground}
            className="w-[476px] h-[360px]"
            alt="Copo com o nome Coffee Delivery e alguns dos ingredientes como próprio grão de café e um coador."
          />
        </div>
      </div>

      <div className="max-w-[1120px] w-[90%] mx-auto">
        <div className="flex items-center justify-between mb-14">
          <h2 className="font-cursive font-extrabold text-[2rem] leading-[1.3] text-brow-600">
            Nossos cafés
          </h2>

          <div className="flex items-center gap-2">
            {listFilterCoffee.map((typeCoffee) => (
              <Tag key={typeCoffee} label={typeCoffee} variant="outline" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-10">
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </div>
    </>
  );
}
