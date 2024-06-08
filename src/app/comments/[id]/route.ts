import { redirect } from "next/navigation";
import { comments } from "../data";

export const GET = (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const id = parseInt(params.id);
  if (id > comments.length) {
    redirect("/comments");
  }
  const comment = comments.find((comment) => comment.id === id);
  return Response.json(comment);
};
