import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Users, FileText, Calendar, MapPin, Phone, Mail, Search, LogOut } from "lucide-react";

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
    if (!storedUser) { navigate("/login"); return; }
    const user = JSON.parse(storedUser);
    if (user.role !== "admin") { navigate("/"); return; }

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
      } catch (error) { console.error("Error:", error); } finally { setLoading(false); }
    };
    fetchData();
  }, [navigate]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      const API_URL = 'http://localhost:5000';
      const storedUser = JSON.parse(localStorage.getItem("user"));
      await axios.put(`${API_URL}/api/admin/quotes/${id}`, { status: newStatus }, { headers: { 'x-user-role': storedUser.role } });
      setQuotes(quotes.map(q => q._id === id ? { ...q, referralStatus: newStatus } : q));
    } catch (error) { alert("Failed to update"); }
  };

  const filteredQuotes = quotes.filter(q => 
    (q.firstName + " " + q.lastName).toLowerCase().includes(searchTerm.toLowerCase()) || q.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="min-h-screen flex items-center justify-center font-bold text-[#00a98f]">Loading Dashboard...</div>;

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 pt-24 pb-20">
      {/* Detail Modal */}
      {selectedQuote && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 md:p-10 max-w-lg w-full shadow-2xl">
            <h2 className="text-2xl font-black text-slate-800 mb-6">Quote Details</h2>
            <div className="space-y-4 text-slate-600 text-sm">
              <p><strong>Name:</strong> {selectedQuote.firstName} {selectedQuote.lastName}</p>
              <p><strong>Email:</strong> {selectedQuote.email}</p>
              <p><strong>Phone:</strong> {selectedQuote.phone}</p>
              <p><strong>DOB:</strong> {selectedQuote.dob}</p>
              <p><strong>Address:</strong> {selectedQuote.address}, {selectedQuote.city}</p>
              <p><strong>Status:</strong> <span className="font-bold text-[#00a98f]">{selectedQuote.referralStatus}</span></p>
            </div>
            <button onClick={() => setSelectedQuote(null)} className="mt-8 w-full py-3 bg-[#00a98f] text-white rounded-xl font-bold">Close</button>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="text-3xl font-black text-[#00a98f]">Admin <span className="text-[#ff5100]">Dashboard</span></h1>
            <button onClick={() => navigate("/")} className="text-slate-500 flex items-center gap-2 font-bold hover:text-red-500"><LogOut size={18}/> Exit Admin</button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <input type="text" placeholder="Search by name or email..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-[#00a98f]" />
              <Search className="absolute left-4 top-3.5 text-slate-400" size={18} />
            </div>
            <div className="flex bg-white p-1 rounded-2xl border border-slate-200">
              <button onClick={() => setActiveTab("quotes")} className={`flex-1 px-6 py-2 rounded-xl font-bold ${activeTab === "quotes" ? "bg-[#00a98f] text-white" : "text-slate-500"}`}>Leads</button>
              <button onClick={() => setActiveTab("users")} className={`flex-1 px-6 py-2 rounded-xl font-bold ${activeTab === "users" ? "bg-[#00a98f] text-white" : "text-slate-500"}`}>Users</button>
            </div>
          </div>
        </div>

        {activeTab === "quotes" ? (
          <div className="grid grid-cols-1 gap-4">
            {filteredQuotes.map((q) => (
              <div key={q._id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-lg">{q.firstName} {q.lastName}</h3>
                  <p className="text-sm text-slate-500">{q.email} • {q.zipCode}</p>
                </div>
                <div className="flex items-center gap-3">
                  <select value={q.referralStatus} onChange={(e) => handleStatusChange(q._id, e.target.value)} className="text-xs p-2 bg-slate-50 rounded-lg border border-slate-200 font-bold uppercase">
                    <option>Processing</option><option>Approved</option><option>Rejected</option>
                  </select>
                  <button onClick={() => setSelectedQuote(q)} className="text-[#00a98f] font-bold text-sm underline">Details</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 text-xs text-slate-400 uppercase">
                <tr><th className="p-4">Name</th><th className="p-4">Email</th><th className="p-4">Phone</th></tr>
              </thead>
              <tbody className="text-sm">
                {users.map(u => (
                  <tr key={u._id} className="border-t">
                    <td className="p-4 font-bold">{u.fullName}</td>
                    <td className="p-4">{u.email}</td>
                    <td className="p-4">{u.phone}</td>
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
