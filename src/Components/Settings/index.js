import { useEffect, useState } from "react";

function Settings() {
  const [form, setForm] = useState({
    title: "Dashboard",
    showTime: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <form className="flex flex-col">
      <div>
        <label htmlFor="title">Title: </label>
        <input name="title" onChange={handleChange}></input>
      </div>
      <div>
        <label htmlFor="showTime">Show Time: </label>
        <select name="showTime" defaultValue={true} onChange={handleChange}>
          <option value={true}>True</option>
          <option value={false}>False</option>
        </select>
      </div>
    </form>
  );
}

export default Settings;
