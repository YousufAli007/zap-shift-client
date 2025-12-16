import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";

export default function Raider() {
  const axiosSecure =useAxiosSecure()

  const { register,handleSubmit } = useForm();
  const handleRiderRagister =(data)=>{
    axiosSecure.post('/raiders', data)
    .then(res =>{
      if(res.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your requst submit success",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-black text-gray-800">
            Be a <span className="text-orange-500">Rider</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 py-8">
            <h2 className="text-3xl font-bold text-white text-center">
              Tell us about yourself
            </h2>
          </div>

          <form onSubmit={handleSubmit(handleRiderRagister)} className="p-8 space-y-7">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="mt-2 input input-bordered w-full h-12 text-lg"
                {...register("name")}
              />
            </div>

            {/* License */}
            <div>
              <label className="block text-gray-700 font-medium">
                Driving License Number
              </label>
              <input
                type="text"
                placeholder="Driving License Number"
                className="mt-2 input input-bordered w-full h-12 text-lg"
                {...register("license")}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="mt-2 input input-bordered w-full h-12 text-lg"
                {...register("email")}
              />
            </div>

            {/* Region & District */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium">
                  Your Region
                </label>
                <select
                  className="mt-2 select select-bordered w-full h-12 text-lg"
                  {...register("region")}
                >
                  <option value="">Select your Region</option>
                  <option>Dhaka</option>
                  <option>Chattogram</option>
                  <option>Sylhet</option>
                  <option>Rajshahi</option>
                  <option>Khulna</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium">
                  Your District
                </label>
                <select
                  className="mt-2 select select-bordered w-full h-12 text-lg"
                  {...register("district")}
                >
                  <option value="">Select your District</option>
                  <option>Dhaka</option>
                  <option>Gazipur</option>
                  <option>Narayanganj</option>
                </select>
              </div>
            </div>

            {/* NID */}
            <div>
              <label className="block text-gray-700 font-medium">NID No</label>
              <input
                type="text"
                placeholder="NID No"
                className="mt-2 input input-bordered w-full h-12 text-lg"
                {...register("nid")}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="01xxxxxxxxx"
                className="mt-2 input input-bordered w-full h-12 text-lg"
                {...register("phone")}
              />
            </div>

            {/* Bike Info */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium">
                  Bike Brand Model and Year
                </label>
                <input
                  type="text"
                  placeholder="e.g. Yamaha R15 - 2023"
                  className="mt-2 input input-bordered w-full h-12 text-lg"
                  {...register("bikeModel")}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">
                  Bike Registration Number
                </label>
                <input
                  type="text"
                  placeholder="Dhaka-Metro-Ga-12-3456"
                  className="mt-2 input input-bordered w-full h-12 text-lg"
                  {...register("bikeReg")}
                />
              </div>
            </div>

            {/* About Yourself */}
            <div>
              <label className="block text-gray-700 font-medium">
                Tell Us About Yourself
              </label>
              <textarea
                placeholder="Why do you want to join us? Any experience?"
                rows="4"
                className="mt-2 textarea textarea-bordered w-full text-lg"
                {...register("about")}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-warning w-full h-14 text-xl font-bold text-white hover:btn-error transform hover:scale-105 transition"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
