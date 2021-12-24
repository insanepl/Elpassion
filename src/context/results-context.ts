import React from "react";

const ResultsContext = React.createContext({
  name: "",
  login: "",
  avatar: "",
  id: 0,
  bio: "",
  location: "",
  followers: 0,
  following: 0,
  starred: 0,
  full_name: "",
  description: "",
  language: "",
  updated: "",
  watchers: 0,
});

export default ResultsContext;
