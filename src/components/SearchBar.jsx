import { useState } from "react";
import "./SearchBar.css"; // استدعاء ملف التنسيقات

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // منع تحديث الصفحة
    if (query.trim()) {
      onSearch(query); // استدعاء الدالة اللي جايه من Home
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="ابحث عن فيلم..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">بحث</button>
    </form>
  );
}
