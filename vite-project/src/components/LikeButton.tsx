import { useMutation } from "@tanstack/react-query";
import { supabase } from "../supabase-client";
import { useAuth } from "../contexts/AuthContext";

interface Props {
    postId: number;
}

const vote = async (voteValue: number, postId: number, userId: string) => {
    const { error } = await supabase.from("votes").insert({post_id: postId, user_id: userId, vote: voteValue})
     
    if (error) throw new Error(error.message)
}

export const LikeButton = ({ postId }: Props) => {

    const { user } = useAuth();

    const { mutate } = useMutation({
        mutationFn: (voteValue: number) => {

        if (!user) throw new Error ("you must be logged in to Vote !");
        return vote(voteValue, postId, user.id)}})
    return (
        <div>
            <button onClick={() => mutate(1)}> 👍 </button>
            <button onClick={() => mutate(-1)}> 👎 </button>
        </div>
    )
}