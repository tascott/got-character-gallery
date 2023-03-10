import characterJson from '../data/characterData.json';
import Character from './Character';

function CharacterGallery() {
  return (
    <div className="component-char-gallery" data-test="component-char-gallery">
          {characterJson.map((character) => (
              <Character key={character._id} character={character} />
            ))}
    </div>
  );
}

export default CharacterGallery;
