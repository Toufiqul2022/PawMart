import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import useAdmin from "../hooks/useAdmin";

const DashboardHome = () => {
  const navigate = useNavigate();
  const [isAdmin, adminLoading] = useAdmin();

  useEffect(() => {
    if (adminLoading) return;
    navigate(isAdmin ? "/dashboard/all-listing" : "/dashboard/add-listing", { replace: true });
  }, [isAdmin, adminLoading, navigate]);

  return (
    <div className="flex justify-center items-center h-64">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </div>
  );
};

export default DashboardHome;
