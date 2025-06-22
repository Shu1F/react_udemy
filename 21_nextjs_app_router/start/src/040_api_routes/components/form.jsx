import { useState } from "react";

export default function ArticleForm() {
  const [newId, setNewId] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [msg, setMsg] = useState("");
  // components/form.jsx
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const res = await fetch("/api/article", {
        method: "POST",
        body: formData,
      });
      const isJson = res.headers
        .get("content-type")
        ?.includes("application/json");
      const raw = isJson ? await res.json() : await res.text();

      if (!res.ok) {
        // エラー応答
        setMsg(
          isJson
            ? raw.msg ?? "登録に失敗しました。"
            : raw || "登録に失敗しました。"
        );
        return;
      }

      // 成功応答
      setMsg(`${raw.id}:${raw.title} の登録が完了しました。`);
    } catch (err) {
      setMsg("通信エラーが発生しました。");
    }
  };

  return (
    <form method="POST" onSubmit={onSubmit}>
      <div>
        <label>
          {" "}
          Id:
          <input
            type="number"
            name="id"
            value={newId}
            onChange={(e) => setNewId(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          {" "}
          Title:
          <input
            name="title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">送信</button>
      <div style={{ color: "red" }}>{msg}</div>
    </form>
  );
}
