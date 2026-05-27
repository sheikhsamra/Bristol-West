import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Users, FileText, Calendar, MapPin, Phone, Mail } from "lucide-react";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("quotes");
  const [selectedQuote, setSelectedQuote] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
        navigate("/login");
        return;
    }
    const user = JSON.parse(storedUser);
    if (user.role !== "admin") {
        alert("Access Denied: Admin privileges required.");
        navigate("/");
        return;
    }

    const fetchData = async () => {
      try {
        const API_URL = 'http://localhost:5000';
        const config = { headers: { 'x-user-role': user.role } };
        const [usersRes, quotesRes] = await Promise.all([
          axios.get(`${API_URL}/api/admin/users`, config),
          axios.get(`${API_URL}/api/admin/quotes`, config)
        ]);
        setUsers(usersRes.data);
        setQuotes(quotesRes.data);
      } catch (error) {
        console.error("Error fetching admin data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [navigate]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      const API_URL = 'http://localhost:5000';
      const storedUser = JSON.parse(localStorage.getItem("user"));
      const config = { headers: { 'x-user-role': storedUser.role } };
      await axios.put(`${API_URL}/api/admin/quotes/${id}`, { status: newStatus }, config);
      
      setQuotes(quotes.map(q => q._id === id ? { ...q, referralStatus: newStatus } : q));
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update status");
    }
  };

  const filteredQuotes = quotes.filter(q => 
    q.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) || 
    q.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    q.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredUsers = users.filter(u => 
    u.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) || 
    u.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00a98f]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 md:px-8 pt-24 pb-20">
      {/* Detail Modal */}
      {selectedQuote && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <h2 className="text-2xl font-black text-slate-800 mb-6">Full Quote Details</h2>
            <div className="space-y-4 text-slate-600">
              <p><strong>Name:</strong> {selectedQuote.firstName} {selectedQuote.lastName}</p>
              <p><strong>Email:</strong> {selectedQuote.email}</p>
              <p><strong>Phone:</strong> {selectedQuote.phone}</p>
              <p><strong>DOB:</strong> {selectedQuote.dob}</p>
              <p><strong>Zip:</strong> {selectedQuote.zipCode}</p>
              <p><strong>Address:</strong> {selectedQuote.address}, {selectedQuote.unit}</p>
              <p><strong>City:</strong> {selectedQuote.city}</p>
              <p><strong>Status:</strong> {selectedQuote.referralStatus}</p>
              <p><strong>Submitted:</strong> {new Date(selectedQuote.createdAt).toLocaleString()}</p>
            </div>
            <button onClick={() => setSelectedQuote(null)} className="mt-8 w-full py-3 bg-slate-800 text-white rounded-xl font-bold">Close</button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <h1 className="text-4xl font-black text-[#00a98f] tracking-tight">
              Admin <span className="text-[#ff5100]">Dashboard</span>
            </h1>
            <p className="text-slate-500 font-medium mt-1 border-l-4 border-[#ff5100] pl-4">
              Manage your insurance leads and user accounts.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative flex-1 sm:w-64">
              <input 
                type="text" 
                placeholder="Search leads or users..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white border-2 border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#00a98f] focus:border-[#00a98f] outline-none transition-all shadow-sm"
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00a98f]">
                <Users size={18} />
              </div>
            </div>

            <div className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200">
              <button 
                onClick={() => setActiveTab("quotes")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold transition-all ${activeTab === "quotes" ? "bg-[#00a98f] text-white shadow-lg shadow-emerald-100" : "text-slate-400 hover:text-[#00a98f]"}`}
              >
                <FileText size={16} /> Leads
              </button>
              <button 
                onClick={() => setActiveTab("users")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold transition-all ${activeTab === "users" ? "bg-[#00a98f] text-white shadow-lg shadow-emerald-100" : "text-slate-400 hover:text-[#00a98f]"}`}
              >
                <Users size={16} /> Users
              </button>
            </div>
          </div>
        </div>

        {activeTab === "quotes" ? (
          <div className="grid grid-cols-1 gap-6">
            {filteredQuotes.map((quote) => (
              <div key={quote._id} className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-50 text-[#00a98f] rounded-full flex items-center justify-center">
                      <FileText size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">{quote.firstName} {quote.lastName}</h3>
                      <p className="text-sm text-slate-400 flex items-center gap-1">
                        <Calendar size={14} /> Submitted on {new Date(quote.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  
                  <select 
                    value={quote.referralStatus || "Processing"}
                    onChange={(e) => handleStatusChange(quote._id, e.target.value)}
                    className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-slate-200 cursor-pointer ${
                        quote.referralStatus === 'Approved' ? 'bg-emerald-100 text-emerald-700' : 
                        quote.referralStatus === 'Rejected' ? 'bg-red-100 text-red-700' : 'bg-amber-50 text-amber-600'
                    }`}
                  >
                    <option value="Processing">Processing</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Special Attention Required">Special Attention Required</option>
                  </select>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                   <div className="text-xs text-slate-400">
                      Account: <span className="font-bold text-slate-600">{quote.userId?.email || "Guest"}</span>
                   </div>
                   <button 
                    onClick={() => setSelectedQuote(quote)}
                    className="text-[#00a98f] font-bold text-sm hover:underline"
                   >
                     View Full Details &rarr;
                   </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Name</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Email</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Phone</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Joined</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filteredUsers.map((u) => (
                  <tr key={u._id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-6 font-bold text-slate-800">{u.fullName}</td>
                    <td className="px-8 py-6 text-slate-600">{u.email}</td>
                    <td className="px-8 py-6 text-slate-600">{u.phone || "N/A"}</td>
                    <td className="px-8 py-6 text-slate-400 text-sm">{new Date(u.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
