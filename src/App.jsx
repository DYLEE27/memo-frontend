import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export default function App() {
  const [memos, setMemos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    setMemos([{ id: 1, content: "첫 번째 메모(임시 데이터)" }]);
  }, []);

  const addMemo = () => {
    if (!text.trim()) return;

    setMemos([
      ...memos,
      {
        id: Date.now(),
        content: text,
      },
    ]);

    setText("");
  };

  const deleteMemo = (id) => {
    setMemos(memos.filter((m) => m.id !== id));
  };

  return (
    <div
      style={{
        maxWidth: 480,
        margin: "40px auto",
        fontFamily: "sans-serif",
      }}
    >
      <h1>📝 메모장</h1>

      <div style={{ display: "flex", gap: 8 }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="메모를 입력하세요"
          style={{ flex: 1, padding: 8 }}
        />

        <button onClick={addMemo}>추가</button>
      </div>

      <ul>
        {memos.map((m) => (
          <li key={m.id}>
            {m.content}
            <button
              onClick={() => deleteMemo(m.id)}
              style={{ marginLeft: 8 }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}