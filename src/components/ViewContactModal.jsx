import { X, Eye, Phone, Mail, User } from "lucide-react";

const ViewContactModal = ({ showModal, setShowModal, contact }) => {
  if (!showModal || !contact) return null;

  return (
    <div className="fixed inset-0 bg-opacity-60 backdrop-blur-sm flex items-center
     justify-center z-50 p-4 animate-fadeIn">
      <div className="bg-gradient-to-br from-white via-blue-50
       to-indigo-50 rounded-3xl shadow-2xl w-full max-w-md p-8
        relative transform animate-slideUp border border-blue-100">
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-4 right-4 text-gray-400
           hover:text-red-500 hover:rotate-90 transition-all 
           duration-300 hover:scale-110 hover:cursor-pointer"
        >
          <X size={24} />
        </button>

        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-gradient-to-br from-blue-500
           to-indigo-600 rounded-lg">
            <Eye className="text-white" size={24} />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r
           from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Contact Details
          </h2>
        </div>

        <div className="space-y-5">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-2xl border-l-4 border-blue-600 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <User className="text-blue-600" size={20} />
              <p className="text-gray-600 text-sm font-bold uppercase tracking-wide">Name</p>
            </div>
            <p className="text-gray-800 text-xl font-semibold ml-7">
              {contact.name}
            </p>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-5 rounded-2xl border-l-4 border-indigo-600 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <Phone className="text-indigo-600" size={20} />
              <p className="text-gray-600 text-sm font-bold uppercase tracking-wide">Phone</p>
            </div>
            <p className="text-gray-800 text-xl font-semibold ml-7">{contact.phone}</p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-5 rounded-2xl border-l-4 border-purple-600 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <Mail className="text-purple-600" size={20} />
              <p className="text-gray-600 text-sm font-bold uppercase tracking-wide">Email</p>
            </div>
            <p className="text-gray-800 text-lg font-semibold ml-7 break-words">
              {contact.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ViewContactModal;
