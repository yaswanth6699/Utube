const Comment = ({ comment }: any) => {
  return (
    <>
      <div className="flex items-center gap-2 py-1">
        {comment.logo}
        <div className="flex flex-col">
          <p>{comment.name}</p>
          <p>{comment.text}</p>
        </div>
      </div>
    </>
  );
};

export default Comment;
