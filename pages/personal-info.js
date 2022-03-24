import { useState } from "react";

import { getDistricts } from "../utils/formData";

import useValidateUser from "../hooks/users/useValidateUser";

export default function PersonalInfo({ user, userSession }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [familyMembers, setFamilyMembers] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [provinceNo, setProvinceNo] = useState("1");
  const [tole, setTole] = useState("");

  const districts = getDistricts(provinceNo);

  const [district, setDistrict] = useState(districts[0]);

  const mutation = useValidateUser();
  const email = userSession.current.email;

  const handleSubmit = (event) => {
    event.preventDefault();

    const userInfo = {
      firstName,
      lastName,
      email,
      district,
      familyMembers,
      municipality,
      provinceNo,
      tole,
    };
    mutation.mutate(userInfo, {
      onSuccess: () => {
        console.log("Mutation successful");
      },
    });
  };

  return (
    <>
      <div>
        <div className="flex flex-col">
          <div className="mb-5">
            <h3 className="text-xl font-semibold leading-6 text-gray-900">
              Add personal information for verification
            </h3>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="overflow-hidden">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md "
                      required
                      minLength={3}
                      maxLength={20}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                      minLength={3}
                      maxLength={20}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <input
                      type="text"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md cursor-not-allowed text-gray-600"
                      value={email}
                      disabled
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-700">
                      District
                    </label>
                    <select
                      onChange={(e) => setDistrict(e.target.value)}
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      {districts.map((item, index) => (
                        <option key={index}>{item}</option>
                      ))}
                    </select>
                  </div>

                  <div className="col-span-6">
                    <label className="block text-sm font-medium text-gray-700">
                      Family Members (Seperate by comma)
                    </label>
                    <input
                      type="text"
                      value={familyMembers}
                      onChange={(e) => setFamilyMembers(e.target.value)}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                      minLength={3}
                      maxLength={50}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Municipality
                    </label>
                    <input
                      type="text"
                      placeholder="eg: Budhanilkantha-10"
                      value={municipality}
                      onChange={(e) => setMunicipality(e.target.value)}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                      minLength={3}
                      maxLength={30}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Province no
                    </label>
                    <input
                      type="number"
                      placeholder="eg: 1"
                      value={provinceNo}
                      onChange={(e) => setProvinceNo(e.target.value)}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Tole
                    </label>
                    <input
                      type="text"
                      value={tole}
                      onChange={(e) => setTole(e.target.value)}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                      minLength={3}
                      maxLength={20}
                    />
                  </div>
                </div>
                <div className="mt-7 ml-2 mb-2 text-left ">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
