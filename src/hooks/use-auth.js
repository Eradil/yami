import { useSelector } from "react-redux/es/exports";

export function useAuth() {
  const { email, id, token } = useSelector((state) => state.user);

  return {
    isAuth: !!email,
    email,
    id,
    token,
  };
}
