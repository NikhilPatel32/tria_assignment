import { useState, useEffect } from "react";
import { Search, Plus, Sparkles } from "lucide-react";
import AddContactModal from "../components/AddContactModal";
import ViewContactModal from "../components/ViewContactModal";
import { contactsData } from "../data/contact";
import toast from "react-hot-toast";

const Home = () => {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    setContacts(contactsData);
  }, []);

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.phone.includes(searchQuery) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredContacts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentContacts = filteredContacts.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const handleAddContact = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email){
    toast.error('All fields are required. Please fill all the fields.')
    return;
    }

    const newContact = {
      id: Date.now(),
      ...formData,
    };
    setContacts([...contacts, newContact]);
    setFormData({ name: "", phone: "", email: "" });
    setShowAddModal(false);

    toast.success('Contact added successfully!');
  };

  const handleViewContact = (contact) => {
    setSelectedContact(contact);
    setShowViewModal(true);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 
    flex flex-col items-center py-12 px-4">

      <div className="mb-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Sparkles className="text-yellow-500" size={32} />
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-black font-serif text-blue-600">
            Contact List
          </h1>
          <Sparkles className="text-yellow-500" size={32} />
        </div>
        <p className="text-gray-600 text-lg font-medium">
          Manage your contacts with style
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center
       w-full max-w-7xl gap-4 mb-8">
        <div className="relative w-full sm:w-96 group">
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2
             text-gray-400 group-hover:text-blue-500 transition-colors"
            size={20}
          />
          <input
            type="text"
            placeholder="Search contacts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200
             rounded-2xl shadow-lg focus:border-blue-500 focus:ring-4
            focus:ring-blue-100 transition-all outline-none hover:shadow-xl"
          />
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-600
           via-indigo-600 to-purple-600 text-white font-bold px-8
            py-4 rounded-2xl hover:shadow-2xl transform hover:scale-105
             transition-all duration-300 whitespace-nowrap hover:cursor-pointer"
        >
          <Plus size={20} />
          Add New Contact
        </button>
      </div>

      <div className="w-full max-w-7xl overflow-hidden shadow-2xl rounded-3xl
       mb-6 border border-gray-200">
        <div className="lg:overflow-x-hidden overflow-x-auto">
          <table className="w-full bg-white">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 via-indigo-600
               to-purple-600 text-white">
                <th className="px-6 py-5 text-center text-base font-bold 
                uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-5 text-center text-base font-bold
                 uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-6 py-5 text-center text-base font-bold 
                uppercase tracking-wider">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {currentContacts.length > 0 ? (
                currentContacts.map((contact, index) => (
                  <tr
                    key={contact.id}
                    onClick={() => handleViewContact(contact)}
                    className={`${
                      index % 2 === 0
                        ? "bg-white"
                        : "bg-gradient-to-r from-blue-50 to-indigo-50"
                    } hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100
                     hover:shadow-lg transform hover:scale-[1.01] transition-all duration-300
                      cursor-pointer border-b border-gray-100 text-center`}
                  >
                    <td className="px-6 py-5 text-base text-gray-800 font-semibold">
                      {contact.name}
                    </td>
                    <td className="px-6 py-5 text-base text-gray-600 font-medium">
                      {contact.phone}
                    </td>
                    <td className="px-6 py-5 text-base text-gray-600 font-medium">
                      {contact.email}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="px-6 py-12 text-center text-gray-400 text-lg"
                  >
                    No contacts found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {filteredContacts.length > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between w-full
         max-w-7xl gap-4">
          <p className="text-gray-600 text-base font-medium bg-white px-6 py-3
           rounded-full shadow-md">
            Showing {startIndex + 1} to{" "}
            {Math.min(endIndex, filteredContacts.length)} of{" "}
            {filteredContacts.length} contacts
          </p>
          <div className="flex gap-3">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`px-6 py-3 rounded-xl font-bold transition-all shadow-md ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-xl hover:scale-105 hover:cursor-pointer"
              }`}
            >
              Previous
            </button>
            <span className="px-6 py-3 bg-white rounded-xl font-bold shadow-md text-gray-700">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`px-6 py-3 rounded-xl font-bold transition-all shadow-md ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-xl hover:scale-105 hover:cursor-pointer"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      )}

      <AddContactModal
        showModal={showAddModal}
        setShowModal={setShowAddModal}
        formData={formData}
        setFormData={setFormData}
        handleAddContact={handleAddContact}
      />

      <ViewContactModal
        showModal={showViewModal}
        setShowModal={setShowViewModal}
        contact={selectedContact}
      />
    </div>
  );
};

export default Home;
