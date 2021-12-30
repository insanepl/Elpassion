import { createContext } from "react";

// type ResultType = {
//   name: string;
//   login: string;
//   avatar: string;
//   id: number;
//   bio: string;
//   location: string;
//   followers: number;
//   following: number;
//   starred: number;
//   full_name: string;
//   description: string;
//   language: string;
//   updated: string;
//   watchers: number;
// };

// type InitialStateType = {
//   results: ResultType[];
// };

// const initialState = { results: ['123123123'] };

const ResultsContext = createContext<any>([]);

export default ResultsContext;
