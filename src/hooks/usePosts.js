import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchPosts, addPost, deletePost, updatePost } from "../api/postsApi";

export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
};

export const useAddPost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addPost,
    onSuccess: (newPost) => {
      queryClient.setQueryData(["posts"], (old) =>
        old ? [...old, newPost] : [newPost]
      );
    },
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deletePost,
    onSuccess: (deletedId) => {
      queryClient.setQueryData(["posts"], (old) =>
        old.filter((p) => p.id !== deletedId)
      );
    },
  });
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updatePost,
    onSuccess: (updated) => {
      queryClient.setQueryData(["posts"], (old) =>
        old.map((p) => (p.id === updated.id ? updated : p))
      );
    },
  });
};
