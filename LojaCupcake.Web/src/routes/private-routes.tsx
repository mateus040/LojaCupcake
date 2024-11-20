import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthValidation, useAuthCheck } from "../hooks/use-auth-check";

interface Props {
  children: React.ReactNode;
}

export default function PrivateRoute({ children }: Props) {
  const navigate = useNavigate();
  const authValidation: AuthValidation = useAuthCheck();

  useEffect(() => {
    if (!authValidation.hasToken) {
      navigate("/login");
    } else if (authValidation.expired) {
      navigate("/login");
      toast.error("Sua sessão expirou faça login novamente");
    }
  }, [authValidation, navigate]);

  return (
    <>
      {!authValidation.hasToken && <Navigate to="/login" replace />}
      {authValidation.hasToken && children}
    </>
  );
}
