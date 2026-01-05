import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";
import api from "../utils/api";
import Swal from "sweetalert2";

const MyListing = () => {
  const [MyListing, setMyListing] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.email) return;

    api
      .get(`/my-services?email=${user.email}`)
      .then((res) => {
        setMyListing(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching my-services:", error);
        setLoading(false);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        api
          .delete(`/delete/${id}`)
          .then((res) => {
            console.log(res);
            const filterData = MyListing.filter(
              (service) => service._id !== id
            );
            setMyListing(filterData);

            Swal.fire({
              title: "Deleted!",
              text: "Service has been removed.",
              icon: "success",
            });
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
              title: "Failed!",
              text: "Something went wrong.",
              icon: "error",
            });
          });
      }
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="relative px-5 md:px-10 py-10 overflow-hidden bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 min-h-screen">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-white/5 rounded-full animate-ping"></div>
      <h1 className="text-3xl font-bold text-center mb-8">My Services</h1>

      {MyListing.length === 0 && (
        <div className="text-center text-xl text-gray-500 py-16">
          You have not added any services yet.
        </div>
      )}

      <div className="max-w-7xl mx-auto overflow-x-auto shadow-xl rounded-xl">
        <table className="table table-zebra">
          <thead className="bg-gray-800 text-white text-lg">
            <tr>
              <th className="py-4">Service</th>
              <th>Description</th>
              <th>Price</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {MyListing.map((service) => (
              <tr key={service._id} className="hover">
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-14 w-14">
                        <img src={service.image} alt={service.name} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-lg">{service.name}</div>
                      <div className="text-sm opacity-50">
                        {service.category}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="max-w-xs text-gray-600">
                  {service.description}
                </td>

                <td className="font-semibold">${service.price}</td>

                <td>
                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={() => {
                        handleDelete(service?._id);
                      }}
                      className="btn btn-error btn-sm px-5"
                    >
                      Delete
                    </button>

                    <Link to={`/dashboard/update-services/${service?._id}`}>
                      <button className="btn btn-primary btn-sm px-5">
                        Edit
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyListing;
