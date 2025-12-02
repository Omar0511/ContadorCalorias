import { useState, ChangeEvent } from "react";
import { categories } from "../data/categories"

export default function Form() {
  const [activity, setActivity] = useState({
    category: 1,
    name: '',
    calories: 0
  });

  // const handleOnChange = (e) => {
  const handleOnChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    // console.log('Algo cambio...', e.target);
    // console.log('Algo cambio...', e.target.value);

    setActivity({
      ...activity,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category">Categoría:</label>

        <select
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          id="category"
          value={activity.category}
          onChange={handleOnChange}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-bold">
          Actividad:
        </label>

        <input
          className="border border-slate-300 p-2 rounded-lg"
          type="text"
          id="name"
          placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta"
          value={activity.name}
          onChange={handleOnChange}
        />
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">
          Calorías:
        </label>

        <input
          className="border border-slate-300 p-2 rounded-lg"
          type="number"
          name="calories"
          id="calories"
          placeholder="Calorías. ej. 300 ó 500"
          value={activity.calories}
          onChange={handleOnChange}
        />
      </div>

      <input
        className="bg-gray-800 hover:bg-gray-700 w-full p-2 font-bold uppercase text-white cursor-pointer"
        type="submit"
        value="Guardar Comida o Guardar Ejercicio"
      />
    </form>
  );
};
