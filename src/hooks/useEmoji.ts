import { useState, useEffect } from "react";
import axios from "axios";

interface IEmojiResult {
  name: string;
  category: string;
  group: string;
  htmlCode: string;
  unicode: string;
}

const useEmoji = () => {
  const [emoji, setEmoji] = useState<IEmojiResult | null>(null);
  const [clicked, setClicked] = useState<boolean>(false);

  const changeEmoji = async () => {
    setClicked((prev) => !prev);
  };

  useEffect(() => {
    const fetchEmoji = async () => {
      const { data, status } = await axios.get(
        "https://emojihub-1001447344924.asia-southeast2.run.app/api/random"
      );

      if (status === 200) {
        setEmoji(data as IEmojiResult);
        console.log(data);
      }
    };

    fetchEmoji();
  }, [clicked]);

  return { emoji, changeEmoji };
};

export default useEmoji;
