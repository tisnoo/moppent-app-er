import { FirestoreDataConverter, DocumentData, QueryDocumentSnapshot } from "@angular/fire/firestore";

interface GenreModel {
  id: string;
  name: string;
}

const genreConverter: FirestoreDataConverter<GenreModel> = {
  toFirestore(genre: GenreModel): DocumentData {
    return { ...genre };
  },
  fromFirestore(snapshot: QueryDocumentSnapshot): GenreModel {
    const data = snapshot.data() as DocumentData;
    return {
      id: snapshot.id,
      name: data['name'],
    };
  }
};


export {genreConverter, GenreModel};