import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
   const { data } = useData();
   const [index, setIndex] = useState(0);
   const byDateDesc = data?.focus.sort((evtA, evtB) =>
      // Tri images de la plus ancienne à la plus récente
      new Date(evtA.date) > new Date(evtB.date) ? -1 : 1
   );
   const nextCard = () => {
      setTimeout(
         // Ajouter -1 à la longueur du tableau pour débuter avec un index à 0
         () => setIndex(index < byDateDesc.length - 1 ? index + 1 : 0),
         5000
      );
   };
   useEffect(() => {
      nextCard();
   });
   return (
      <div className="SlideCardList">
         {byDateDesc?.map((event, idx) => (
            <>
               <div
                  // Utiliser id pour que key soit unique à chaque image
                  key={event.id}
                  className={`SlideCard SlideCard--${
                     index === idx ? "display" : "hide"
                  }`}>
                  {/* Utiliser titre de l'évènement pour l'attribut alt */}
                  <img src={event.cover} alt={event.title} />
                  <div className="SlideCard__descriptionContainer">
                     <div className="SlideCard__description">
                        <h3>{event.title}</h3>
                        <p>{event.description}</p>
                        <div>{getMonth(new Date(event.date))}</div>
                     </div>
                  </div>
               </div>
               <div className="SlideCard__paginationContainer">
                  <div className="SlideCard__pagination">
                     {byDateDesc.map((_, radioIdx) => (
                        <input
                           // Utiliser id pour une key unique
                           key={`${event.id}`}
                           type="radio"
                           name="radio-button"
                           // Remplacer idx par index pour indiquer l'image actuelle
                           checked={index === radioIdx}
                        />
                     ))}
                  </div>
               </div>
            </>
         ))}
      </div>
   );
};

export default Slider;
