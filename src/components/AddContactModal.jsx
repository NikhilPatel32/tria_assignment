import { X, Plus , User , Phone , Mail} from "lucide-react";

const AddContactModal = ({ showModal, setShowModal, formData, setFormData, handleAddContact }) => {
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddContact(e);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-opacity-60 backdrop-blur-sm 
    flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="bg-gradient-to-br from-white to-blue-50 
      rounded-3xl shadow-2xl w-full max-w-md p-8 relative transform
      animate-slideUp border border-blue-100">
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-4 right-4 text-gray-400
           hover:text-red-500 hover:rotate-90 transition-all
            duration-300 hover:scale-110 hover:cursor-pointer"
        >
          <X size={24} />
        </button>
        
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600
           rounded-lg">
            <Plus className="text-white" size={24} />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600
           to-indigo-600 bg-clip-text text-transparent">
            Add New Contact
          </h2>
        </div>
        
        <div className="space-y-5">
          <div className="group">
            <label className="block text-gray-700 font-semibold mb-2 
            flex items-center gap-2">
              <User size={16} className="text-blue-600" />
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl
               focus:border-blue-500 focus:ring-4 focus:ring-blue-100
                transition-all outline-none group-hover:border-blue-300"
              placeholder="Enter full name"
            />
          </div>
          
          <div className="group">
            <label className="block text-gray-700 font-semibold mb-2 flex 
            items-center gap-2">
              <Phone size={16} className="text-indigo-600" />
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl
               focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 
               transition-all outline-none group-hover:border-indigo-300"
              placeholder="Enter 10-digit phone"
            />
          </div>
          
          <div className="group">
            <label className="block text-gray-700 font-semibold mb-2 flex 
            items-center gap-2">
              <Mail size={16} className="text-purple-600" />
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl
               focus:border-purple-500 focus:ring-4 focus:ring-purple-100
                transition-all outline-none group-hover:border-purple-300"
              placeholder="Enter email address"
            />
          </div>
          
          <button
            onClick={handleSubmit}
            className="w-full flex items-center justify-center gap-2
             bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
              text-white font-bold py-4 rounded-xl hover:shadow-2xl transform
               hover:scale-105 transition-all duration-300 mt-6 hover:cursor-pointer"
          >
            <Plus size={20} />
            Add Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddContactModal;