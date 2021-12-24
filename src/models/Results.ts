interface Results {
  result: {
    name?: string;
    login?: string;
    avatar?: string;
    id: number;
    bio?: string;
    location?: string;
    followers?: number;
    following?: number;
    starred?: number;
    full_name?: string;
    description?: string;
    language?: string;
    updated?: string;
    watchers?: number;
  };
}

export default Results;
