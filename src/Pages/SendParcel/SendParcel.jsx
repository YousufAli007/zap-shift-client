import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useAuth from "../../Hook/useAuth";
// import { useLoaderData } from "react-router";

const SendParcel = () => {
  const cost = 120;
  const {user}= useAuth()
  // console.log(user)
  const  axiosSecure  = useAxiosSecure();
 
  // const serviceCenters =useLoaderData()
  // // const region =serviceCenters.map(c => c.region)
   
  const {register,handleSubmit,
    // formState:{errors}
  }=useForm()
  // console.log(register);
  
  const handleSendPercel =(data)=>{
    data.cost =cost
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "ok",
  }).then((result) => {
    if (result.isConfirmed) {
     axiosSecure.post("/parcels", data).then((res) => {
       console.log("after add data", res.data);
     });
    }
  });
  }
  return (
    <form
      onSubmit={handleSubmit(handleSendPercel)}
      className="shadow:md bg-white my-10 rounded-2xl px-6 py-10"
    >
      {/* Title */}
      <h1 className="text-4xl font-bold mb-2">Send A Parcel</h1>
      <p className="text-lg font-medium mb-8">Enter your parcel details</p>

      {/* Document / Non Document */}
      <div className="flex items-center gap-6 mb-10">
        <label className="label cursor-pointer flex items-center gap-2">
          <input
            defaultChecked
            type="radio"
            {...register("document")}
            value="document"
            className="radio radio-success"
          />
          <span className="label-text">Document</span>
        </label>

        <label className="label cursor-pointer flex items-center gap-2">
          <input
            type="radio"
            {...register("document")}
            value="non-document"
            className="radio radio-success"
          />
          <span className="label-text">Non-Document</span>
        </label>
      </div>

      {/* Parcel Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <label className="font-semibold mb-1 block">Parcel Name</label>
          <input
            type="text"
            name="parcelName"
            {...register("parcelName", { required: true })}
            placeholder="Parcel Name"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="font-semibold mb-1 block">Parcel Weight (KG)</label>
          <input
            type="number"
            name="parcelWeight"
            {...register("parcelWeight")}
            placeholder="Parcel Weight (KG)"
            className="input input-bordered w-full"
            required
          />
        </div>
      </div>

      {/* Sender + Receiver Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mb-12">
        {/* Sender */}
        <div>
          <h2 className="text-xl font-bold mb-4">Sender Details</h2>

          <label className="block font-semibold mb-1">Sender Name</label>
          <input
            name="senderName"
            {...register("senderName")}
            className="input input-bordered w-full mb-3"
            placeholder="Sender Name"
            defaultValue={user?.displayName}
            required
          />
          {/* serder email */}
          <label className="block font-semibold mb-1">Sender Email</label>
          <input
            name="senderEmail"
            {...register("senderEmail")}
            className="input input-bordered w-full mb-3"
            placeholder="Sender Email"
            defaultValue={user?.email}
            required
          />

          <label className="block font-semibold mb-1">Address</label>
          <input
            name="senderAddress"
            {...register("senderAddress")}
            className="input input-bordered w-full mb-3"
            placeholder="Address"
            required
          />

          <label className="block font-semibold mb-1">Sender Phone No</label>
          <input
            name="senderPhone"
            {...register("senderPhone")}
            className="input input-bordered w-full mb-3"
            placeholder="Sender Phone No"
            required
          />

          <label className="block font-semibold mb-1">Your District</label>
          <input
            name="senderDistrit"
            {...register("senderDistrit")}
            className="input input-bordered w-full mb-3"
            placeholder="sender Distrit"
            required
          />

          <label className="block font-semibold mb-1">Pickup Instruction</label>
          <textarea
            name="pickupInstruction"
            {...register("pickupInstruction")}
            className="textarea textarea-bordered w-full"
            placeholder="Pickup Instruction"
          ></textarea>
        </div>

        {/* Receiver */}
        <div>
          <h2 className="text-xl font-bold mb-4">Receiver Details</h2>

          <label className="block font-semibold mb-1">Receiver Name</label>
          <input
            name="receiverName"
            {...register("receiverName")}
            className="input input-bordered w-full mb-3"
            placeholder="Receiver Name"
            required
          />
          {/* serder email */}
          <label className="block font-semibold mb-1">Receiver Email</label>
          <input
            name="receiverEmail"
            {...register("receiverEmail")}
            className="input input-bordered w-full mb-3"
            placeholder="Receiver Email"
            required
          />

          <label className="block font-semibold mb-1">Receiver Address</label>
          <input
            name="receiverAddress"
            {...register("receiverAddress")}
            className="input input-bordered w-full mb-3"
            placeholder="Address"
            required
          />

          <label className="block font-semibold mb-1">
            Receiver Contact No
          </label>
          <input
            name="receiverContact"
            {...register("receiverContact")}
            className="input input-bordered w-full mb-3"
            placeholder="Receiver Contact No"
            required
          />

          <label className="block font-semibold mb-1">Receiver District</label>
          <input
            name="receiverDistrict"
            {...register("receiverDistrict")}
            className="input input-bordered w-full mb-3"
            placeholder="Reciver Distrit"
            required
          />

          <label className="block font-semibold mb-1">
            Delivery Instruction
          </label>
          <textarea
            name="deliveryInstruction"
            {...register("deliveryInstruction")}
            className="textarea textarea-bordered w-full"
            placeholder="Delivery Instruction"
          ></textarea>
        </div>
      </div>

      {/* Pickup Note */}
      <p className="text-sm mb-6">* PickUp Time 4pm–7pm Approx.</p>

      {/* Button */}
      <input
        type="submit"
        className="btn bg-primary text-black font-semibold"
        value="Proceed to Confirm Booking"
      />
    </form>
  );
};

export default SendParcel;
