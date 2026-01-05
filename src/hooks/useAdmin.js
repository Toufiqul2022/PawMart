import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import api from "../utils/api";

const useAdmin = () => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  useEffect(() => {
    if (loading) return;

    if (!user?.email) {
      setIsAdmin(false);
      setAdminLoading(false);
      return;
    }

    setAdminLoading(true);
    api
      .get(`/users/admin/${user.email}`)
      .then((res) => {
        setIsAdmin(Boolean(res?.data?.admin));
      })
      .catch(() => {
        setIsAdmin(false);
      })
      .finally(() => setAdminLoading(false));
  }, [user?.email, loading]);

  return [isAdmin, adminLoading];
};

export default useAdmin;
