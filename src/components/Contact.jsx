import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

export default function () {
  return (
    <div className="flex flex-col items-center mt-20 mb-20">
      <div className="text-white text-5xl font-semibold">
        Contact Me
      </div>

      <div className="w-full max-w-5xl bg-[#111827] p-5 border-2 border-white rounded-lg shadow-lg mt-20 text-white cursor-pointer flex justify-around items-center gap-6 flex-wrap">

        {/* Email */}
        <div className="flex items-center gap-3">
          <CiMail className="text-3xl" />
          <div>
            <h1 className="text-xl font-semibold">Email</h1>
            <p>sutharbhuwan2@gmail.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <CiPhone className="text-3xl" />
          <div>
            <h1 className="text-xl font-semibold">Phone</h1>
            <p>+91 9636388007</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-3">
          <CiLocationOn className="text-3xl" />
          <div>
            <h1 className="text-xl font-semibold">Location</h1>
            <p>Udaipur, Rajasthan</p>
          </div>
        </div>

      </div>
    </div>
  );
}