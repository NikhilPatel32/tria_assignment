import { X, Eye, Phone, Mail, User } from "lucide-react";

const ViewContactModal = ({ showModal, setShowModal, contact }) => {
  if (!showModal || !contact) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50
     flex items-center justify-center z-50 p-4">

      <div className="bg-white rounded-2xl shadow-2xl w-full
       max-w-md p-6 relative">
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600
           transition-colors hover:cursor-pointer"
        >
          <X size={24} />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <Eye className="text-blue-600" size={28} />
          <h2 className="text-2xl font-bold text-blue-600">Contact Details</h2>
        </div>

        <div className="space-y-4">
          <div
            className="bg-linear-to-r from-blue-50 to-indigo-50 p-4 
          rounded-lg border-l-4 border-blue-600"
          >
            <div className="flex items-center gap-2 mb-1">
              <User className="text-blue-600" size={18} />
              <p className="text-gray-600 text-sm font-semibold">Name</p>
            </div>
            <p className="text-gray-800 text-lg font-medium ml-6">
              {contact.name}
            </p>
          </div>

          <div
            className="bg-linear-to-r from-blue-50 to-indigo-50 p-4 
          rounded-lg border-l-4 border-indigo-600"
          >
            <div className="flex items-center gap-2 mb-1">
              <Phone className="text-indigo-600" size={18} />
              <p className="text-gray-600 text-sm font-semibold">Phone</p>
            </div>
            <p className="text-gray-800 text-lg ml-6">{contact.phone}</p>
          </div>

          <div className="bg-linear-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border-l-4 border-purple-600">
            <div className="flex items-center gap-2 mb-1">
              <Mail className="text-purple-600" size={18} />
              <p className="text-gray-600 text-sm font-semibold">Email</p>
            </div>
            <p className="text-gray-800 text-lg ml-6 wrap-break-word">
              {contact.email}
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ViewContactModal;
