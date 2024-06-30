import { DocumentData, QueryDocumentSnapshot } from "@angular/fire/compat/firestore";


type JokeType = 'joke';

type AbstractJokeModel = {
  genre: string;
  type: JokeType;
}

interface JokeModel extends AbstractJokeModel {
  type: 'joke';
  joke: string;
}

type Joke = JokeModel;

export function jokeFromData(doc: QueryDocumentSnapshot<DocumentData>): JokeModel {
  const data = doc.data() as DocumentData;

  const jokeType = data['type'] as JokeType;
  const superProps: AbstractJokeModel = {
    genre: data['genre'],
    type: jokeType,
  }

  return {
    ...superProps,
    joke: data['joke'],
  }
}


export {Joke};