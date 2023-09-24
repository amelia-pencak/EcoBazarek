import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import "./Categories.css"
export const Categories = () => {
     const types = ["Owoce", "Warzywa", "Wołowina", "Wieprzowina", "Maleko i przetwory", "Destylaty"];
     const categories = ["Kategoria A", "Kategoria B", "Kategoria A", "Kategoria B"];

     return (
          <div className="left-column">
               <div className="search-box">
                    <MagnifyingGlassIcon className="search-icon" />
                    <input type="text" placeholder="Szukaj..." />
               </div>
               <div className="filter-section">
                    <strong>Typ</strong>
                    {types.map((type, index) => (
                         <label key={index}>
                              <input type="checkbox" name="type" value={type} /> {type}
                         </label>
                    ))}
               </div>
               <div className="filter-section">
                    <strong>Kategorie</strong>
                    {categories.map((category, index) => (
                         <label key={index}>
                              <input type="checkbox" name="category" value={category} /> {category}
                         </label>
                    ))}
               </div>
          </div>
     )
}