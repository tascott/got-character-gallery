function Character(props) {
    return (
      <div className="component-character" data-test="component-character" key={props._key}>
            <div className="character-name" data-test="char-name">
                <h2>{props.name}</h2>
            </div>
            <div className="character-image" data-test="char-img">
                <img src="https://via.placeholder.com/150" alt="character" />
            </div>
            <ul className="char-list" data-test="char-list">
                <li className="char-birth" data-test="char-birth">Date of Birth: {props.birth}</li>
                <li className="char-death" data-test="char-death">Date of Death: {props.death}</li>
                <li className="char-race" data-test="char-race">Race: {props.race}</li>
                <li className="char-realm" data-test="char-realm">Realm: {props.realm}</li>
                <li className="char-spouse" data-test="char-spouse">Spouse: {props.spouse}</li>
            </ul>
      </div>
    );
  }

  export default Character;
