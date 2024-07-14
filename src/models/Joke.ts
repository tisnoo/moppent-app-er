import { DocumentData, QueryDocumentSnapshot } from "@angular/fire/compat/firestore";


type JokeType = 'joke' | 'riddle';

type AbstractJokeModel = {
  genre: string;
  type: JokeType;
}

interface JokeModelJoke extends AbstractJokeModel {
  type: 'joke';
  joke: string;
}


interface JokeModelRiddle extends AbstractJokeModel {
  type: 'riddle';
  question: string;
  answer: string;
}

type JokeModel = JokeModelJoke | JokeModelRiddle;

export function jokeFromData(doc: QueryDocumentSnapshot<DocumentData>): JokeModel {
  const data = doc.data() as DocumentData;

  const jokeType = data['type'] as JokeType;
  const superProps: AbstractJokeModel = {
    genre: data['genre'],
    type: jokeType,
  }

  switch (jokeType) {
    case 'joke':
      return {
        ...superProps,
        type: 'joke',
        joke: data['joke'],
      }
    case 'riddle': 
      return {
      ...superProps,
        type: 'riddle',
        question: data['question'],
        answer: data['answer'],
      }
  }
}


export {JokeModel, JokeModelJoke, JokeModelRiddle};