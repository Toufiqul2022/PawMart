import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router"; // If you need Edit page
import axios from "axios";
import Swal from "sweetalert2";

const MyServices = () => {
  const [myServices, setMyServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/my-services?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyServices(data);
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
        axios
          .delete(`http://localhost:3000/delete/${id}`)
          .then((res) => {
            const filterData = myServices.filter(
              (service) => service._id !== id
            );
            setMyServices(filterData);

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
    <div className="px-5 md:px-10 my-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        My Services
      </h1>

      {/* If No Services */}
      {myServices.length === 0 && (
        <div className="text-center text-xl text-gray-500 py-16">
          You have not added any services yet.
        </div>
      )}

      <div className="overflow-x-auto shadow-xl rounded-xl">
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
            {myServices.map((service) => (
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

                    <Link to={`/update-services/${service?._id}`}>
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

export default MyServices;
