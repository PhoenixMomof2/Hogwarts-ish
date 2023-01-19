import { useState, useEffect } from 'react';

const useFetch = () => {
  const [wizards, setWizards] = useState(null);
  const [isPending, setIsPending] = useState(true)

  useEffect(() => {
    fetch('http://localhost:9292/wizards')
    .then(res => {
      if(!res.ok) {
        throw Error('could not fetch the data fro that resource');
      }
      return res.json();
    })
    .then(wizards => {
      setWizards(wizards);
      setIsPending(false);
      setError(null);
    })
    .catch(err => {
      setIsPending(false);
      setError(err.message);
    })
  }, [])
};

export default useFetch;