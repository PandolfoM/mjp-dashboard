import { useContext, useEffect, useState } from "react";
import { Context } from "../../utils/store";

function Settings() {
  const [state, dispatch] = useContext(Context);
  const [form, setForm] = useState({
    title: "Dashboard",
    showTime: true,
    services: [
      {
        name: "",
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const headerChange = (e, i) => {
    const { name, value } = e.target;
    setForm((prev) => {
      const newService = { ...prev };
      newService.services[i][name] = value;
      return newService;
    });
  };

  const addService = (e) => {
    e.preventDefault()
    setForm((prev) => {
      return {...prev, services: [...prev.services, {name: ""}]}
    })
  }

  useEffect(() => {
    if (state.configSave) {
      // dispatch({
      //   type: "TOGGLE_CONFIGSAVE",
      //   payload: false,
      // });
      setForm((current) => {
        return {
          ...current,
        };
      });
    }
  }, [state.configSave]);

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
      {form.services.map((form, i) => (
        <div key={i}>
          <input
            name="name"
            placeholder="Name"
            onChange={(e) => headerChange(e, i)}
            value={form.name}></input>
        </div>
      ))}
      <button onClick={addService}>Add Service</button>
    </form>
  );
}

export default Settings;
