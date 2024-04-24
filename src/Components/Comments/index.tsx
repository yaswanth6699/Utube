import { NESTED_COMMENTS } from "@/utils/constants";
import React from "react";
import CommentsList from "./CommentsList";

const Comments = () => {
  return (
    <div className="mb-20">
      <h1 className="my-3 font-semibold text-2xl">Comments: </h1>
      <CommentsList comments={NESTED_COMMENTS} />
    </div>
  );
};

export default Comments;
