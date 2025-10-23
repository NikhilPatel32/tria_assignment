import { useState, useEffect } from "react";
import { Search, Plus } from "lucide-react";
import AddContactModal from "../components/AddContactModal";
import ViewContactModal from "../components/ViewContactModal";
import { contactsData } from "../data/contact";
import toast from 'react-hot-toast';

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
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    } else {
      setContacts(contactsData);
      localStorage.setItem("contacts", JSON.stringify(contactsData));
    }
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
    const newContact = {
      id: Date.now(),
      ...formData,
    };
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
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
    <div className="min-h-screen flex flex-col items-center py-8 px-4">
     
      <div className="mb-8">
        <h1 className="text-blue-600 text-3xl sm:text-4xl md:text-5xl
         lg:text-6xl font-extrabold text-center font-serif">
          Contact List
        </h1>
      </div>

     
      <div className="flex flex-col sm:flex-row justify-between items-center
       w-full max-w-7xl gap-4 mb-6">
       
        <div className="relative w-full sm:w-96">
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2
             text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search contacts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 border-blue-300 rounded-2xl"
          />
        </div>

       
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 bg-linear-to-r from-blue-600
           to-indigo-600 text-white font-semibold px-6 py-3 rounded-2xl
            hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg
         transform hover:scale-96 hover:cursor-pointer transition-all duration-300 whitespace-nowrap"
        >
          <Plus size={20} />
          Add New Contact
        </button>
      </div>

     
      <div className="w-full max-w-7xl overflow-x-auto shadow-xl rounded-lg mb-4">
        <table className="w-full bg-white border-collapse rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-linear-to-r from-blue-600 to-indigo-600 text-white">
              <th className="px-6 py-4 text-center text-sm sm:text-base font-semibold
               uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-4 text-center text-sm sm:text-base font-semibold uppercase
               tracking-wider">
                Phone
              </th>
              <th className="px-6 py-4 text-center text-sm sm:text-base font-semibold
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
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-blue-100 hover:shadow-lg hover:scale-[1.02]
                   transition-all duration-300 ease-in-out cursor-pointer 
                   border-b border-gray-200 text-center`}
                >
                  <td className="px-6 py-4 text-sm sm:text-base text-gray-800
                   font-medium">
                    {contact.name}
                  </td>
                  <td className="px-6 py-4 text-sm sm:text-base text-gray-600">
                    {contact.phone}
                  </td>
                  <td className="px-6 py-4 text-sm sm:text-base text-gray-600">
                    {contact.email}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="px-6 py-8 text-center text-gray-500">
                  No contacts found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    
      {filteredContacts.length > 0 && (
        <div className="flex flex-col sm:flex-row items-center
         justify-between w-full max-w-7xl gap-4">
          <p className="text-gray-600 text-sm sm:text-base">
            Showing {startIndex + 1} to {Math.min(endIndex, filteredContacts.length)} of{" "}
            {filteredContacts.length} contacts
          </p>
          <div className="flex gap-2">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-semibold transition-all 
                ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700 hover:cursor-pointer"
              }`}
            >
              Previous
            </button>
            <span className="px-4 py-2 bg-gray-100 rounded-lg font-semibold">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg font-semibold transition-all
                 ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700 hover:cursor-pointer"
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
