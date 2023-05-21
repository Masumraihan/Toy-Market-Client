import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `LearnLab ${title}`;
  }, [title]);
};

export default useTitle;
