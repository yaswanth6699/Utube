import Comment from "./Comment";

// recursive Components
const CommentsList = ({ comments }: any) => {
  return (
    <>
      {comments?.map((item: any) => (
        <>
          <Comment comment={item} />
          <div className="ml-2 border-l-4 pl-2">
            <CommentsList comments={item.replies} />
          </div>
        </>
      ))}
    </>
  );
};
export default CommentsList;
