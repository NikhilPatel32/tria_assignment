import { X, Plus } from "lucide-react";

const AddContactModal = ({ showModal, setShowModal, formData, setFormData, handleAddContact }) => {
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex
     items-center justify-center z-50 p-4">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative">
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600
          hover:cursor-pointer transition-colors"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Add New Contact</h2>
        
        <form onSubmit={handleAddContact} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg "
              placeholder="Enter name"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              pattern="[0-9]{10}"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg "
              placeholder="Enter 10-digit phone"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg"
              placeholder="Enter email"
            />
          </div>
          
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-linear-to-r
             from-blue-600 to-indigo-600 text-white font-semibold py-3
              rounded-lg hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg
             transform hover:scale-[1.02] transition-all duration-300
             hover:cursor-pointer"
          >
            <Plus size={20} />
            Add Contact
          </button>
        </form>
      </div>
      
    </div>
  );
};

export default AddContactModal;

