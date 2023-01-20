import { Box } from "@mui/material";
import React from "react";

import Post from "./Post";

const FEED_DATA = [
  {
    id: 1,
    username: "Ronish Lopxhan",
    image:
      "https://i.pinimg.com/originals/24/55/7c/24557c96fde976aa0164c2b341a6b55b.jpg",
    text: "Spoken like a true leader. But since your failure as a leader is a virtual certainty, tolerating your short reign as CEO in exchange for a front-row seat to the disaster seems fair. Plus, if Im wrong, which Im not, I get rich. So I'm down with it, Dinesh.",
  },
  {
    id: 2,
    username: "Ronish Lopxhan",
    image:
      "https://i.pinimg.com/originals/24/55/7c/24557c96fde976aa0164c2b341a6b55b.jpg",
    text: "Spoken like a true leader. But since your failure as a leader is a virtual certainty, tolerating your short reign as CEO in exchange for a front-row seat to the disaster seems fair. Plus, if Im wrong, which Im not, I get rich. So I'm down with it, Dinesh.",
  },
  {
    id: 3,
    username: "Bertram Gilfoyle, Silicon Vally",
    image:
      "https://i.pinimg.com/736x/89/16/67/8916678cc9a2944f41f8988e2a4188fd.jpg",
    text: "Spoken like a true leader. But since your failure as a leader is a virtual certainty, tolerating your short reign as CEO in exchange for a front-row seat to the disaster seems fair. Plus, if Im wrong, which Im not, I get rich. So I'm down with it, Dinesh.",
  },
];

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      {FEED_DATA.map((item) => (
        <Post
          key={item.id}
          username={item.username}
          image={item.image}
          text={item.text}
        />
      ))}
    </Box>
  );
};

export default Feed;
